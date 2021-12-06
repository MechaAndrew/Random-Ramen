/*
 * Author: Vincent Wenzler, Andrew Dresel, Jesse Park
 *Created: 19 November 2021
 *License: Public Domain
 */
//Functions:

//Randomly choose which broth
function randomBroth(){
  Math.floor(Math.random() * 3) + 1;
$("#broth" + mod).css("visibility", "visible");
}

//randomly pick a ramen noodle type
function randomNoodle(){

  mod = Math.floor(Math.random() * (4-1)) + 1;
  console.log(Math.floor(Math.random() * (4-1)) + 1);
$("#noodle" + mod).css("visibility", "visible");
}//end randomNoodle

//randomly pick the number of toppings
function toppingNumber(){
  mod = Math.floor(Math.random() *5) + 1;
  if (mod == 1) {
    return 1;
  }  else if (mod == 2) {
    return 2;
  }  else if (mod == 3) {
    return 3;
  }  else if (mod == 4) {
    return 4;
  }
}
  //randomly pick the topings
function randomToppings(numbers){

  for(i=0; i<=numbers; i++) {
  mod = Math.floor(Math.random() * (29-1)) + 1;
  console.log(Math.floor(Math.random() * (29-1)) + 1);
  $("#topping" + mod).css("visibility", "visible");
  //implement a way so the toppings aren't repeated
}//end for
}//end Functions

function randomRamen(){
  $(".noodle").css("visibility", "hidden");
  $(".broth").css("visibility", "hidden");
  $(".topping").css("visibility", "hidden");
  // randomBroth();

  randomNoodle();

  // toppingNumber();

  randomToppings(toppingNumber());
  randomBroth()
}

//----------------------------------------------------------------------------------------------------------------------
//finds specific button elements and assigns them a variable

// var createButton = document.getElementById("create");
// var randomButton = document.getElementById("random");
// var settingsButton = document.getElementById("settings");
// var creditsButton = document.getElementById("credits");

var createButton = $("#create");
var randomButton = $("#random");
var resetButton = $("#reset");
var creditsButton =$("#credits");

var history = $("#history p");
var health = $("#health p");



//adds event listener for click of oneButton

createButton.click(function() {});

$("#random").click(function () {
  randomRamen();
}
);//end function


resetButton.click(function() {
$(".noodle").css("visibility", "hidden");
$(".broth").css("visibility", "hidden");
$(".topping").css("visibility", "hidden");

});
//no need for a reset button. What else can we make the banner be?
creditsButton.click(function() {});

$("#history p").html("This shit bussin up my ass. history shit gamin boyys. the fitner gram pacer test is a multi areobic penis. where my cock and balls are filled to the nrim but where at though coc kand ball torture to fill my cum of glaze")
// $("#health p").html("This shit bussin up my ass. history shit gamin boyys. the fitner gram pacer test is a multi areobic penis. where my cock and balls are filled to the nrim but where at though coc kand ball torture to fill my cum of glaze")
