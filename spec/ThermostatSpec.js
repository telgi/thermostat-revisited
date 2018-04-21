describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start with a temperature of 20 degrees", function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  describe("Increasing Temperature", function() {
    it("should increase the current temperature by 1", function() {
      thermostat.increase();
      expect(thermostat.temperature()).toEqual(21);
    });
  });
});
