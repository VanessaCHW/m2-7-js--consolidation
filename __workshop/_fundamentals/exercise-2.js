// Exercise 2
//
// Below are two objects of the same "format".
// Each object is a mapping between individual people
// and their favourite desserts
// Notice that there are duplicates (eg. both Riley and John like "ice-cream").

const favoriteDessertsGroupA = {
  scott: "brownies",
  fred: "tiramisu",
  lisa: "chocolate cake",
  riley: "ice-cream",
  sunny: "cheese cake",
  john: "ice-cream",
  beth: "cheese cake",
  summer: "ice-cream",
  morty: "apple pie",
  rick: "brownies",
  andrew: "cheese cake",
  jerry: "rhubard pie",
  "jean-luc": "cheese cake",
  tiffany: "waffles",
  melissa: "profiteroles",
};

const favoriteDessertsGroupB = {
  alice: "pie",
  betty: "deep-fried mars bar",
  colin: "gummy bears",
  damien: "child tears",
  ellicia: "panda express",
  fertrude: "gummy bears",
  glinda: "pie",
  hethel: "not applicable",
  irsula: "rum cake",
  judas: "revenge (served cold)",
  khloe: "pie",
  lyndon: "easter eggs",
  minda: "dessert",
};

// Write a function which takes one of these objects and puts them into an
// array which is sorted from most popular to least popular. For example,
// in Group B, the most popular dessert is "pie", so it should be first
// in the array.
//
// For "ties", the order doesn't matter.
//
// HINT: You'll need to do this in 2 steps:
// - First, count how often each dessert appears
// - Second, put them in order

// Your function should work with both objects and any other objects of the same shape.

function sortByPopularity(obj) {
  
  // Get only the desserts names
  let options = Object.values(obj);
  let dessertCount ={};

  // Populate the dessertCount object with the dessert names
  // as keys, and '0' as values
  options.forEach(element=>{
    if(!(element in dessertCount)){
      dessertCount[element]=0;
    }
  });

  // Increment the count values in the object
  options.forEach(dessert=>{
      dessertCount[dessert] +=1;
  });

  // Sort the keys by comparing the pair values. Will sort increasingly.
  // Use reverse to get right order.
  // Returns only the keys since we used sort on Object.keys
  let sortedCount = Object.keys(dessertCount).sort(function(a,b){
    return dessertCount[a] - dessertCount[b];
  }).reverse();
 
  return sortedCount;
}

// Verification via console.log()
console.log(
  "Popular desserts in Group A:",
  sortByPopularity(favoriteDessertsGroupA)
);
console.log(
  "Popular desserts in Group B:",
  sortByPopularity(favoriteDessertsGroupB)
);

// Test your code: "yarn test exercise-2"

module.exports = sortByPopularity;
