describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start with a temperature of 20 degrees", function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  describe("Increasing temperature", function() {
    it("should increase the current temperature by 1", function() {
      thermostat.increase();
      expect(thermostat.temperature()).toEqual(21);
    });

    it("should not increase temperature if current temperature is 32 degrees", function() {
      thermostat._temperature = 32;
      expect(function() { thermostat.increase() }).toThrowError('Max temp is 32 degrees');
    });
  });

  describe("Decreasing temperature", function() {
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
