const apodUrl = 'https://api.nasa.gov/planetary/apod?api_key='
const apodKey = vault.nasaApiKey
const apodStDate = '&start_date=2021-12-29&end_date=2022-01-09'

getData()
formComments()

function getData() {
    fetch(`${apodUrl}${apodKey}${apodStDate}`)
        .then(response => response.json())
        .then(nasa => nasa.forEach(render))
        //.then(console.log)
}

function render(data) {
    
//Creating list of image names
   const list = document.getElementById ('list-container')
   const createList = document.createElement ('li')
   createList.idName = ('new-list')

   createList.innerText = data.title
   list.append(createList)
   
//click event to populate data from the list 

    createList.addEventListener ('click', (e) => {
        const title = document.getElementById ('card-title')
        title.innerText = data.title

        const img = document.getElementById ('card-image')
        img.src = data.url

        const explanation = document.getElementById ('image-description')
        explanation.innerText = data.explanation

    })

//button
    const likeCount = document.getElementById('like-count')
    let likes = 0
    likeCount.innerText = likes + ' likes'

    const heart = document.getElementById ('like-button')
    heart.addEventListener('click', () => {
        let addLikes = likes++
        likeCount.innerText = likes + ' likes'
    })
}

function formComments () {

    const commentsList = document.getElementById ('comments-list')
    //commentsList.innerText = ''
    
    const commentForm = document.getElementById('comment-form')
    commentForm.addEventListener('submit',(e) => {
      e.preventDefault()
      const commentInput = e.target.comment

      const newComment = document.createElement ('li')
      newComment.innerText = commentInput.value
      commentsList.append(newComment)

      e.target.reset()
})
}
