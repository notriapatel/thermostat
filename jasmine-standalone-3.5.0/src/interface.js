$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp();

  function updateTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  }

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemp()  
  })

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemp()
  })

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemp();
    updateTemp()
  })

  $('#powersaving-on').on('click', function() {
    thermostat.turnOnPowerSavingMode();
    updateTemp()
  })

  $('#powersaving-off').on('click', function() {
    thermostat.turnOffPowerSavingMode();
    updateTemp()
  })
  
})

