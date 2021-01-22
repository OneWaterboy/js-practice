"use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?lat=46.6062&lon=-122.3321&appid=4744f2355efd09f0b9d217be2f0dbec8&units=metric";

$.ajax ({
    url: url, 
    success: function (result) {
        console.log(result);

        $('#location').text(result.name);
        // Return temperature as a string
        let c = Math.round(result.main.temp);
        let degrees = c.toString()
        $('#temperature').text(degrees)
        $('#sky').text(result.weather[0].description);
        
        // Return wind speed and direction as a string
        let s = Math.round(result.wind.speed)
        let speed = s.toString();
        $('#wind').text(speed);
    }
})