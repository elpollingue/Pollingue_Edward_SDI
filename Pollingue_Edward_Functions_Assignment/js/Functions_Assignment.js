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


///     This anonymous function will output the swallow's laden air speed based on the values submitted.
var funcAirSpeed   =   function(maxSpeed,relativeWind,ratio){
    // Determine the bird's air speed by adding its maximum speed to the relative wind speed, then multiplying that value by the weight ratio between the sparrow and coconut.
    var birdSpeed   =   (maxSpeed+relativeWind)*ratio;
    // Return the final value of the sparrow's laden air speed, with decimal values to the hundredths' place.
    return(birdSpeed*ratio).toFixed(2);
};
///     Call the function to calculate the swallow's laden air speed.
var ladenAirSpeed    =   funcAirSpeed(swallowMaxVelocity,windSpeed,weightRatio);

///     This anonymous function will output a trip time that accounts for the sparrow's fatigue.
var calcTripTime    =   function(ladenSpeed,distance,ratio){
    // Find the base trip duration by dividing overall distance by the swallow's laden air speed.
    var     rawDuration         =   distance/ladenSpeed;
    // Calculate the fatigued speed of the bird based on an equation involving the swallow's laden air speed, the weight ratio of the swallow to the coconut, and the (arbitrary) number 12.
    var     fatigueSpeed        =   (ladenSpeed*ratio*12);
    // Find the adjusted trip time based on the newly calculated raw trip duration and adjusted swallow's speed.
    var     adjustedTripTime    =   rawDuration/fatigueSpeed;
    // Return the adjusted trip time in the form of a numeric value that includes two decimal places.
    return  (adjustedTripTime.toFixed(2));
};
///     Call the function to calculate the adjusted trip time; pass it established variables as arguments.
var tripTime        =   calcTripTime(ladenAirSpeed,distanceToTravel,weightRatio);



///     Output relevant values in a human readable format; convert the trip time from hours to minutes before reporting.
alert("A "+swallowMass+" ounce swallow with a maximum unladen air speed of "+swallowMaxVelocity+" mph, while carrying a "+coconutMass+" ounce coconut and travelling a distance of "+distanceToTravel+" miles, will travel at an approximate speed of "+ladenAirSpeed+" miles per hour, and complete the journey in approximately "+Math.floor(tripTime*60)+" minutes.");
console.log("A "+swallowMass+" ounce swallow with a maximum unladen air speed of "+swallowMaxVelocity+" mph, while carrying a "+coconutMass+" ounce coconut and travelling a distance of "+distanceToTravel+" miles, will travel at an approximate speed of "+ladenAirSpeed+" miles per hour, and complete the journey in approximately "+Math.floor(tripTime*60)+" minutes.");


/*
With the following values submitted:
32 oz   coconut
3.6 oz  swallow
6 miles trip distance
45 mph  maximum unladen air speed

The following values were returned:
0.68 mph    adjusted speed
576 minute  trip time
 */