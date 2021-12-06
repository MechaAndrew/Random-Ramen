/*
 * Author: Vincent Wenzler, Andrew Dresel, Jesse Park
 *Created: 19 November 2021
 *License: Public Domain
 */
 //Ingredient Fact text
 var asparagus = "Asparagus: Long green feathery looking vegetables<br>";
 var beansprouts = "Beansprouts: The sprouting seeds of certain beans<br>";
 var benishoga = "Beni Shoga: Red pickled ginger<br>";
 var butter = "Butter: Churned cream<br>";
 var chashu = "Chashu: Thinly sliced braised pork<br>";
 var cheese = "Cheese: Fermented milk using rennet and bacteria<br>";
 var clams = "Clams: Bivalve mollusk<br>";
 var corn = "Corn: Yellow, slightly sweet vegetable<br>";
 var fishcake = "Fishcake: Fish meat ground and fried<br>";
 var garlic = "Garlic: A strong-smelling pungent-tasting bulb<br>";
 var aonegi = "Aonegi: Green onions<br>";
 var groundBeef = "Ground Beef: Ground up meat from cows<br>";
 var groundDaikon = "Ground Daikon: Daikon radishes ground up<br>";
 var kakuni = "Kakuni: Cut up pork cubes braised for hours in soy sauce, sugar and other ingredients<br>";
 var kamaboko = "Kamaboko: Processed seafood using various pureed white fish<br>";
 var kimchi = "Kimchi: Spicy fermented cabbage<br>";
 var leek = "Leek: A green vegetable that has a sweet onion-like flavor<br>";
 var lettuce = "Lettuce: Vegetable that has large edible leaves<br>";
 var lime = "Lettuce: A green, sour, acidic, oval fruit<br>";
 var menma = "Menma: Fermented bamboo shoots<br>";
 var mint = "Mint: An aromatic plant used as culinary herbs<br>";
 var nori = "Nori: Sun dried seaweed<br>";
 var sesameSeeds = "Sesame Seeds: The edible seeds of the sesame plant<br>";
 var shiitake = "Shiitake: A type of mushroom<br>";
 var shiraganegi = "Shiraga Negi: Shredded white part of green onions<br>";
 var spinach = "Spinach: Green leafy vegetable<br>"
 var takanazuke = "Takana Zuke: Pickled Mustard leaf<br>"
 var nanohana = "Nanohana: Young spring shoots of the canola plant<br>"
 var ingredients = [asparagus, beansprouts, benishoga, butter, chashu, cheese,
                    clams, corn, fishcake, garlic, aonegi, groundBeef, groundDaikon,
                    kakuni, kamaboko, kimchi, leek, lettuce, lime, menma, mint,
                    nori, sesameSeeds, shiitake, shiraganegi, spinach, takanazuke,
                    nanohana]
var facts = "Dish Facts<br>";
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
  mod = Math.floor(Math.random() *3) + 1;
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
  //randomly pick the toppings
function randomToppings(numbers){
  for(i=0; i<=numbers; i++) {
  mod = Math.floor(Math.random() * (29-1)) + 1;
  console.log(Math.floor(Math.random() * (29-1)) + 1);
  $("#topping" + mod).css("visibility", "visible");
  facts += ingredients[mod-1];
  //implement a way so the toppings aren't repeated
}//end for
console.log(facts)
$("#history p").html(facts)
facts = "";
}//end Functions

function randomRamen(){
  $(".noodle").css("visibility", "hidden");
  $(".broth").css("visibility", "hidden");
  $(".topping").css("visibility", "hidden");
  facts = "Dish Facts<br>";
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
$("#history p").html("");
});
//no need for a reset button. What else can we make the banner be?
creditsButton.click(function() {});


// $("#health p").html("This shit bussin up my ass. history shit gamin boyys. the fitner gram pacer test is a multi areobic penis. where my cock and balls are filled to the nrim but where at though coc kand ball torture to fill my cum of glaze")
