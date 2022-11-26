'use strict';

/* Strict mode 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive ');

//const interface = 'Audio';
const private = 534;

*/

/* Functions 

function logger(){
    console.log('My name is Cristian');
} 

// calling / running / invoking the function 
logger();
logger();
console.log(logger());

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; 
}

const appleJuice = fruitProcessor(5, 0); 
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/* Function declarations vs Expressions 

// Function declaration 
function calAge1(birthYear) {
    return 2037 - birthYear;
}
const age = calAge1(1989);


// Function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1989);


console.log(age, age2);
*/ 

/* Arrow Functions  

// Function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1989);

// Arrow Functions 
const calcAge3 = birthYear => 2022 - birthYear;

const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1989, 'Cristian'));
console.log(yearsUntilRetirement(1992, 'Merces'));

*/


/* Function calling others functions 


function cutFruitPieces(fruit){
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice; 
}

console.log(fruitProcessor(2, 3));
*/

/* Reviewing Functions 

const calAge = function (birthYear){
    return 2022 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName)  {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} retires in ${retirement} years`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1989, 'Cristian'));
console.log(yearsUntilRetirement(1950, 'Mike'));
console.log(yearsUntilRetirement(1992 , 'Merces'));

*/

/* Introduction to Arrays 
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const cristian = ['Cristian', 'Castillo', 2022-1989, 'developer', friends];

console.log(cristian);
console.log(cristian.length);

// Exercise
const calcAge = function (birthYear){
    return 2022 - birthYear;
}

const years = [1990, 1967, 2022, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[years.length-1]);
console.log(age1, age2, age3, age4);

const ages = [calcAge(years[0]), calcAge(years[1])]; 
console.log(ages);
*/

/* Basic Array Operations 

// Add elements
// push añade elemento al final del array
const friends = ['Michael', 'Steven', 'Peter'];
let newLenth = friends.push('Jay');
console.log(friends);
console.log(newLenth);

// unshift añade elemento al principio del array
newLenth = friends.unshift('John');
console.log(friends);
console.log(newLenth);


// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

const shifted = friends.shift(); // First
console.log(shifted);
console.log(friends);


console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Boc'));
console.log(friends.includes('23')); // Strict iguality === 

if (friends.includes('Steven')){
    console.log('You have a friend called Steven')
}
*/

/* Introduction to objects 

const cristianArray = [
    'Cristian',
    'Castillo',
    2022 - 1989,
    'developer',
    ['Paco', 'Sergio', 'Castello']
];

const cristian = {
    firstName: 'Cristian',
    lastName: 'Castillo',
    age: 2022 - 1989,
    job: 'developer',
    friends: ['Paco', 'Sergio', 'Castello']
};

console.log(cristianArray);
console.log(cristian);
*/

/* Dots VS Bracket Notation 
const cristian = {
    firstName: 'Cristian',
    lastName: 'Castillo',
    age: 2022 - 1989,
    job: 'developer',
    friends: ['Paco', 'Sergio', 'Castello']
};

console.log(cristian);

console.log(cristian.lastName);
console.log(cristian['lastName']);

const nameKey = 'Name';
console.log(cristian['first' + nameKey]);
console.log(cristian['last' + nameKey]);

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");

if (cristian[interestedIn]) {
    console.log(cristian[interestedIn]);
} else { 
    console.log('Wrong Request! Choose between firstName, lastName, age, job, and friends');
}

cristian.location = 'Martos';
cristian['twitter'] = '@shanorn';
console.log(cristian);


// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

const text = `${cristian.firstName} has ${cristian.friends.length} friends, and his best friend is called ${cristian.friends[0]}`;
console.log(text);
*/

/*  Object methods */
const cristian = {
    firstName: 'Cristian',
    lastName: 'Castillo',
    birthYear: 1989,
    job: 'developer',
    friends: ['Paco', 'Sergio', 'Castello'],
    hasDriversLicense: false,

    // calcAge: function () {
    //     //console.log(this);
    //     return 2022 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a': 'no'} driver's license`;
    }
};

// console.log(cristian.age);
// console.log(cristian.age);
// console.log(cristian.age);
// console.log(cristian['calcAge']());

// Challenge
// "Jonas is a 46-year old teacher, an he has (NO) a driver's license"

console.log(cristian.getSummary());