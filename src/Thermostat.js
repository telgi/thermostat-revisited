function Thermostat() {
  this._DEFAULT_TEMP = 20;
  this._MIN_TEMP = 10;
  this._MEDIUM_ENERGY_USAGE_MIN = 18;
  this._MEDIUM_ENERGY_USAGE_MAX = 25;
  this.temperature = this._DEFAULT_TEMP;
  this._powerSavingMode = true;
  this._maxTemp = 25;
  this._energyUsage = 'Medium';
}

Thermostat.prototype.getCurrentTemp = function () {
  return this.temperature;
};

Thermostat.prototype.up = function () {
  if (this._isMaxTemp()) {
    return;
  } else {
    this.temperature++;
  }
};

Thermostat.prototype.down = function () {
  if (this._isMinTemp()) {
    return;
  } else {
    this.temperature--;
  }
};

Thermostat.prototype.setPowerSavingMode = function () {
  this._powerSavingMode = !this._powerSavingMode;
  this.resetTemp();
  this._setMaxtemp();
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = this._DEFAULT_TEMP;
};

Thermostat.prototype.checkEnergyUsage = function () {
  if (this.temperature < this._MEDIUM_ENERGY_USAGE_MIN) {
    this._energyUsage = 'Low';
  } else if (this.temperature > this._MEDIUM_ENERGY_USAGE_MAX) {
    this._energyUsage = 'High';
  } else {
    this._energyUsage = 'Medium';
  }
};

Thermostat.prototype._isMaxTemp = function () {
  return (this.temperature === this._maxTemp)
};

Thermostat.prototype._isMinTemp = function () {
  return (this.temperature === this._MIN_TEMP)
};

Thermostat.prototype._setMaxtemp = function () {
  if (this._powerSavingMode === false) {
    this._maxTemp = 32;
  } else {
    this._maxTemp = 25;
  }
};
