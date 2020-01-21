describe('Thermostat', function() {
  var thermostat;

  describe('initialization', function() {
    it('starting temperature is 20 degrees', function() {
      thermostat = new Thermostat();
      expect(thermostat.startingTemperature()).toEqual(20);
    });
  });
});
