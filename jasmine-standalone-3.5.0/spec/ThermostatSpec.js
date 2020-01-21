'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when initializing', function() {
    it('the starting temperature is 20 degrees', function() {
      expect(thermostat.startingTemperature()).toEqual(20);
    });
  });

  describe('changing temperature', function() {
    it('by increasing it', function() {
      expect(thermostat.increaseTemperature(10)).toEqual(30);
    });

    it('by decreasing it', function() {
      expect(thermostat.decreaseTemperature(10)).toEqual(10);
    });
  });
});
