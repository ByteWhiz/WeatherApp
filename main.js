
const ApiKey = "62f8caf10c1976d81bf8f4bb1484f419"

const cityName = [
    {"cityCode": 295530 , "cityName": "beer sheva"},
    {"cityCode": 295277},
    {"cityCode": 294800}
]

const searchBTN = document.querySelector('#sbtn')
const searchInputValue = document.querySelector('input')


//getting response from API
const url = `http://api.openweathermap.org/data/2.5/forecast?id=${294800}&appid=`
const API = url + ApiKey

fetch(API)
.then(Response =>{
    Response.json().then(json =>{
        console.log(json.city.name)
        //adding event listner for the search button 
searchBTN.addEventListener('click', c =>{
    //get the string value from the input
    let searchInput = searchInputValue.value
    for(let i = 0; i <= cityName.length -1; i++){
        if(cityName[i].cityName === searchInput){
            //case city name ture create html/css

            //check if there is existing child if yes remove them all
            let box1 = document.querySelector('#in1')
            if(box1.hasChildNodes()){
                while(box1.firstChild){
                    box1.removeChild(box1.firstChild)
                }
            }

            //create new/update
            console.log("update the html/css")


            let countryHeader = document.querySelector('h2')
            countryHeader.id = "CN"
            countryHeader.textContent = "count"

            let citynameHeader = document.createElement('h3')
            citynameHeader.textContent = cityName[i].cityName
            box1.appendChild(countryHeader)
            box1.appendChild(citynameHeader)
        }else{
            console.log("non found")
        }
    }
})
    })
})
.catch(err =>{
    console.log(err)
})
