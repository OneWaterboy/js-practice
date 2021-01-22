"use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=4744f2355efd09f0b9d217be2f0dbec8&units=metric";

$.ajax ({
    url: url, 
    success: function (result) {
        console.log(result);
    }
})