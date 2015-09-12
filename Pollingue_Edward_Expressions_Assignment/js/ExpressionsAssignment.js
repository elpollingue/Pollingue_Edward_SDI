/*
 * Edward Pollingue		    SDI Online, Section 02
 * September 11, 2015       Activity: Go To Training Week 2
 */


////    This calculator will prompt for values concerning the water consumption habits of a household; the values returned
////    will be used to determine water consumption rates, and this information will be presented to the user.


///     Inform user of the purpose of the calculator (in order to clarify the purpose of future prompts).
alert("This calculator will provide information concerning your household's water consumption.");


///     Prompt for user input and define variables
// define the variable waterConsumption as an array.
var waterConsumption    = [];
// assign the value of 1.6 (gallons) per toilet flush; store value in array waterConsumption.
waterConsumption[0]     = 1.6;
// prompt for the number of showers per day and cast the returned value as a number.
var showersPerDay       =   Number(prompt("How many showers are taken per day?"));
// prompt for the number of baths per day and cast the returned value as a number.
var bathsPerDay         =   Number(prompt("How many baths are taken per day?"));
// prompt for the number of baths per day and cast the returned value as a number.
var flushesPerDay       =   Number(prompt("How many times is a toilet flushed per day?"));
// prompt for the average amount of water consumed per shower; cast returned value as a number; assign value to array.
waterConsumption[1]     =   Number(prompt("On average, how much water is used per shower?"));
// prompt for the average amount of water consumed per bath; cast returned value as a number; assign value to array.
waterConsumption[2]     =   Number(prompt("On average, how much water is used per bath?"));
// prompt for the number of days desired to be calculated; cast returned value as a number.
var days                =   Number(prompt("For what time period would you like to calculate average household water usage?"));



///     Perform calculations and define a variable as the output.
var totalWaterConsumption = ((flushesPerDay*waterConsumption[0])+(showersPerDay*waterConsumption[1])+(bathsPerDay*waterConsumption[2]))*days;


///     Output results to the user and to console.log in a human readable format.
alert("The average total household water consumption per day is "+totalWaterConsumption+" gallons.");
console.log("The average total household water consumption per day is "+totalWaterConsumption+" gallons.");

/*

provided the following values:

showers per day     -   2
baths per day       -   4
flushes per day     -   8
water per shower    -   12
water per bath      -   17
number of days      -   7

the value returned was: 733.6

 */