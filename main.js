
const ApiKey = "62f8caf10c1976d81bf8f4bb1484f419"
const cityCode = [295530,295277,294800]
const cityName = ["Beer sheva","Eilat","Haifa"]


const url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityCode[0]}&appid=`
const API = url + ApiKey

fetch(API)
.then(Response =>{
    Response.json().then(json =>{
        console.log(json.city.name)
    })
})
.catch(err =>{
    console.log(err)
})