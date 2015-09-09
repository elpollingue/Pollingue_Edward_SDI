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