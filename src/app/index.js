const key = "9961d7c72ac7ada3c68ea24ce6c01aa6"

function spotData(data) {
    document.querySelector(".city").innerHTML = "Tempo em: " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°"
    document.querySelector(".weather").innerHTML = data.weather[0].description
    document.querySelector(".umity").innerHTML ="Umidade:" + data.main.humidity + "%"
    console.log(data);
}

async function searchcity (cidade) {
    
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json());


    spotData(data)
}

function searchButton() {
    const cidade = document.querySelector(".city-input").value;
    
    searchcity(cidade)
}
