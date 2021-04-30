let dests = ["Whites City, New Mexico (population: 147)","Akhiok, Alaska (population: 70)", "Freeport, Kansas (population: 5)",
 "Vernon, California (population: 112)"];
let rests = ["Bob's Burgers", "Los Pollos Hermanos", "Jack Rabbit Slim's", "Pizza Planet", "GoodBurger", "Paddy's Pub","Cafe Nervosa"];
let transps = ["Tesla","space shuttle","unicycle","magic carpet","camel","Magic School Bus","pegasus","teleportation"];
let ents = ["juggling show", "Renaissance fair", "sword-swallowing convention", "underwater basket weaving world championships","poetry slam","Packers game ;)"];


function randomChoice(optionsArray){
    let amount = optionsArray.length;
    let randomIndex = Math.floor(Math.random()*amount);
    let randomChoice = optionsArray[randomIndex];
    return randomChoice;
}

let randomDest = randomChoice(dests);
let randomRest = randomChoice(rests);
let randomTransp = randomChoice(transps);
let randomEnt = randomChoice(ents);

let dayTripStatement = "We will be travelling to "+randomDest+", where will dine at "+randomRest+
". Afterwards, we will travel by "+randomTransp+" to enjoy the "+randomEnt+".";

let firstPrompt = "Hello dear user! Here is your day trip: \n\n"+dayTripStatement+"\n\nDoes that sound good? "+
"If so, enter YES. If not, enter the elements you would like to change in ALL CAPS, separated by one space. You may choose to change DESTINATION, RESTAURANT, TRANSPORT, and/or ENTERTAINMENT.";

let userChoice = prompt(firstPrompt);

while (userChoice !== "YES"){
    if (userChoice.includes("DESTINATION")){
        randomDest = randomChoice(dests);
    }
    if (userChoice.includes("RESTAURANT")){
         randomRest = randomChoice(rests);
    }
    if (userChoice.includes("TRANSPORT")){
        randomTransp = randomChoice(transps);
    }
    if (userChoice.includes("ENTERTAINMENT")){
        randomEnt = randomChoice(ents);
    }
    dayTripStatement = "We will be travelling to "+randomDest+", where will dine at "+randomRest+
    ". Afterwards, we will travel by "+randomTransp+" to enjoy the "+randomEnt+".";
    userChoice = prompt("Very well.. what about this? \n\n"+dayTripStatement+
    "\n\nIf you approve, enter YES. Otherwise, enter the elements you'd like to change (DESTINATION, RESTAURANT, TRANSPORT, and/or ENTERTAINMENT).")
}

console.log("Excellent choice! " + dayTripStatement +" Enjoy your trip!");


