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