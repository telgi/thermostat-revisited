$(document).ready(function() {
  var thermostat = new Thermostat();

  $("#temp").text(thermostat.temperature);

  $("#temp-up").click(function() {
    thermostat.up();
    $("#temp").text(thermostat.temperature);
  });

  $("#temp-down").click(function() {
    thermostat.down();
    $("#temp").text(thermostat.temperature);
  });

  $("#power-mode").click(function() {
    thermostat.setPowerSavingMode();
    if (thermostat._powerSavingMode === false) {
      $("#power-mode").text("Off")
    } else {
      $("#power-mode").text("On")
    }
  })
});
