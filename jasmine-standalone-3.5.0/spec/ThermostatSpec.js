'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when initializing', function() {
    it('the starting temperature is 20 degrees', function() {
      expect(thermostat.currentTemperature()).toEqual(20);
    });
  });

  describe('changing temperature', function() {
    it('by increasing it', function() {
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(21);
    });

    it('by decreasing it', function() {
      thermostat.down();
      expect(thermostat.currentTemperature()).toEqual(19);
    });

    it('has a minimum of 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down() ;
      }
      expect(thermostat.currentTemperature()).toEqual(10);
    });
  });

  describe('power saving mode', function() {
    it('is on by default', function() {
      expect(thermostat.powerSavingOn()).toBe(true);
    });

    it('can be turned off', function() {
      thermostat.turnOffPowerSavingMode();
      expect(thermostat.powerSavingOn()).toBe(false);
    });

    it('can be turned back on', function() {
      thermostat.turnOffPowerSavingMode();
      expect(thermostat.powerSavingOn()).toBe(false);
      thermostat.turnOnPowerSavingMode();
      expect(thermostat.powerSavingOn()).toBe(true)
    })

    it('has a maximum of 25 degrees when on', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemperature()).toEqual(25);
    });

    it('has a maximum of 32 degrees when off', function() {
      thermostat.turnOffPowerSavingMode();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemperature()).toEqual(32);
    });

    it('can reset to default temp', function() {
      thermostat.up();
      thermostat.resetTemp();
      expect(thermostat.currentTemperature()).toEqual(20);
    });
  });

  describe('energy usage levels', function() {
    it('<18 is low-usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.usage()).toEqual('low-usage');
    });

    it('18<temp<25 is med-usage', function() {
      expect(thermostat.usage()).toEqual('medium-usage');
    });

    it('>25 is high-usage', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.usage()).toEqual('high-usage');
    })
  })
});
