"use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?zip=98208&appid=4744f2355efd09f0b9d217be2f0dbec8&units=metric";

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
        
        
        //Convert Sunrise and sunset time from unix time stamp code
                //The Following Conversion method Was Taken Form Stack Overflow
        let unix_timestamp = result.sys.sunrise;
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);
        var sunUp = formattedTime.toString();
        $('#sunUp').text(sunUp);
            //sunset
        let unix_timestamp2 = result.sys.sunset;
        var date = new Date(unix_timestamp2 * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);
        var sunDown = formattedTime.toString();
        $('#sunDown').text(sunDown);

    }
})