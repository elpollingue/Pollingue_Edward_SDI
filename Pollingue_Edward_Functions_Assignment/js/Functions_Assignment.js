/*
 * Edward Pollingue		    SDI Online, Section 02
 * September 22, 2015       Activity: Conditionals Assignment
 */


////        This calculator will return information regarding the air speed velocity of a coconut laden swallow.
alert("This calculator will return information regarding the air speed velocity of a coconut laden swallow.");

///     Define variables: prompt for, validate and cast user input.
//  Prompt for the coconut's mass; validate and cast input.
var coconutMass         =   Number(prompt("What is the weight (in ounces) of the coconut being transported?"));
    while (!coconutMass){var coconutMass = Number(prompt("A numeric entry is required.\nWhat is the weight (in ounces) of the coconut being transported?"));}
//  Prompt for the swallow's mass; validate and cast input.
var swallowMass         =   Number(prompt("What is the weight (in ounces) of the swallow carrying the coconut?"));
    while (!swallowMass){var swallowMass = Number(prompt("A numeric entry is required.\nWhat is the weight (in ounces) of the swallow carrying the coconut?"));}
//  Calculate the weight ratio.
var weightRatio         =   swallowMass/coconutMass;
//  Prompt for the swallow's maximum velocity; validate and cast input.
var swallowMaxVelocity  =   Number(prompt("What is the maximum velocity (in miles per hour) of the swallow while unladen?"));
    while (!swallowMaxVelocity){var swallowMaxVelocity = Number(prompt("A numeric entry is required.\nWhat is the maximum velocity (in miles per hour) of the swallow while unladen?"));}
//  Prompt for the distance to be travelled; validate and cast input.
var distanceToTravel    =   Number(prompt("What distance (in miles) is the coconut to be transported?"));
    while (!distanceToTravel){var distanceToTravel = Number(prompt("A numeric entry is required.\nWhat distance (in miles) is the coconut to be transported?"));}
//  Determine whether the wind will play a factor in the swallow's flight.
var windy = confirm("Will the wind play a factor in the bird's flight?\n(If yes, choose 'Ok'; if no, choose 'Cancel')");
//  If the wind is to play a factor, prompt for the value of its impact; validate and cast input.
    if (windy===true) {
        var windSpeed =  Number(prompt("What is the wind's relative velocity (in miles per hour)?\nThis may be either a positive or a negative value."));
        while (!windSpeed) {
            var windSpeed = Number(prompt("A numeric entry is required.\nWhat is the wind's relative velocity (in miles per hour)?"));}
    //  If the wind is not to play a factor, define the relative wind velocity as a numeric value of zero.
    }else if (windy===false){var windSpeed = Number(0);}

///     Call the function that will calculate the swallos's unladen air speed.
var ladenAirSpeed   =   calcLadenAirSpeed(swallowMaxVelocity,windSpeed,weightRatio);


///     Anonymous function that will calculate the trip time based on the laden air speed and distance to be travelled.

var tripTime        =   calcTripTime(ladenAirSpeed,distanceToTravel,weightRatio);




///     This function will output the swallow's laden air speed based on the values submitted.
function    calcLadenAirSpeed(maxSpeed,relativeWind,ratio){
    var birdSpeed   =   (maxSpeed+relativeWind)*ratio;
    return(birdSpeed*ratio);
}

///     This function will output a trip time that accounts for the sparrow's fatigue.
function    calcTripTime(ladenSpeed,distance,ratio){
    var     rawDuration         =   distance/ladenSpeed;
    var     fatigueSpeed        =   ladenSpeed*(ratio*10);
    var     adjustedTripTime    =   rawDuration/fatigueSpeed;
    return  (adjustedTripTime.toFixed(2));
}



console.log("coconutMass = "+coconutMass);
console.log("swallowMass = "+swallowMass);
console.log("swallowMaxVelocity = "+swallowMaxVelocity);
console.log("It is "+windy+" that it is windy today.");
console.log("Wind velocity = "+windSpeed);
console.log("Ten plus the relative wind velocity equals "+(10+windSpeed));

console.log("ladenAirSpeed = "+ladenAirSpeed);
console.log("Adjusted trip time = "+tripTime);