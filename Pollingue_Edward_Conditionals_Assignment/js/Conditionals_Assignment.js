/*
 * Edward Pollingue		    SDI Online, Section 02
 * September 20, 2015       Activity: Conditionals Assignment
 */


////    This script will serve as a calculator that determines the capacity of a forklift based on properties of
////    the items that it is tasked with transporting, as determined by user input.


///     Ascertain user input for each relevant measurement; validate each input, and re-prompt if input was invalid.

var liftMaxVolume   = Number(prompt("What is the maximum volume the lift is capable of transporting?"));
if (!liftMaxVolume){liftMaxVolume = Number(prompt("A numeric value is required.\nWhat is the maximum volume the lift is capable of transporting?"));}



alert (liftMaxVolume);

//var unitVolume