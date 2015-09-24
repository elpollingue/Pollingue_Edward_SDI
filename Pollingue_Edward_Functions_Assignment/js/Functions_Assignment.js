/*
 * Edward Pollingue		    SDI Online, Section 02
 * September 22, 2015       Activity: Conditionals Assignment
 */


////        This calculator will return information regarding the air speed velocity of a coconut laden swallow.
alert("This calculator will return information regarding the air speed velocity of a coconut laden swallow.");

///  Define variables: prompt for, validate and cast user input.

var coconutMass         =   Number(prompt("What is the weight (in ounces) of the coconut being transported?"));
    while (!coconutMass){var coconutMass = Number(prompt("A numeric entry is required.\nWhat is the weight (in ounces) of the coconut being transported?"));}

var swallowMass         =   Number(prompt("What is the weight (in ounces) of the swallow carrying the coconut?"));
    while (!swallowMass){var swallowMass = Number(prompt("A numeric entry is required.\nWhat is the weight (in ounces) of the swallow carrying the coconut?"));}

var swallowMaxVelocity  =   Number(prompt("What is the maximum velocity of the swallow while unladen?"));
    while (!swallowMaxVelocity){var swallowMaxVelocity = Number(prompt("A numeric entry is required.\nWhat is the maximum velocity of the swallow while unladen?"));}

var distanceToTravel    =   Number(prompt("What distance is the coconut to be transported?"));
    while (!distanceToTravel){var distanceToTravel = Number(prompt("A numeric entry is required.\nWhat distance is the coconut to be transported?"));}


var windy               =   confirm("Will the wind play a factor in the bird's flight?\n(If yes, choose 'Ok'; if no, choose 'Cancel')");




console.log("coconutMass = "+coconutMass);
console.log("swallowMass = "+swallowMass);
console.log("swallowMaxVelocity = "+swallowMaxVelocity);
console.log("It is "+windy+" that it is windy today.");


