function Dicee() {
// 1 - 6 

var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

// images/dice1.png - images/dice6.png
 
var randomDiceImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";


var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImageSource1);
image2.setAttribute("src", randomDiceImageSource2);

// If statements

if(randomNumber1 > randomNumber2) {

    document.querySelector("span").innerHTML = "Player 1 Wins!"    

} else if(randomNumber1 < randomNumber2) {

    document.querySelector("span").innerHTML = "Player 2 Wins!"  

} else {
    
    document.querySelector("span").innerHTML = "Draw!" 

}

}