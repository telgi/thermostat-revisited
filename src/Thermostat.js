function Thermostat() {
  this._temperature = 20;
}

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.increase = function () {
  this._temperature++;
};

Thermostat.prototype.decrease = function () {
  if (this._minTemp()) {
    throw new Error('Min temp is 10 degrees')
  } else {
    this._temperature--;
  }
};

Thermostat.prototype._minTemp = function () {
  return (this._temperature === 10);
};
