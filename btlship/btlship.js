var randomLoc = Math.floor(Math.random() * 5);
var loc1 = randomLoc;
var loc2 = loc1 + 1;     //для коорд корабля
var loc3 = loc1 + 2;

var cell;
var hits = 0;    //для действ. пользователя
var guesses = 0;

var isSunk = false;   //потоплен или нет

while (isSunk == false) {
        cell = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (cell >= 0 && cell <= 6) {
        guesses = guesses + 1;
    if (cell == loc1 || cell == loc2 || cell == loc3) {
        alert("HIT!");
        hits = hits + 1;
    if (hits == 3) {
        isSunk = true;
        alert("Ship is sunk! Good job!");
    }
    } else {
        alert("MISS!")
    }
    } else {
        alert("Please enter a valid cell number!");
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + ((3/guesses)*100 + "%");

alert(stats);