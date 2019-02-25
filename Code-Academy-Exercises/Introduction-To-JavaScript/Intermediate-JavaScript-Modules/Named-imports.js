function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayStaffStatus(){
  availableAirplanes.forEach(function(element) {
    console.log(element.name +'meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff))

  })
}

displayStaffStatus();
