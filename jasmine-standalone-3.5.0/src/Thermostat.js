function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.startingTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(number) {
 return this.temperature + number;
};

Thermostat.prototype.decreaseTemperature = function(number) {
  return this.temperature - number;
};