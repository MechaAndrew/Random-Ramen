/*
 * Author: Vincent Wenzler, Andrew Dresel, Jesse Park Vivian, Zheng
 *Created: December 6 2021
 *License: Public Domain
 */
 //Ingredient Fact text
 var miso = "Miso: Broth made with Miso (fermented soybean paste with salt and Koji)<br>"
 var shoyu = "Shoyu: Broth using soy sauce with any type of chicken, pork or fish as the base<br>"
 var tonkotsu = "Tonkotsu: Broth traditionally made with pork bones as the base flavor<br>"
 var asparagus = "Asparagus: Long green feathery looking vegetables<br>";
 var beansprouts = "Beansprouts: The sprouting seeds of certain beans<br>";
 var benishoga = "Beni Shoga: Red pickled ginger<br>";
 var butter = "Butter: Churned cream<br>";
 var chashu = "Chashu: Thinly sliced braised pork<br>";
 var cheese = "Cheese: Fermented milk using rennet and bacteria<br>";
 var clams = "Clams: Bivalve mollusk<br>";
 var corn = "Corn: Yellow, slightly sweet vegetable<br>";
 var egg = "Organic oval or round object laid by specifically a chicken<br>";
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
 var ramen = "Ramen: Thin and curly wheat based noodles<br>"
 var udon = "Udon: Thicker white wheat based noodles<br>"
 var soba = "Soba: Thicker noodles made with buckwheat and wheat<br>"
 var broths = [shoyu, miso, tonkotsu]
 var ingredients = [asparagus, beansprouts, benishoga, butter, chashu, cheese,
                    clams, corn, egg, fishcake, garlic, aonegi, groundBeef, groundDaikon,
                    kakuni, kamaboko, kimchi, leek, lettuce, lime, menma, mint,
                    nori, sesameSeeds, shiitake, shiraganegi, spinach, takanazuke,
                    nanohana]
var noodles = [ramen, udon, soba]
var facts = "Dish Facts<br>";
var tonkotsufacts = "Tonkotsu:<br>Cholesterol: 249mg<br>Total Fat 22g<br>Sodium:1249mg<br>";
var misofacts = "Miso:<br>Cholesterol: 283mg<br>Total Fat 16g<br>Sodium:1820mg<br>";
var shoyufacts = "Shoyu:<br>Cholesterol: 25mg<br>Total Fat 8g<br>Sodium:1850mg<br>";
var nutrition = [shoyufacts, misofacts, tonkotsufacts];
var soupfacts = "Health Facts<br>";
//Functions:

//Randomly choose which broth
function randomBroth(){
  mod = Math.floor(Math.random() * 2) + 1;
$("#broth" + mod).css("visibility", "visible");
facts += broths[mod-1];
soupfacts += nutrition[mod-1];
console.log(facts);
}

//randomly pick a ramen noodle type
function randomNoodle(){

  mod = Math.floor(Math.random() * (4-1)) + 1;
  console.log(Math.floor(Math.random() * (4-1)) + 1);
$("#noodle" + mod).css("visibility", "visible");
facts += noodles[mod-1];
console.log(facts);
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
  randomBroth();
  $("#history p").html(facts);
  $("#health p").html(soupfacts);
  facts = "Dish Facts<br>";
   soupfacts = "Health Facts<br>";
   $(".smoke").css("visibility", "visible");
  $("#output").css("transform", "scale(1.5)");


}

//----------------------------------------------------------------------------------------------------------------------

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
$("#history p").html("Dish Facts<br>");
$("#health p").html("Health Facts<br>");
facts = "Dish Facts<br>";
soupfacts = "Health Facts<br>";
$("#output").css("transform", "scale(1)");


$(".smoke").css("visibility", "hidden");
});

creditsButton.click(function() {});
