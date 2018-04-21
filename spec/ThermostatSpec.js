describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("When a new thermostat is created", function() {
    it("should start with a temperature of 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it("should have a minimum temperature of 10 degrees", function() {
      expect(thermostat._MIN_TEMP).toEqual(10);
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
    it("should down the current temperature by 1", function() {
      thermostat.down();
      expect(thermostat.getCurrentTemp()).toEqual(19);
    });

    it("should not decrease temperature if current temperature is 10 degrees", function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemp()).toEqual(10);
    });

    it("should be able to reset temperature to 20 degrees", function() {
      thermostat.up();
      thermostat.resetTemp();
      expect(thermostat.getCurrentTemp()).toEqual(20)
    });

    it("should set energy usage level to `Low` if temperature is less than 18 degrees", function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      thermostat.checkEnergyUsage()
      expect(thermostat._energyUsage).toEqual('Low');
    });

    it("should set energy usage level to `Medium` if temperature is between 18 and 25 degrees", function() {
      for (var i = 0; i < 3; i++) {
        thermostat.up();
      }
      thermostat.checkEnergyUsage()
      expect(thermostat._energyUsage).toEqual('Medium');
    });
  });

  describe("When power saving mode is on", function() {
    beforeEach(function() {
      thermostat._powerSavingMode = true;
    });

    it("should not increase temperature if current temperature is 25 degrees", function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25)
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
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(32)
    });

    it("should set energy usage level to `High` if temperature is greater than 25 degrees", function() {
      for (var i = 0; i < 7; i++) {
        thermostat.up();
      }
      thermostat.checkEnergyUsage();
      expect(thermostat._energyUsage).toEqual('High');
    });
  });
});
