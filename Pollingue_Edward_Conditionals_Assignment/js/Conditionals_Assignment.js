/*
 * Edward Pollingue		    SDI Online, Section 02
 * September 20, 2015       Activity: Conditionals Assignment
 */


////    This script will serve as a calculator that determines the capacity of a forklift based on properties of
////    the items that it is tasked with transporting, as determined by user input.


///     Ascertain user input for each relevant measurement; validate each input, and re-prompt if initial input  was invalid.

var liftMaxVolume   = Number(prompt("What is the maximum Volume (in cubic feet) the lift is capable of transporting?"));
if (!liftMaxVolume) {liftMaxVolume = Number(prompt("A numeric value is required.\nWhat is the maximum Volume (in cubic feet) the lift is capable of transporting?"));}

var liftMaxWeight   = Number(prompt("What is the maximum Weight (in tons) the lift is capable of transporting?"));
if (!liftMaxWeight) {liftMaxWeight = Number(prompt("A numeric value is required.\nWhat is the maximum Weight (in tons) the lift is capable of transporting?"));}

var cargoHeight     = Number(prompt("What is the Height (in inches) of each unit to be transported?"));
if (!cargoHeight) {cargoHeight = Number(prompt("A numeric value is required.\nWhat is the Height (in inches) of each unit to be transported?"));}

var cargoLength     = Number(prompt("What is the Length (in inches) of each unit to be transported?"));
if (!cargoLength) {cargoLength = Number(prompt("A numeric value is required.\nWhat is the Length (in inches) of each unit to be transported?"));}

var cargoWidth      = Number(prompt("What is the Width (in inches) of each unit to be transported?"));
if (!cargoWidth) {cargoWidth = Number(prompt("A numeric value is required.\nWhat is the Width (in inches) of each unit to be transported?"));}

var cargoWeight     = Number(prompt("What is the Weight (in pounds) of each unit to be transported?"));
if (!cargoWeight) {cargoWeight = Number(prompt("A numeric value is required.\nWhat is the Weight (in pounds) of each unit to be transported?"));}


///     Calculate maximum single load capacity based on user-defined values.

//  Determine volume per unit by multiplying unit height x unit length x unit width
var unitVolume      = cargoHeight*cargoLength*cargoWidth;

//  Determine maximum quantity of units per load based on unit volume and maximum volume per load.
var maxUnitsVolume  = (liftMaxVolume*1728)/unitVolume;

// Determine maximum quantity of units per load based on unit weight and maximum weight per load.
var maxUnitsWeight  = (liftMaxWeight*2000)/cargoWeight;



///     Output results in relevant format.

//  If statement determining whether it is the maximum weight or the maximum volume that is the limiting factor, then reporting the correct maximum capacity based on the lesser of the two limits.
if(maxUnitsVolume < maxUnitsWeight){
    console.log("The lift can carry a maximum of "+maxUnitsVolume+" units per load. The "+)
}