'use strict';

const weather = document.getElementById(weather)

const getQuote = (category) => {
const url = 'https://home.openweathermap.org/api_keys=${category}&4a66b55f4bb56748d359161740003a5c'


getQuote(url.then(function(response {
    console.log(response);
    weather.html = response;
}))
