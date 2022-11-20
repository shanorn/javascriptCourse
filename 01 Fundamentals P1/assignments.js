// Lecture: Values and Variables
const country = 'Spain';
const continent = 'Europe';
let population = 47.33;

console.log(country);
console.log(continent);
console.log(population);

console.log('I live in ' + country + ' (' + continent + ') and it has ' + population + ' million people');


// Lecture: Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Lecture: let, const and var
language = 'Spanish';

// Example error: Assigment to constant variable
// isIsland = true; 


//Lecture Basic Orperators
population /= 2;
console.log(population);
population++;
console.log(population);

const findlandPopulation = 6;
console.log(population > findlandPopulation);
const avgPopulation = 33;
console.log(population < avgPopulation);

let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);


//Lecture: String and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);