/*
 * Edward Pollingue		    SDI Online, Section 02
 * September 11, 2015       Activity: Go To Training Week 2
 */


////    This calculator will prompt for values concerning the water consumption habits of a household; the values returned
////    will be used to determine water consumption rates, and this information will be presented to the user.


///  Inform user of the purpose of the calculator (in order to clarify the purpose of future prompts).
alert("This calculator will provide information concerning your household's water consumption.");


///  Prompt for user input and define variables
// prompt for the number of showers per day and cast the returned value as a number.
var showersPerDay       =   Number(prompt("How many showers are taken per day?"));
// prompt for the number of baths per day and cast the returned value as a number.
var bathsPerDay         =   Number(prompt("How many baths are taken per day?"));
// prompt for the average amount of water consumed per shower; cast returned value as a number.
var showerConsumption   =   Number(prompt("On average, how much water is used per shower?"));
// prompt for the average amount of water consumed per bath; cast returned value as a number.
var bathConsumption     =   Number(prompt("On average, how much water is used per bath?"));

