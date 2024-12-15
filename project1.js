let url="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let apikey="18596fab61f16428fbcb0d1962527718";
let searchbox=document.querySelector(".search input");
let searchbtn=document.querySelector("button");
let weathericon=document.querySelector(".weathericon");





async function getWheather(city) {
    try{
        let res=await fetch(url + city + `&appid=${apikey}`);
        let data=await res.json();
        if(res.status==404){
            document.querySelector(".error").style.display="block";
         document.querySelector(".weather").style.display="none";
        }
        else{
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector(".city").innerHTML=data.name;
    
    
            document.querySelector(".humidity").innerHTML=data.main.humidity+ "%" ;
            document.querySelector(".windspeed").innerHTML=data.wind.speed+"km/h";
    
    
    
    
           
    
         if(data.weather[0].main == "Rain"){
            weathericon.src="./assets/rain.png";
         }
         else if(data.weather[0].main == "Clouds"){
            weathericon.src="./assets/clouds.png";
         }
         else if(data.weather[0].main == "Drizzle"){
            weathericon.src="./assets/drizzle.png";
         }
         else if(data.weather[0].main== "Mist"){
            weathericon.src="./assets/mist.png";
         }
         else if(data.weather[0].main== "Snow"){
            weathericon.src="./assets/snow.png";
         }
    
         document.querySelector(".weather").style.display="block"; 
    
        }

        }

       

     


    catch(err){
        console.log(err);
    }
}

searchbtn.addEventListener("click",()=>{
     getWheather(searchbox.value);
     searchbox.value="";
})