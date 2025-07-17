const apiKey="c941abd3006d3b2a79d2211abdf997e5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button")


//featching function

async function checkWeather(city) {
    const response= await fetch(apiUrl+city +`&appid=${apiKey}`);
    var data=await response.json();
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
         document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";
      if(data.weather[0].main=="Clouds"){
        document.querySelector(".weather-icon").src="/images/clouds.png"
       }
        else if(data.weather[0].main=="Clear"){
        document.querySelector(".weather-icon").src="/images/clear.png"
        }
        else if(data.weather[0].main=="Rain"){
        document.querySelector(".weather-icon").src="/images/rain.png"
    }
          else if(data.weather[0].main=="Drizzle"){
        document.querySelector(".weather-icon").src="/images/drizzle.png"
    }
          else if(data.weather[0].main=="Mist"){
        document.querySelector(".weather-icon").src="/images/mist.png"
    }
         document.querySelector(".weather").style.display="block";
         document.querySelector(".error").style.display="none";

    }

   
}

searchbtn.addEventListener("click",()=>{
     checkWeather(searchBox.value)

}
   
)