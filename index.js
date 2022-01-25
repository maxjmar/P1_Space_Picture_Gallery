const apodUrl = 'https://api.nasa.gov/planetary/apod?api_key='
const apodKey = vault.nasaApiKey
const apodStDate = '&start_date=2022-01-01'

fetch(`${apodUrl}${apodKey}${apodStDate}`)
.then(response => response.json())
.then(apodStuff =>{
    const i= apodStuff.length -1
    console.log(apodStuff[i])
})