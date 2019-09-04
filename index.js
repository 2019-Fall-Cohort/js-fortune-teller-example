const input = require("readline-sync");

const firstName = input.question("What is your first name? ");
const lastName = input.question("What is your last name? ");
const age = input.questionInt("How old are you? ");
const birthMonth = input.questionInt(
  "What is your birth month (i.e. Jan = 1)? "
);
const favoriteColor = input.question("What is your favorite ROYGBIV color? ");
const numberOfSiblings = input.questionInt("How many siblings do you have? ");

let retirementYears;

// If age is even
if (age % 2 === 0) {
  retirementYears = "13 years";
} else {
  retirementYears = "30 years";
}

// 0	Boca Raton, FL
// 1	Nassau, Bahamas
// 2	Ponta Negra,Brazil
// 3	Portland, Oregon
// greater than three	Baton Rouge, LA
// less than zero	Chernobyl, Ukraine

let vacationLocation;

if (numberOfSiblings === 0) {
  vacationLocation = "Boca Raton, FL";
} else if (numberOfSiblings === 1) {
  vacationLocation = "Nassau, Bahamas";
} else if (numberOfSiblings === 2) {
  vacationLocation = "Ponta Negra, Brazil";
} else if (numberOfSiblings === 3) {
  vacationLocation = "Portland, Oregon";
} else if (numberOfSiblings > 3) {
  vacationLocation = "Baton Rouge, LA";
} else {
  vacationLocation = "Chernobyl, Ukraine";
}

// red	Maserati
// orange	stallion
// yellow	chariot
// green	taxi
// blue	rickshaw
// indigo	motor scooter
// violet	flying saucer

let vehicle;

switch (favoriteColor.toLowerCase()) {
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

let bankBalance;

// switch (birthMonth) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     bankBalance = 3000000.0;
//     break;
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//     bankBalance = 12345.0;
//     break;
//   case 9:
//   case 10:
//   case 11:
//   case 12:
//     bankBalance = 32518324859324.0;
//     break;

//   default:
//     bankBalance = 0.0;
//     break;
// }

// AND = &&
// OR = ||

if (birthMonth >= 1 && birthMonth <= 4) {
  bankBalance = 3000000.0;
} else if (birthMonth >= 5 && birthMonth <= 8) {
  bankBalance = 12345.0;
} else if (birthMonth >= 9 && birthMonth <= 12) {
  bankBalance = 1234284123884.0;
} else {
  bankBalance = 0.0;
}

console.log(
  `${firstName} ${lastName} will retire in ${retirementYears} with ${bankBalance} in the bank, a vacation home in ${vacationLocation}, and travel by ${vehicle}.`
);
