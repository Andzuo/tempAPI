const key = "9961d7c72ac7ada3c68ea24ce6c01aa6"

const bgWeather = {
    'céu limpo': '/public/coverr-beautiful-forest-in-autumn-5508-1080p.mp4',
    'poucas nuvens': '/public/coverr-cloud-timelapse-8383-1080p.mp4',
    'nuvens dispersas': '/public/coverr-cloud-timelapse-8383-1080p.mp4',
    'nuvens quebradas': '/public/coverr-cloud-timelapse-8383-1080p.mp4',
    'nublado': '/public/rain_-_78 (Original).mp4',
    'névoa': 'public/mist.mp4',
    'nevoeiro': 'public/fog.mp4',
    'chuva leve': '/public/rain_-_78 (Original).mp4',
    'chuva moderada': '/public/rain_-_78 (Original).mp4',
    'chuva pesada': '/public/rain_-_78 (Original).mp4',
    'neve leve': 'public/light-snow.mp4',
    'neve moderada': 'public/moderate-snow.mp4',
    'neve pesada': 'public/heavy-snow.mp4',
    'tempestade elétrica': 'public/thunderstorm.mp4',
    'chuva intensa': 'public/shower-rain.mp4',
    'garoa leve': '/public/rain_-_78 (Original).mp4',
}
async function searchcity (cidade) {
   try{ 
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    const responseData = await data.json();

    if (responseData.cod && responseData.cod !== 200) {
        throw new Error(`Erro na API: ${responseData.message}`);
    }
        spotData(responseData)
    } catch (error) {
        Spotalert()
    }
}

function spotData(data, weather) {


    var weather = data.weather[0].description.toLowerCase();
    var bgBodyElements = document.getElementById("videoSource");


    document.querySelector(".city").innerHTML = "Tempo em: " + data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°";
    document.querySelector(".weather").innerHTML = data.weather[0].description;
    document.querySelector(".umity").innerHTML ="Umidade:" + data.main.humidity + "%";
    document.querySelector(".temp-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    console.log(data);

    
    
    if (weather in bgWeather) {
        bgBodyElements.src = bgWeather[weather];
        var videoPlay = document.getElementById("videoPlay");
        videoPlay.classList.add("bg-transition");
        videoPlay.load()
    } else {
        console.log("deu erro");
    }
    setTimeout(function () {
        bgBodyElements.classList.remove("bg-transition");
    }, 2000);
}



function Spotalert() {
    alert("Insira uma cidade valida")
}

function searchButton() {
    const cidade = document.querySelector(".city-input").value;
    
    searchcity(cidade)
}
