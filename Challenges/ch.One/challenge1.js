
/// Challenge 1
let mark;
let john;

let ibrahim;
let axmed;

//Data One
// mark mass anf height;
const markMass = 78;
const markHeight = 1.69;


// john mass and height
const johnMass = 92;
const johnHeight = 1.95;


// formular
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
const markHeightBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHeightBMI);

//Data Two
// ibrahim mass anf height;
const ibrahimMass = 95;
const ibrahimHeight = 1.88;
// Axmed mass anf height;
const axmedMass = 85;
const axmedHeight = 1.76;

// the formular
const ibrahimBMI = ibrahimMass / ibrahimHeight ** 2;
const axmedBMI = axmedMass / (axmedHeight * axmedHeight);
const marksHeightBMI = ibrahimBMI > axmedBMI;

console.log(ibrahimBMI, axmedBMI, marksHeightBMI);


/// Challenhe 2

console.log(markBMI, johnBMI);
if (markBMI > johnBMI) {
    console.log(`mark's BMI ${markBMI} is higher than john's${johnBMI}!`);
} else {
    console.log(`john's BMI ${johnBMI} is higher the mark's ${markBMI}!`);
};
