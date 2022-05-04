var cell;

function giveMe() {
    cell = prompt("Напиши своё имя")
   // return cell;
}

function makePhrases() {
    var words1 = ["большой", "маленький", "огромный"];
    var words2 = ["твёрдый", "напряженный", "вкусный", "горячий", "горбатенький"];
    var words3 = ["апульсин", "хлебушек", "мики маус", "шкрэк", "писюн"];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = "Ты " + words1[rand1] + " " + words2[rand2] + " " + words3[rand3] + " " + cell;
    alert(phrase);
    }
    giveMe();
    makePhrases();