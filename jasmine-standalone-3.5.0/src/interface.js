$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemp();

    $("#current-city").change(function() {
        var city = $("#current-city").val();
        displayWeather(city);
        $("#city").text(city);
    });

    function displayWeather(city) {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city;
        var token = "&appid=9c4f3f161177d59178b177a4f58243bc";
        var units = "&units=metric";
        $.get(url + token + units, function(data) {
            $("#current-temp").text(data.main.temp);
        });
    }

    function updateTemp() {
        $("#temperature").text(thermostat.temperature);
        $("#temperature").attr("class", thermostat.usage());
    }

    $("#temperature-up").on("click", function() {
        thermostat.up();
        updateTemp();
    });

    $("#temperature-down").on("click", function() {
        thermostat.down();
        updateTemp();
    });

    $("#temperature-reset").on("click", function() {
        thermostat.resetTemp();
        updateTemp();
    });

    $("#powersaving-on").on("click", function() {
        thermostat.turnOnPowerSavingMode();
        updateTemp();
    });

    $("#powersaving-off").on("click", function() {
        thermostat.turnOffPowerSavingMode();
        updateTemp();
    });
});