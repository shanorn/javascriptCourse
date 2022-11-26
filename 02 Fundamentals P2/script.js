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


/* Function calling others functions */


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