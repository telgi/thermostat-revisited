$(document).ready(function() {
  var thermostat = new Thermostat();

  $("#temp-up").click(function() {
    thermostat.up();
    $("#temp").text(thermostat.temperature);
    setEnergyUsage();
  });

  $("#temp-down").click(function() {
    thermostat.down();
    $("#temp").text(thermostat.temperature);
    setEnergyUsage();
  });

  $("#power-mode").click(function() {
    thermostat.setPowerSavingMode();
    $("#temp").text(thermostat.temperature);
    if (thermostat._powerSavingMode === false) {
      $("#power-mode").text("Off")
    } else {
      $("#power-mode").text("On")
    }
  })

  function setEnergyUsage() {
    thermostat.checkEnergyUsage()
    $("#energy-usage").text(thermostat._energyUsage)
  };
});
