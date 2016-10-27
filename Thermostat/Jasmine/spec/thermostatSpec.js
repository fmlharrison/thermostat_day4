describe ("Thermostat", function() {
var thermostat

beforeEach(function () {
  thermostat = new Thermostat ();
});
    it ('starts at 20°C', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it ('starts with the power saving on by default', function () {
      expect(thermostat.powerSaving).toBe(true);
    });

    it ('raises the temperature by 1°C', function() {
      thermostat.up ();
        expect(thermostat.temperature).toBe(21);
    });

  describe ("Down", function () {
    it ('decreases the temperature by 1°C', function() {
      thermostat.down ();
        expect(thermostat.temperature).toBe(19);
    });
  });

  describe ("Minimum temperature", function () {
    it ('can\'t have a lower temperature than 10°C', function (){
        thermostat.temperature = 10
        expect (function () {thermostat.down () }).toThrow ('the lowest temperature is 10°C!');
    });
  });

  describe ("Maximum temperature 25°C", function () {
    it ('can\'t have a temperature higher than 25°C if power saving is on', function (){
        thermostat.temperature = 25;
        expect (function () {thermostat.up () }).toThrow ('the temperature can\t be higher than 25°C if power saving mode is on!');
    });
  });

  describe ("Maximum temperature 32°C", function () {
    it ('can\'t have a temperature higher than 32°C if power saving is off', function (){
        thermostat.temperature = 32;
        thermostat.powerSaving = false;
        expect (function () {thermostat.up () }).toThrow ('the temperature can\t be higher than 32°C if power saving mode is off!');
    });
  });

  describe ("Maximum temperature 32°C", function () {
    it ('can\'t have a temperature higher than 32°C if power saving is off', function (){
        thermostat.temperature = 32;
        thermostat.powerSaving = false;
        expect (function () {thermostat.up () }).toThrow ('the temperature can\t be higher than 32°C if power saving mode is off!');
    });
  });


  describe ("Reset temperature", function () {
    it ('it resets the temperature to 20°C', function (){
        thermostat.up ();
        thermostat.resetTemp ()
        expect(thermostat.temperature).toBe(20)
    });
  });

  describe ("Ask Energy usage", function () {
    it ('it allows to ask about the current energy usage for low', function (){
      thermostat.temperature = 12
        expect(thermostat.energyUsage ()).toEqual("low_usage")
    });
    it ('it allows to ask about the current energy usage for medium', function (){
      thermostat.temperature = 22
        expect(thermostat.energyUsage ()).toEqual("medium_usage")
    });
    it ('it allows to ask about the current energy usage for high', function (){
      thermostat.temperature = 26
        expect(thermostat.energyUsage ()).toEqual("high_usage")
    });

    describe ("switchMode", function () {
      it ('switches Power Saving on and off', function (){
        thermostat.switchMode ()
          expect(thermostat.powerSaving).toBe(false)
      });
    });

  });



});
