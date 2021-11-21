/*
 * Author: Vincent Wenzler, Andrew Dresel, Jesse Park
 *Created: 19 November 2021
 *License: Public Domain
 */


//Randomly choose is there a broth
function randomBroth(){
  Math.floor(Math.random() * 2) + 1;
  if (mod == 1) {

  }
  else if (mod == 2) {

  }
  else if (mod == 3) {

  }
}
//randomly pick a ramen noodle type
function randomNoodle(){
  Math.floor(Math.random() * 2) + 1;
  if (mod == 1) {

  }
  else if (mod == 2) {

  }
  else if (mod == 3) {

  }
}
//randomly pick the number of toppings
function toppingNumber(){
  Math.floor(Math.random() *4) + 1;
}
  //randomly pick the topings
function randomToppings(){

}

function randomRamen(){
  randomBroth();
  randomNoodle();
  toppingNumber();
  randomToppings();
}



//finds specific button elements and assigns them a variable

var createButton = document.getElementById("create");
var randomButton = document.getElementById("random");
var settingsButton = document.getElementById("settings");
var creditsButton = document.getElementById("credits");

var history = document.getElementById("p#history");

//adds event listener for click of oneButton

createButton.addEventListener("click", function() {})
randomButton.addEventListener("click", function() {})
settingsButton.addEventListener("click", function() {})
creditsButton.addEventListener("click", function() {})


document.getElementById("history").append("Helolo");
