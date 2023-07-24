import { searchIn } from "./js/citys.js"


const ApiKey = "62f8caf10c1976d81bf8f4bb1484f419"

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


const cityName = [
    {"cityCode": 295530 , "cityName": "BEER SHEVA"},
    {"cityCode": 295277 , "cityName": "EILAT"},
    {"cityCode": 294800 , "cityName": "HAIFA"}
]

let searchBTN = document.querySelector('#sbtn')
const searchInputValue = document.querySelector('input')


let mainco = document.querySelector("#mainContainer")
//outo complite 
document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.querySelector('input')
    const suggestionsContainer = document.getElementById("autocomplete-list");

    const options = [
      "Haifa",
      "Beer sheva",
      "EILAT",
      "Tel-aviv",
      "jerusalem",
      "Tveria",
      "Rehovot",
      // Add more options as needed
    ];

    inputField.addEventListener("input", function() {
      const userInput = inputField.value.toLowerCase();
      const filteredOptions = options.filter(option =>
        option.toLowerCase().startsWith(userInput)
      );

      suggestionsContainer.innerHTML = filteredOptions
        .map(option => `<div>${option}</div>`)
        .join('');

      suggestionsContainer.style.display = filteredOptions.length ? "block" : "none";
    });

    document.addEventListener("click", function(event) {
      if (event.target !== inputField && event.target !== suggestionsContainer) {
        suggestionsContainer.innerText = "";
      }

      

    });
  });


//Search btn
searchBTN.addEventListener('click', c =>{
    //get the string value from the input
    let searchInput = searchInputValue.value

    for(let i = 0; i <= cityName.length -1; i++){
        if(cityName[i].cityName === searchInput.toUpperCase()){
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

                let mainheaderText = document.createElement('h2')
                mainheaderText.id = "mainHeader"
                mainheaderText.textContent = "Weather app"
                //add to main container
                mainCon.appendChild(mainheaderText)

                let label = document.createElement('label')
                label.innerText = "Select:"

                let ic = document.createElement('i')
                ic.className = "material-icons"
                ic.innerText = "search"
                label.appendChild(ic)

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
                btn.innerText = "back"
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
                    let date = new Date(json.list[j].dt_txt.substring(0,10))
                    let dayIndex = date.getDay()
                    let d = document.createElement('div')
                    d.className = "d" 
                    d.innerText = `${daysOfWeek[dayIndex] +"\n" +  json.list[j].dt_txt.substring(5,10)}`

                    days.appendChild(d)

                    let p = document.createElement('p')
                    p.innerText = `${json.list[j].weather[0].main}`
                    d.appendChild(p)

                    let icon = document.createElement('div')
                    icon.id = "icon"
                    d.appendChild(icon)


                    let Wicon = document.createElement('div')
                    Wicon.className = "Wicon"
                    d.appendChild(Wicon)
                    Wicon.innerText = `${json.list[j].main.temp} °C`
                    //color temp && icon display
                    if(json.list[j].main.temp > 35){
                        Wicon.style.backgroundColor = 'red'
                        icon.style.backgroundImage = `url('./icons/hot.png')`
                    }
                    if(json.list[j].main.temp <= 0){
                        Wicon.style.backgroundColor = 'lightblue'
                        icon.style.backgroundImage = `url('./icons/snow.png')`
                    }

                    else{
                        icon.style.backgroundImage = `url('./icons/sunny.png')`
                    }

                    j =  j + 8
                }


                //with the div "IMG" inner2
                let innerRS2 = document.createElement('div')
                innerRS2.className = "innerRES"

                let wrap = document.createElement('div')
                wrap.id = "riseset"
                innerRS2.appendChild(wrap)

                let w1 = document.createElement('div')
                w1.className = "rs"
                wrap.appendChild(w1)

                
                let w2 = document.createElement('div')
                w2.className = "rs"
                wrap.appendChild(w2)
                

                let p1 = document.createElement('p')
                let dateobj1 = new Date(json.city.sunrise * 1000)
                p1.innerText = `${dateobj1.getHours() + ":" + dateobj1.getMinutes()}`
                w1.appendChild(p1)

                let Sicon1 = document.createElement('div')
                Sicon1.id = "sunrise"
                w1.appendChild(Sicon1)  

                
                let p2 = document.createElement('p')
                let dateobj2 = new Date(json.city.sunset * 1000)
                p2.innerText = `${dateobj2.getHours() + ":" + dateobj2.getMinutes()}`
                w2.appendChild(p2)

                let Sicon2 = document.createElement('div')
                Sicon2.id = "sunset"
                w2.appendChild(Sicon2)  

          

                let img = document.createElement('div')
                img.id = "cityIMG"
                img.style.backgroundImage = `url('${searchIn(cityName[i].cityName)}')`; //pass the city name 
                innerRS2.appendChild(img)
                rs.appendChild(innerRS2)

                //test 
                console.log(json)


                })
                .catch(err =>{
                    console.log(err)
                })
                
        let j = 0



        }
)}
}})

