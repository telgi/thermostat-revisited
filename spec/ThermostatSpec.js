describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("When a new thermostat is created", function() {
    it("should start with a temperature of 20 degrees", function() {
      expect(thermostat._temperature).toEqual(20);
    });

    it("should have a minimum temperature of 10 degrees", function() {
      expect(thermostat._minTemp).toEqual(10);
    });

    it("should start with power saving mode on", function() {
      expect(thermostat._powerSavingMode).toEqual(true);
    });

    it("should start with a maximum temperature of 25 degrees due to power saving mode being on", function() {
      expect(thermostat._maxTemp).toEqual(25);
    });

    it("should start with energy usage level set to `Medium`", function() {
      expect(thermostat._energyUsage).toEqual('Medium');
    });
  });

  describe("General functionality", function() {
    it("should decrease the current temperature by 1", function() {
      thermostat.decrease();
      expect(thermostat._temperature).toEqual(19);
    });

    it("should not decrease temperature if current temperature is 10 degrees", function() {
      thermostat._temperature = thermostat._minTemp;
      expect(function() { thermostat.decrease() }).toThrowError('Min temp is 10 degrees');
    });

    it("should be able to reset temperature to 20 degrees", function() {
      thermostat._temperature = 27;
      thermostat.resetTemp();
      expect(thermostat._temperature).toEqual(20)
    });

    it("should set energy usage level to `Low` if temperature is less than 18 degrees", function() {
      thermostat._temperature = 17;
      thermostat.checkEnergyUsage()
      expect(thermostat._energyUsage).toEqual('Low');
    });

    it("should set energy usage level to `Medium` if temperature is between 18 and 25 degrees", function() {
      thermostat._temperature = 22;
      thermostat.checkEnergyUsage()
      expect(thermostat._energyUsage).toEqual('Medium');
    });
  });

  describe("When power saving mode is on", function() {
    beforeEach(function() {
      thermostat._powerSavingMode = true;
    });

    it("should not increase temperature if current temperature is 25 degrees", function() {
      thermostat._temperature = 25;
      expect(function() { thermostat.increase() }).toThrowError('Max temp reached');
    });

    it("should be able to turn power saving mode off", function() {
      thermostat.setPowerSavingMode();
      expect(thermostat._powerSavingMode).toEqual(false);
    });
  });

  describe("When power saving mode is off", function() {
    beforeEach(function() {
      thermostat.setPowerSavingMode();
    });

    it("should not increase temperature if current temperature is 32 degrees", function() {
      thermostat._temperature = 32;
      expect(function() { thermostat.increase() }).toThrowError('Max temp reached');
    });

    it("should set energy usage level to `High` if temperature is greater than 25 degrees", function() {
      thermostat._temperature = 29;
      thermostat.checkEnergyUsage();
      expect(thermostat._energyUsage).toEqual('High');
    });
  });
});
