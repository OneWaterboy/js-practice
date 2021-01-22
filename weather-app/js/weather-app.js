"use strict"

const location = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=120&appid={4744f2355efd09f0b9d217be2f0dbec8}";

$.ajax ({
    url: location, 
    success: function (result) {
        console.log(result);
    }
})