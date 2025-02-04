/*
let js = "Amazing";
// if (js === "amazing") alert("javascript is FUN!");
console.log(40 + 8 + 23 - 10);
console.log("ibra");

let = "ibrahim";

let myFirstJob = "progrsmer";
let currentJob = "teacher";

console.log(myFirstJob);
console.log(currentJob);
*/
//boolean

/*
let javascreipt = true;
console.log(javascreipt);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof javascreipt);
console.log(typeof "ibra");

let year;
console.log(year);
year = 1999;
console.log(typeof year);
console.log(typeof null);
*/

/// let , const and var

/*
const barthday = 2005;

var job = "programer";
let fistName = "ibra";
*/

// operators

/*
// 1. mathamatical  operators
const now = 2037;
const ageIbra = now - 2005;
const ageAxmed = now - 2003;
console.log(ageIbra, ageAxmed)

console.log(ageIbra * 2, ageAxmed / 2, 2 ** 3);
// 2 ** 3 means 2 to power of 3 = 2 * 2 * 2 =8
*/

//concatination  operators
/*
const firstName = "ibrahim";
const lastName = "Mahad";
console.log(firstName + ' ' + lastName);
*/

//Assigment  operators
/*
let x = 10 + 5;  // 15
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; // x = x * 4 = 100
console.log(x);
x++; // x = x + 1 = 101
x--; //x = x - 1 = 100
console.log(x);
*/

// comparison operators
/*
console.log(ageIbra > ageAxmed);
// >, <, <=, >=
console.log(ageIbra >= 18);
const isFullAge = ageIbra >= 18;

console.log(now - 2005 > now - 2003);
*/

// operators Precedence

/*
let z, y;
z = y = 25 - 10 - 5; // z = y = 10, z = 10;
console.log(z, y);
const averageAge = (ageIbra + ageAxmed) / 2;

console.log(ageIbra, ageAxmed, averageAge);
*/

//strings and template literals

/*
const firstName = "ibrahim";
const job = "teacher";
const birthday = 2005;
const year = 2037;

const ibrahim = "I'm " + firstName + ', a ' + (year - birthday) + ' years old ' + job + '!';
console.log(ibrahim);
const ibrahimNew = `I'm ${firstName}, a ${year - birthday} years old ${job}!`;
console.log(ibrahimNew);
*/

/*
\n\ new line
*/
/*
console.log("string with \n\ multiple \n\ lines");
console.log(`string with
     multiple
     lines`)
*/



//Taking Decition: if / else statement


const age = 11;

// contrall stucture
if (age >= 18) {
    console.log("ibrahim can start driving license")
} else {
    const yearsLeft = 18 - age;
    console.log(`ibrahim is too young. wait another ${yearsLeft} years`);
}

const birthday = 1999;
let century;
if (birthday <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)