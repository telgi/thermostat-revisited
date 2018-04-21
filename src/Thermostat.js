function Thermostat() {
  this._temperature = 20;
  this._minTemp = 10;
  this._powerSavingMode = true;
  this._maxTemp = 25;
  this._energyUsage = 'Medium';
}

Thermostat.prototype.increase = function () {
  if (this._temperature === this._maxTemp) {
    throw new Error('Max temp reached');
  } else {
    this._temperature++;
  }
};

Thermostat.prototype.decrease = function () {
  if (this._temperature === this._minTemp) {
    throw new Error('Min temp is 10 degrees')
  } else {
    this._temperature--;
  }
};

Thermostat.prototype.setPowerSavingMode = function () {
  this._powerSavingMode = !this._powerSavingMode;
  this._setMaxtemp();
};

Thermostat.prototype.resetTemp = function () {
  this._temperature = 20;
};

Thermostat.prototype.checkEnergyUsage = function () {
  if (this._temperature < 18) {
    this._energyUsage = 'Low';
  } else if (this._temperature > 25) {
    this._energyUsage = 'High';
  } else {
    this._energyUsage = 'Medium';
  }
};

Thermostat.prototype._setMaxtemp = function () {
  if (this._powerSavingMode === false) {
    this._maxTemp = 32;
  } else {
    this._maxTemp = 25;
  }
};
