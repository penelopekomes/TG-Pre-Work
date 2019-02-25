const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

// on 2-missionControl.js

const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());
