// Episode 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//console will log The murderer is Miss Scarlet because scenario.murderer in declareMurderer is = 'Miss Scarlet'


// // Episode 2
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
// murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Console will display an error as const murderer is trying to be reassigned on line 22

// // Episode 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
// let murderer = 'Mrs. Peacock';
// return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// will display First Verdict: The murderer is Mrs. Peacock
//              Second Verdict: The murderer is Professor Plum as this let is defined in the global namespace

// // Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
// let suspectThree = 'Colonel Mustard';
// return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// will display The suspects are Miss Scarlet, Professor Plum, Colonel Mustard << suspect three is reassigned during declareAllSuspects function
//              Suspect three is Mrs. Peacock << suspectThree defined in global name space

// // Episode 5
// const scenario = {
// murderer: 'Miss Scarlet',
// room: 'Kitchen',
// weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
// scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
// return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// will display The weapon is the Revolver as the changeWeapon function updates the scenario.weapon regardless of the const var as objects are unaffected by const keyword


// // Episode 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
// murderer = 'Mr. Green';

// const plotTwist = function() {
//     murderer = 'Mrs. White';
// }

// plotTwist();
// }

// const declareMurderer = function () {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// will display The murderer is Mrs.White as the plotTwist function runs at the end of changeMurderer function changing murderer from Mr. Green to Mrs. White after previously being changed to Mr.Green from Colonel Mustard

// // Episode 7
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Displays The murderer is Mr.Green as line 121 sets the murderer variable to a local variable and is therefor not able to be called in line 134

// // Episode 8
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function(room) {
//     if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//         }
//     }
//     unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// Displays The Weapon is Candle Stick because changeScenario calls plot twist after changing both scenario.murderer and scenario.room which leads to the plot twist function being true, changing the scenario.murderer which in turn makes unexpectedOutcome true thus changing the weapon to the candle stick

//   Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// displays The murderer is Professor Plum as line 184 sets the murderer variable to local