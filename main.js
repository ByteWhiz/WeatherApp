
const ApiKey = "62f8caf10c1976d81bf8f4bb1484f419"

const cityName = [
    {"cityCode": 295530 , "cityName": "BEER SHEVA"},
    {"cityCode": 295277 , "cityName": "EILAT"},
    {"cityCode": 294800 , "cityName": "HIFA"}
]

let searchBTN = document.querySelector('#sbtn')
const searchInputValue = document.querySelector('input')


let mainco = document.querySelector("#mainContainer")




searchBTN.addEventListener('click', c =>{
    //get the string value from the input
    let searchInput = searchInputValue.value

    for(let i = 0; i <= cityName.length -1; i++){
        if(cityName[i].cityName === searchInput.toLocaleUpperCase()){
            //case city name ture create html/css
            //check if there is existing child if yes remove them all
            let mainCon = document.querySelector('#mainContainer')
            if(mainCon.hasChildNodes()){
                while(mainCon.firstChild){
                    mainCon.removeChild(mainCon.firstChild)
                }
            }

            let url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityName[i].cityCode}&units=metric&appid=`
            let API = url + ApiKey

            fetch(API)
            .then(Response =>{
            Response.json().then(json =>{                   
                
                //create new/update
                console.log("update the html/css")
                console.log(json)
                let mainheaderText = document.createElement('h2')
                mainheaderText.id = "mainHeader"
                mainheaderText.textContent = "Weather app"
                //add to main container
                mainCon.appendChild(mainheaderText)

                let label = document.createElement('label')
                label.innerText = "Select your city:"
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
                cnHeader.innerText = `${json.city.country}`
                innerRS.appendChild(cnHeader)

                let h3 = document.createElement('h3')
                h3.innerText = `${cityName[i].cityName.toUpperCase()}`
                innerRS.appendChild(h3)

                let h5 = document.createElement('h5')
                h5.innerText = "Weather for the next 4 days"
                innerRS.appendChild(h5)

                let days = document.createElement('div')
                days.id = "days"
                innerRS.appendChild(days)

                
                //create each day
                for(let i = 1; i <= 5; i++){
                    let d = document.createElement('div')
                    d.className = "d" 
                    d.innerText = `${json.list[j].dt_txt.substring(0,10)}`

                    days.appendChild(d)

                    let p = document.createElement('p')
                    p.innerText = `${json.list[j].weather[0].description}`
                    d.appendChild(p)


                    let Wicon = document.createElement('div')
                    Wicon.className = "Wicon"
                    d.appendChild(Wicon)
                    Wicon.innerText = `${json.list[j].main.temp} °C`
                    //color of temp display
                    if(json.list[j].main.temp > 35){
                        Wicon.style.backgroundColor = 'red'
                    }
                    if(json.list[j].main.temp <= 0){
                        Wicon.style.backgroundColor = 'lightblue'
                    }

                    j =  j + 8
                }


                //with the div "IMG" inner2
                let innerRS2 = document.createElement('div')
                innerRS2.className = "innerRES"
                let img = document.createElement('div')
                img.id = "cityIMG"
                innerRS2.appendChild(img)
                rs.appendChild(innerRS2)
                })
                .catch(err =>{
                    console.log(err)
                })
                
        let j = 0



        }
)}
}})


