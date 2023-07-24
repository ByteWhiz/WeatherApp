//function getting parm and search for the city
const city = [
    {
    name:"BEER SHEVA", 
    url: "./citys/beersheva.png"},
    {
    name:"EILAT",
    url: "./citys/e.png"},
    {
        name:"HAIFA",
        url: "./citys/Haifa.png"
    }
]

export const searchIn = (cy) =>{
    for(let i = 0; i < city.length; i++){
        if(city[i].name === cy){
            return city[i].url
        }
    }
    return console.log("not found")
}

