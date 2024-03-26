/*
Andrew Butler
Feb 10, 2024
Activity06 - Variables
*/

console.log("---- I am in V A R I A B L E S ----");

// Q1: Is it permitted the next ?
console.log("Q1 ---------------------------------");
var var1 = "Iowa";
console.log(var1);

var var1 = 124;
console.log(var1);

console.log("Yes");

// Q2: Is it valid ?

console.log("Q2 ----------------------------------");
let var2 = "Ames";
console.log(var2);
var2 = 124;

// Is it valid ?
console.log("Not if you use the let keyword twice");

// Q3 : is it valid ?
console.log("Q3 -----------------------------------");
let var3 = "ISU";
console.log(var3);
var3 = 2023;
console.log(var3);

console.log("valid ? Yes");

// Q4 : explain the error.
console.log("Q4 ----------------------------------");
let var4;
const var5 = 2;

console.log("What's the error : the const variable, var5, needs to be initialized to an actual value.");

// Q5 : Explain the Error
console.log("Q5 --------------------------------");
const var6 = 3.1415;
// var6 = 2.8;
console.log("What's the error : Uncaught TypeError");
console.log("var6 is a const, cannot be reassigned a different value");

// Q6 : explain the error
// let firs tname = "Abraham";
console.log("There is a space in the variable name; this is not allowed");

// let 2numbers = [1, 2];
console.log(" variable names can't start with a number");

// let city-state = "Ames Iowa";
console.log("can't have hyphen in variable name");

// Q7 : What !! ??
let mainCity = "DesMoines";
// console.log("This is the Capital : ", MainCity);
console.log(" .... what's going on ? ....");
console.log("typo; variable names are case-sensitive");

// Q8 : "let" and "const" scope vs "var" scope

if (5 === 5){
    var var7 = 100;
} 
console.log(var7);

if (5 === 5) {
    let var8 = 100;
}
// console.log(var8);

console.log("var is declares a global variable , while let is only a local variable.");
