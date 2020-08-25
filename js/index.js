'use strict';

const getTheWeather = document.getElementById('weatherIs');
const weatherUpdateButton = document.getElementById('submitInfo')
const myApiKey = '4a66b55f4bb56748d359161740003a5c'
const myCityName = ("Marietta")

weatherUpdateBotton.addEventListner("click", function(e)) {
    e.preventDeafault();}
function weatherIs () {
    let api = 'https://api.openweathermap.org/data/2.5/weather?q=${myCityName}&appid={myApiKey}&units=imperial'
    return fetch (api)
    .then(function (response){
            return response.json;
    })
    .then(function (data) {
            return data;
    }) 
    }
    function () {
    getTheWeather().then(function (response) {
        //console.log("fetch response", response);
        weatherIs.innerHTML = response.main.temp + "°";
    })
};

//  °C to °F conversion 
// function celsiusToFahrenheit(temperature){
//     // (0 °C × 9/5) + 32 = 32 °F
//     return (temperature * 9/5) + 32;
    