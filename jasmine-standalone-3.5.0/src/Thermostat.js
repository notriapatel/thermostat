'use strict';

function Thermostat() {
  this.DEFAULT = 20;
  this.temperature = this.DEFAULT
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MEDIUM = 18;
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaxTemperature()) {
    return;
  }
 return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinTemperature()) {
    return;
  } 
  this.temperature -=1;
};

Thermostat.prototype.powerSavingOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.turnOffPowerSavingMode = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.turnOnPowerSavingMode = function() {
  this.powerSavingMode = true;
}

Thermostat.prototype.isMaxTemperature = function() {
  if (this.powerSavingMode === false) {
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  }
  return this.temperature === this.MAX_TEMP_PSM_ON;
};

Thermostat.prototype.isMinTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEFAULT;
};

Thermostat.prototype.usage = function() {
  if (this.temperature < this.MEDIUM) {
    return 'low-usage';
  }
  if (this.temperature >= this.MEDIUM && this.temperature < this.MAX_TEMP_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage'
}