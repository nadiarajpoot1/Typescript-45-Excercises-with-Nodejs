// define a function with a rest parameters that accept items arragment representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich.");
}
// call the function 3 three timeswith 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Beard", "Butter");
makeSandwich("Vegetables", "Bread", "Butter", "Mayo", "Egg", "Chicken", "Cheese");
