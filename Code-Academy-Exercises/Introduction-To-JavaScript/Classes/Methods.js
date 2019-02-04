class Surgeon {
  constructor(name, department, remainingVacationDays) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name () {
    return this._name
  }
  get department () {
    return this._department
  }
  get remainingVacationDays() {
    return this._remainingVacationDays
  }
  takeVacationDays(daysOff) {
    return this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
