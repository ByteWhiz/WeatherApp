
const ApiKey = "62f8caf10c1976d81bf8f4bb1484f419"

const cityName = [
    {"cityCode": 295530 , "cityName": "beer sheva"},
    {"cityCode": 295277},
    {"cityCode": 294800}
]

const searchBTN = document.querySelector('#sbtn')
const searchInputValue = document.querySelector('input')


let mainco = document.querySelector("#mainContainer")



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
            let mainCon = document.querySelector('#mainContainer')
            if(mainCon.hasChildNodes()){
                while(mainCon.firstChild){
                    mainCon.removeChild(mainCon.firstChild)
                }
            }

            //create new/update
            console.log("update the html/css")
            let mainheaderText = document.createElement('h2')
            mainheaderText.id = "mainHeader"
            mainheaderText.textContent = "Text header app"
            //add to main container
            mainCon.appendChild(mainheaderText)

            let label = document.createElement('label')
            label.innerText = "search your city:"
            let search = document.createElement('input')
            search.type = "text"
            search.placeholder = "Eliat"
            label.appendChild(search)

            //add to main container
            mainCon.appendChild(label)

            let br = document.createElement('br')
            mainCon.appendChild(br)

            let btn = document.createElement('button')
            btn.type = "button"
            btn.id = "sbtn"
            btn.innerText = "SEARCH"
            //add to main container
            mainCon.appendChild(btn)

            
            let rs = document.createElement('div')
            rs.id = "resContainer"
            //add to main conatiner
            mainCon.appendChild(rs)
            //----------------------
            //adding to rs container
            //inner 1
            let innerRS = document.createElement('div')
            innerRS.id = "in1"
            innerRS.className = "innerRES"
            rs.appendChild(innerRS)

            let cnHeader = document.createElement('h2')
            cnHeader.id = "CN"
            cnHeader.innerText = "country"
            innerRS.appendChild(cnHeader)

            let h3 = document.createElement('h3')
            h3.innerText = "city name"
            innerRS.appendChild(h3)

            let h5 = document.createElement('h5')
            h5.innerText = "weather for the next 7 days"
            innerRS.appendChild(h5)

            let days = document.createElement('div')
            days.id = "days"
            innerRS.appendChild(days)

            //create each day
            for(let i = 0; i <= 7; i++){
                let d = document.createElement('div')
                d.className = "d"
                d.innerText = "day name"
                days.appendChild(d)

                let p = document.createElement('p')
                p.innerText = "30 dgrees"
                d.appendChild(p)

                let Wicon = document.createElement('div')
                Wicon.className = "Wicon"
                d.appendChild(Wicon)
            }


            //with the div "IMG" inner2
            let innerRS2 = document.createElement('div')
            innerRS2.className = "innerRES"
            let img = document.createElement('div')
            img.id = "cityIMG"
            img.innerText = "IMG CITY HERE"
            innerRS2.appendChild(img)
            rs.appendChild(innerRS2)




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
