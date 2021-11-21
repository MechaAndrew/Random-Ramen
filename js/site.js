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

// var createButton = document.getElementById("create");
// var randomButton = document.getElementById("random");
// var settingsButton = document.getElementById("settings");
// var creditsButton = document.getElementById("credits");

var createButton = $("#create");
var randomButton = $("#random");
var settingsButton = $("#settings");
var creditsButton =$("#credits");

var history = $("#history p");

//adds event listener for click of oneButton

createButton.click(function() {});
randomButton.click(function() {});
settingsButton.click(function() {});
creditsButton.click(function() {});

$("#history p").html("This shit bussin up my ass. history shit gamin boyys. the fitner gram pacer test is a multi areobic penis. where my cock and balls are filled to the nrim")
