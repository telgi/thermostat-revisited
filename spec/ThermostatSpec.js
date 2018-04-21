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
  });

  describe("Decreasing temperature", function() {
    it("should decrease the current temperature by 1", function() {
      thermostat.decrease();
      expect(thermostat.temperature()).toEqual(19);
    });

    it("should not decrease temperature if current temperature is 10 degrees", function() {
      thermostat._temperature = 10;
      expect(function() { thermostat.decrease() }).toThrowError('Min temp is 10 degrees')
    });
  });
});
