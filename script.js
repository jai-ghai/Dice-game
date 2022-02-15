
function load(){

  var randonNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6 number

var randomDiceImage1 = "dice" + randonNumber1 + ".png"; // dice1-dice6

var randomImagesource1 = "images/" + randomDiceImage1;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImagesource1);

// second img

var randonNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6 number

var randomDiceImage2 = "dice" + randonNumber2 + ".png"; // dice1-dice6

var randomImagesource2 = "images/" + randomDiceImage2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImagesource2);

if (randonNumber1 > randonNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randonNumber1 < randonNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
}
  
  
 function reload1() { 
  location.reload();
});
