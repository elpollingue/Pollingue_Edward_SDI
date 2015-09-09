/*
 * Edward Pollingue		    SDI Online, Section 02
 * September 09, 2015       Activity: Go To Training Week 2
 */



//// Age Calculator

        /// Set Variables

// Prompt for user's name
var name = prompt("Welcome to the Age Calculator!\nPlease enter your name:");

// Use 'name' variable to create a personalized greeting
alert("Welcome "+name+"!");

// Ascertain user's birth year
var birthYear = prompt("What is your birth year?");

// Output 'birthYear' to console.log
console.log(birthYear);

// Set current year
var currentYear = 2015;


        // Calculate Age

// Calculate age
var age = currentYear-birthYear;

// Return calculated age
alert(name+", your current age is calculated to be "+age+".");
console.log(name+", your current age is calculated to be "+age+".");


        // Make it Complicated

// Calculate a future age
var yearsIntoFuture = prompt("How many years into the future would\nyou like to calculate your age?");

console.log(yearsIntoFuture);

// Future age = current age + years into the future
    //Cast variables as numbers when calculating
var futureAge=parseInt(age)+parseInt(yearsIntoFuture);

console.log(futureAge);

//Log and alert final values
alert(name+", you are "+age+" years old;\nin "+yearsIntoFuture+" years, you will be "+futureAge+".");
console.log(name+", you are "+age+" years old;\nin "+yearsIntoFuture+" years, you will be "+futureAge+".");