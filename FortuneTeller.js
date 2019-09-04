class FortuneTeller {
  getBankBalance(providedBirthMonth) {
    let bankBalance = 0.0;
    if (this._isBetweenOneAndFour(providedBirthMonth)) {
      bankBalance = 3000000.0;
    } else if (providedBirthMonth >= 5 && providedBirthMonth <= 8) {
      bankBalance = 12345.0;
    } else if (providedBirthMonth >= 9 && providedBirthMonth <= 12) {
      bankBalance = 1234284123884.0;
    } else {
      bankBalance = 0.0;
    }
    return bankBalance;
  }

  getFortune(props) {
    return `${props.firstName} ${props.lastName} will retire in ${props.retirementYears} with ${props.bankBalance} in the bank, a vacation home in ${props.vacationLocation}, and travel by ${props.vehicle}.`;
  }

  getRetirementYears(providedAge) {
    let retirementYears;
    // If age is even
    if (this._isEven(providedAge)) {
      retirementYears = "13 years";
    } else {
      retirementYears = "30 years";
    }
    return retirementYears;
  }

  getVacationLocation(providedNumberOfSiblings) {
    let vacationLocation;
    if (providedNumberOfSiblings === 0) {
      vacationLocation = "Boca Raton, FL";
    } else if (providedNumberOfSiblings === 1) {
      vacationLocation = "Nassau, Bahamas";
    } else if (providedNumberOfSiblings === 2) {
      vacationLocation = "Ponta Negra, Brazil";
    } else if (providedNumberOfSiblings === 3) {
      vacationLocation = "Portland, Oregon";
    } else if (providedNumberOfSiblings > 3) {
      vacationLocation = "Baton Rouge, LA";
    } else {
      vacationLocation = "Chernobyl, Ukraine";
    }
    return vacationLocation;
  }

  getVehicle(providedFavoriteColor) {
    let vehicle;
    switch (providedFavoriteColor.toLowerCase()) {
      case "red":
        vehicle = "Maserati";
        // vehicle = new String("Maserati"); same as above
        break;
      case "orange":
        vehicle = "stallion";
        break;
      case "yellow":
        vehicle = "chariot";
        break;
      case "green":
        vehicle = "taxi";
        break;
      case "blue":
        vehicle = "rickshaw";
        break;
      case "indigo":
        vehicle = "bike";
        break;
      case "violet":
        vehicle = "spaceship";
        break;

      default:
        vehicle = "you did bad and you should feel bad.";
        break;
    }
    return vehicle;
  }

  _isBetweenOneAndFour(providedBirthMonth) {
    return providedBirthMonth >= 1 && providedBirthMonth <= 4;
  }

  _isEven(providedAge) {
    return providedAge % 2 === 0;
  }
}

module.exports = FortuneTeller;
