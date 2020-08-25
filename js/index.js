'use strict';

const getTheWeather = document.getElementById('weatherIs');

function weatherIs () {
    return fetch 
    ("https://api.openweathermap.org/data/2.5/weather?q=marietta&appid={4a66b55f4bb56748d359161740003a5c}&units=imperial"
    )
    .then(function (response){
            return response.json;
    })
    .then(function (data) {
            return data;
    }) 
}
        
(function () {
    getTheWeather().then(function (response) {
        //console.log("fetch response", response);
        weatherIs.innerHTML = response.main.temp + "°";
    })
})();
    