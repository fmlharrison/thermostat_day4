function Thermostat () {
  this.temperature = 20;
  this.powerSaving = true;

};

Thermostat.prototype.up = function () {
  if ((this.temperature >= 25) && (this.powerSaving  == true)) {
    throw ('the temperature can\t be higher than 25°C if power saving mode is on!')
}
  else if ((this.temperature >= 32) && (this.powerSaving  == false)) {
    throw ('the temperature can\t be higher than 32°C if power saving mode is off!')
  }
  else {
      this.temperature ++ ;
  }
};

Thermostat.prototype.down = function () {
  if (this.temperature > 10) {
  this.temperature -- ;
  }
  else {
    throw('the lowest temperature is 10°C!');
  };
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = 20;
};

Thermostat.prototype.switchMode = function () {
  if (this.powerSaving == true) {
    this.powerSaving = false;
  }
  else {
    this.powerSaving = true;
  }
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) {
    return "low_usage"
  }
  else if ((this.temperature >= 18) && (this.temperature < 25)) {
    return "medium_usage"
  }
  else {
    return "high_usage"
  }
};
