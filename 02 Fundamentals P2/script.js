'use strict';

/* Strict mode 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive ');

//const interface = 'Audio';
const private = 534;

*/

/* Functions */

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