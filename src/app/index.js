const key = "9961d7c72ac7ada3c68ea24ce6c01aa6"

function spotData(data) {
    document.querySelector(".city").innerHTML = "Tempo em: " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°"
    document.querySelector(".weather").innerHTML = data.weather[0].description
    document.querySelector(".umity").innerHTML ="Umidade:" + data.main.humidity + "%"
    document.querySelector(".temp-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    console.log(data);
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

function Spotalert() {
    alert("Insira uma cidade valida")
}

function searchButton() {
    const cidade = document.querySelector(".city-input").value;
    
    searchcity(cidade)
}
