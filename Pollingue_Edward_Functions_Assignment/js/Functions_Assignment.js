/*
 * Edward Pollingue		    SDI Online, Section 02
 * September 22, 2015       Activity: Conditionals Assignment
 */


////        This calculator will return information regarding the air speed velocity of a coconut laden swallow.

///  Define variables: prompt for, validate and cast user input.

var coconutMass         =   Number(prompt("What is the weight (in ounces) of the coconut being transported?"));
while (!coconutMass){var coconutMass = Number(prompt("A numeric entry is required.\nWhat is the weight (in ounces) of the coconut being transported?"));}


console.log(coconutMass);

