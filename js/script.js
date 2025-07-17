const apiKey="c941abd3006d3b2a79d2211abdf997e5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Germany"


//featching function

async function checkWeather() {
    const response= await fetch(apiUrl+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data)
    
}

checkWeather()