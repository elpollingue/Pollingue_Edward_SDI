/*
 * Edward Pollingue		    SDI Online, Section 02
 * September 20, 2015       Activity: Conditionals Assignment
 */


////    This script will serve as a calculator that determines the capacity of a lift based on properties of
////    the items that it is tasked with transporting, as determined by user input.


///     Tell the user what function the calculator is meant to serve.
alert("This calculator will determine the maximum number of units that a lift is capable of transporting, based on your responses to the following prompts.");


///     Ascertain user input for each relevant measurement; validate each input, and re-prompt if initial input  was invalid.

var liftMaxCubicFeet    = Number(prompt("What is the maximum Volume (in cubic feet) the lift is capable of transporting?"));
if (!liftMaxCubicFeet) {liftMaxCubicFeet = Number(prompt("A numeric value is required.\nWhat is the maximum Volume (in cubic feet) the lift is capable of transporting?"));}

var liftMaxTons         = Number(prompt("What is the maximum Weight (in tons) the lift is capable of transporting?"));
if (!liftMaxTons) {liftMaxTons = Number(prompt("A numeric value is required.\nWhat is the maximum Weight (in tons) the lift is capable of transporting?"));}

var cargoHeight         = Number(prompt("What is the Height (in inches) of each unit to be transported?"));
if (!cargoHeight) {cargoHeight = Number(prompt("A numeric value is required.\nWhat is the Height (in inches) of each unit to be transported?"));}

var cargoLength         = Number(prompt("What is the Length (in inches) of each unit to be transported?"));
if (!cargoLength) {cargoLength = Number(prompt("A numeric value is required.\nWhat is the Length (in inches) of each unit to be transported?"));}

var cargoWidth          = Number(prompt("What is the Width (in inches) of each unit to be transported?"));
if (!cargoWidth) {cargoWidth = Number(prompt("A numeric value is required.\nWhat is the Width (in inches) of each unit to be transported?"));}

var cargoWeight         = Number(prompt("What is the Weight (in pounds) of each unit to be transported?"));
if (!cargoWeight) {cargoWeight = Number(prompt("A numeric value is required.\nWhat is the Weight (in pounds) of each unit to be transported?"));}


///     Calculate maximum single load capacity based on user-defined values.

//  Determine volume per unit by multiplying unit height by unit length by unit width
var unitVolume      = cargoHeight*cargoLength*cargoWidth;

//  Determine maximum quantity of units per load based on unit volume and maximum volume per load (rounded down to the nearest whole number). There are 1728 cubic inches in a cubic foot.
var maxUnitsVolume  = Math.floor((1728*liftMaxCubicFeet)/unitVolume);

// Determine maximum quantity of units per load based on unit weight and maximum weight per load (rounded down to the nearest whole number). There are 2000 pounds in a ton.
var maxUnitsWeight  = Math.floor((2000*liftMaxTons)/cargoWeight);



///     Determine conditions for relevant output. Output results in informative format.

//  Ternary statement determining whether the lift has insufficient capacity for the weight or the volume of a single unit, and presenting a relevant statement to console.log if this is determined to be so.
if          (cargoWeight > (2000*liftMaxTons) || unitVolume > (1728*liftMaxCubicFeet)) console.log("The lift does not have sufficient capacity to carry even a single unit. You may ignore further output.");

//  Else If statement determining whether it is the maximum weight or the maximum volume that is the limiting factor, then reporting the correct maximum capacity per load, based on the lesser of the two limits.
if    (maxUnitsVolume < maxUnitsWeight) {
    console.log("The lift can carry a maximum of " + maxUnitsVolume + " units per load. The lift's " + liftMaxCubicFeet + " cubic foot capacity was the limiting factor.");
}else if    (maxUnitsWeight < maxUnitsVolume) {
    console.log("The lift can carry a maximum of " + maxUnitsWeight + " units per load. The lift's " + liftMaxTons + " ton capacity was the limiting factor.");
}



/*
Test Values Presented -

Set 1:

150
15
22
44
12
35

Result: 22 Units, 150 square foot capacity as limiting factor.

==================================================================

Set 2:

2000
15
1
1
1
350

Result: 85 units, 15 ton capacity as limiting factor.

 */