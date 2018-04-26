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
});
