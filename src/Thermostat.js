function Thermostat() {
  this._temperature = 20;
}

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.increase = function () {
  this._temperature++;
};
