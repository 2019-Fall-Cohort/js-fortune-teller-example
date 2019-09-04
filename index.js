const input = require("readline-sync");
const FortuneTeller = require("./FortuneTeller");

const fortuneTeller = new FortuneTeller();

const firstName = input.question("What is your first name? ");
const lastName = input.question("What is your last name? ");
const age = input.questionInt("How old are you? ");
const birthMonth = input.questionInt(
  "What is your birth month (i.e. Jan = 1)? "
);
const favoriteColor = input.question("What is your favorite ROYGBIV color? ");
const numberOfSiblings = input.questionInt("How many siblings do you have? ");

const retirementYears = fortuneTeller.getRetirementYears(age);
const vacationLocation = fortuneTeller.getVacationLocation(numberOfSiblings);
const vehicle = fortuneTeller.getVehicle(favoriteColor);
const bankBalance = fortuneTeller.getBankBalance(birthMonth);

console.log(
  fortuneTeller.getFortune({
    lastName: lastName,
    retirementYears: retirementYears,
    firstName: firstName,
    bankBalance: bankBalance,
    vehicle: vehicle,
    vacationLocation: vacationLocation
  })
);
