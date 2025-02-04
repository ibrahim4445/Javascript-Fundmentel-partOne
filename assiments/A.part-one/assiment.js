// vareibles
/*let country = "Somalia";
let cotinent = "Africa";
let population = "15M";

console.log(country);
console.log(cotinent);
console.log(population);
*/

//Data Types 
/*
let isIsland = true;
let language;

console.log(isIsland);
console.log(typeof country);
console.log(typeof cotinent);
console.log(typeof population);
console.log(typeof language);
*/

//Let, var, and const
const country = "Somalia";
const cotinent = "Africa";
let population = 15;
const language = 'somali';
const isIsland = true;


let finland = 6;
let average = 33;

// operators
population /= 2;
console.log(population);
population++;
console.log(population);
console.log(finland > population);
console.log(average < population);

let description = country + ' ' + "is in " + ' ' +
    cotinent + ' ' + ", and its" + ' ' + population + ' ' + "million people speak" + ' ' + language;
console.log(description);

//strings and template literals
description = `${country} is in ${cotinent}, and it's ${population} million people speak ${language}`;
console.log(description);


population = 15;

console.log(population)
//Taking Decition: if / else statement
if (population > 33) {
    console.log(`${country}'s population is above a verage`);
} else {
    console.log(`${country} population is ${average - population} million below a verage`)
};



