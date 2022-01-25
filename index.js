const apodUrl = 'https://api.nasa.gov/planetary/apod?api_key='
const apodKey = vault.nasaApiKey
const apodStDate = '&start_date=2021-12-29&end_date=2022-01-09'

fetch(`${apodUrl}${apodKey}${apodStDate}`)
.then(response => response.json())
.then(apodStuff =>{
    console.log(apodStuff)
})