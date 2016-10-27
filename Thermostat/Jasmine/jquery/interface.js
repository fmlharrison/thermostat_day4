$( document ).ready(function(){

  var thermostat = new Thermostat();

  $("#weather").change(function (event) {
  var city = $("#weather").val();
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=37011bfc69150251e42df386aef58eae", function (result) {
    $(".weather_forcast").text("Current temperature in " + city + ": " + result.main.temp + " °C");
    event.preventDefault();
  });
  });

  temperatureCheck();

  $("#up").click(function () {
    thermostat.up();
    temperatureCheck();
  });

  $("#down").click(function () {
    thermostat.down();
    temperatureCheck();
  });

  $("#eco").click(function () {
    thermostat.switchMode();
    if (thermostat.powerSaving == true) {
      $("#mode").css("color", "green")
    }
    else {
      $("#mode").css("color", "red")
    }
  });

  $("#reset").click(function () {
    thermostat.resetTemp();
    temperatureCheck();
  });

  // $("#power").click(function () {
  //   alert ("Thermostat is switching off, good bye");
  // });

  function temperatureCheck () {
    $("#temperature").text(thermostat.temperature + " °C");
    $(".usage").text(thermostat.energyUsage());
    $("#temperature").attr('class', thermostat.energyUsage());
  };
});
