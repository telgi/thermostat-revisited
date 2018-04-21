describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start with a temperature of 20 degrees", function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  describe("When power saving mode is on", function() {
    it("should not increase temperature if current temperature is 25 degrees", function() {
      thermostat._powerSavingMode = true;
      thermostat._temperature = 25;
      expect(function() { thermostat.increase() }).toThrowError('Max temp reached');
    });
  });

  describe("When power saving mode is off", function() {
    beforeEach(function() {
      thermostat._powerSavingMode = false;
    });

    it("should not increase temperature if current temperature is 32 degrees", function() {
      thermostat._setMaxtemp();
      thermostat._temperature = 32;
      expect(function() { thermostat.increase() }).toThrowError('Max temp reached');
    });

    it("should decrease the current temperature by 1", function() {
      thermostat.decrease();
      expect(thermostat.temperature()).toEqual(19);
    });

    it("should not decrease temperature if current temperature is 10 degrees", function() {
      thermostat._temperature = thermostat._minTemp;
      expect(function() { thermostat.decrease() }).toThrowError('Min temp is 10 degrees');
    });
  });
});
