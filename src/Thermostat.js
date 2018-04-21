function Thermostat() {
  this._temperature = 20;
}

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.increase = function () {
  if (this._maxtemp()) {
    throw new Error('Max temp is 32 degrees');
  } else {
    this._temperature++;
  }
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

Thermostat.prototype._maxtemp = function () {
  return (this._temperature === 32);
};
