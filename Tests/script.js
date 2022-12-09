/* Values and Variables

let js = 'amazing';
console.log(40 + 8 + 13 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Only can use _ or $ in variable 
let jonas_matilda = 'JM';
let $function = 27;

let person = "jonas";

// Mayus for constants convention
let PI = 3.1415;

// Goob
let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

// Bad 
let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);
*/

/* Lecture: Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 38.23);
//console.log(typeof 'cadena');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1989;
console.log(year);
console.log(typeof year);

year = undefined;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

/* let, const and var 
let age = 30;
age = 31; 

const birthYear = 1991;
// Assignment to constant variable
//birthYear = 1990;

// Missing initializer in const declaration
//const job; 

var job = 'programmer';
job = 'teacher';

console.log(job);
*/

/* Lecture: Basic Operators 

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

console.log(typeof firstName);

// Assignment Operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--; 
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now -2018);
*/

/* Operators Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now -2018);

console.log(25 - 10 - 5);

let x, y; 
x = y = 25-10-5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/* Strings and Template Literals
const firstName = 'Cristian';
const job = 'developer';
const birthYear = 1989;
const year = 2037;

const cristian = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log (cristian);

const cristianNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log (cristianNew);

console.log(`Just a regular string...`);
console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

/* if / else statements
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough){
    console.log("Sarah can start driving license ✌")
} else {
    const yearLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 1989;
let century;
if (birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

/* Type Conversion and Coercion

// Type Conversion
const inputYear = '1991';

console.log(Number(inputYear), inputYear);
console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18); // 2009

console.log(Number('Cristian')); // NaN
console.log(typeof NaN); // Not a Number - number

console.log(String(23), 23);

// Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + String(23) + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n); // 10  

console.log(2 +  + 4 + '5'); // 95
console.log('10' - '4' - '3' - 2 +'5'); // 15

*/

/* Truthy and Falsy Values 

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 10;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}


let height = 0;

if (height) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}
*/

/* Equality Operators  

const age = 18;
if (age === 18) console.log('Exactly 18 (strict)');

const stringAge = '18';
if (age == 18) console.log('Exactly 18 (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);
console.log(Number(favorite));
console.log(typeof Number(favorite));

if (favorite == 23) {
    console.log('Cool! 23 is an amazing number!!');
}

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!!');
} else if (favorite === 7){
    console.log('7 is also a cool number');
} else if (favorite === 9){
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favorite !== 23) console.log("Why not 23?");
*/

/* Basic Boolean Logic 

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense);
console.log(hasGoodVision);
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...');
}
*/

/* Switch statement 

const day = 'monday';

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break; 
    case 'wednesday': 
    case 'thursday':
        console.log('Write codide examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
    default:
        console.log('Not a valid day!');
}


if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day ==='tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write codide examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}
*/

/* Statements and expressions 

//Expressions
3 + 4 
1991
true && false && !false

//Statements
if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Cristian';
console.log(`I'm ${2037 - 1991} years old ${me}`);

*/

/* The conditional (ternary) operator 

const age = 12;

age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const exDrink = age >= 18 ? 'wine' : 'water';
console.log(exDrink);

let exDrink2;
if (age >= 18){
    exDrink2 = 'wine';
} else {
    exDrink2 = 'water';
}
console.log(exDrink2);

console.log(`I like to drink ${age >= 18 ? 'wine!' : 'water T_T'}`);
*/

// Lista de jugadores
const players = [
  "Vinicius",
  "Messi",
  "Ronaldo",
  "Pedri",
  "Mbappe",
  "Modric",
  "Militao",
  "Morata",
  "Valverde",
  "Benzema",
  "Pique",
];

// Lista de vocales
const listaVocales = "aeiouAEIOU";

// Bucle que recorre la lista de jugadores
for (let player in players) {
  // Contador de vocales por nombre
  let vocales = 0;
  // Bucle que recorre el nombre letra a letra
  for (let i = 0; i < players[player].length; i++) {
    // Se comprueba si la letra en cuestión esta incluido en nuestra lista de vocales
    if (listaVocales.includes(players[player].charAt(i))) {
      vocales++;
    }
  }
  // Muestro el jugador junto al número de vocales de su nombre
  console.log(`${players[player]} tiene ${vocales}`);
}
