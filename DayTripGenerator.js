/* Random selections:
1) Destination
    *Whiteville, North Carolina - population: 5340
    *Elkins, Arkansas - population: 3179
    *Joshua Tree, California - population: 7414
    *Freepot, Kansas - population: 5
    *Vernon, California - population: 112
    *Caliente, Nevada - population: 1130
    *Whites City, New Mexico - population: 147
    *Akhiok, Alaska - population: 70
    *["Whiteville, North Carolina - population: 5340", "Whites City, New Mexico - population: 147","Akhiok, Alaska - population: 70", "Freeport, Kansas - population: 5", "Vernon, California - population: 112"]
2) Restaurant
    *Bob's Burgers
    *Los Pollos Hermanos
    *Jack Rabbit Slim's
    *Pizza Planet
    *GoodBurger
    *Paddy's Pub
3) Mode of transport
    *Tesla
    *space shuttle
    *unicycle
    *tricycle
    *bigwheel
    *camel
4) Form of entertainment
    *juggling show
    *Renaissance fair
    *sword-swallowing convention
    *underwater basket-weaving world championships

1) Create a function to randomly select a destination. It will not take in any parameters.
2) Create an array containing all possible destinations.
3) Generate a random number from 1 - array.length using Math.random() and Math.floor
4) return array[randomNumber]
5) repeat for each other criteria
**can use the same function for all things, just change argument each time
6) Create a function (no parameters) that calls each of the other functions and returns a string with the day trip info
7) Call the above function and save to variable 
8) Create a variable for userAnswer. Set equal to prompt with day trip info and ask if they're happy (YES or NO)
9) While userAnswer = no, call the function again, and run prompt again
10) Print final result to console
*/

function randomChoice(optionsArray){
    let amount = optionsArray.length;
    let randomIndex = Math.floor(Math.random()*amount);
    let randomChoice = optionsArray[randomIndex];
    return randomChoice;
}

// let test1 = [1,"two","3",4];
// let test2 = ["red","green","blue"];

// alert(randomChoice(test1)); //success!


function generateDayTrip(destinations,restaurants,transports,entertainments){
    let destination = randomChoice(destinations);
    let restaurant = randomChoice(restaurants);
    let transport = randomChoice(transports);
    let entertainment = randomChoice(entertainments);
    let resultArray = [destination,restaurant,transport,entertainment]
    return resultArray;
}

let dests = ["Whites City, New Mexico (population: 147)","Akhiok, Alaska (population: 70)", "Freeport, Kansas (population: 5)",
 "Vernon, California (population: 112)"];
let rests = ["Bob's Burgers", "Los Pollos Hermanos", "Jack Rabbit Slim's", "Pizza Planet", "GoodBurger", "Paddy's Pub"];
let transps = ["Tesla","space shuttle","unicycle","magic carpet","camel"];
let ents = ["juggling show", "Renaissance fair", "sword-swallowing convention", "underwater basket weaving world championships"];

let dayTripArray = generateDayTrip(dests,rests,transps,ents);

let finalDest = dayTripArray[0];
let finalRest = dayTripArray[1];
let finalTransp = dayTripArray[2];
let finalEnt = dayTripArray[3];
let finalDayTripStatement = "We will be travelling to "+finalDest+", where will dine at "+finalRest+
". Afterwards, we will travel by "+finalTransp+" to enjoy the "+finalEnt+".";

// console.log(dayTripArray);//testing... success!
// console.log(finalDest+finalRest+finalTransp+finalEnt);//testing... success!

let firstPrompt = "Hello dear user! Here is your day trip: \n\n"+finalDayTripStatement+"\n\nDoes that sound good? "+
"If so, enter YES. If not, enter the elements you would like to change in ALL CAPS, separated by one space. You may choose to change DESTINATION, RESTAURANT, TRANSPORT, and/or ENTERTAINMENT.";

let userChoice = prompt(firstPrompt);

while (userChoice !== "YES"){
    if (userChoice.includes("DESTINATION")){
        finalDest = randomChoice(dests);
    }
    if (userChoice.includes("RESTAURANT")){
        finalRest = randomChoice(rests);
    }
    if (userChoice.includes("TRANSPORT")){
        finalTransp = randomChoice(transps);
    }
    if (userChoice.includes("ENTERTAINMENT")){
        finalEnt = randomChoice(ents);
    }
    finalDayTripStatement = "We will be travelling to "+finalDest+", where will dine at "+finalRest+
    ". Afterwards, we will travel by "+finalTransp+" to enjoy the "+finalEnt+".";
    userChoice = prompt("Very well.. what about this? \n\n"+finalDayTripStatement+
    "\n\nIf you approve, enter YES. Otherwise, enter the elements you'd like to change (DESTINATION, RESTAURANT, TRANSPORT, and/or ENTERTAINMENT).")
}

console.log("Excellent choice! " + finalDayTripStatement +" Enjoy your trip!");


