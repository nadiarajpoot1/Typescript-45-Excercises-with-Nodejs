// define a function with a rest parameters that accept items arragment representing our sandwich
function makeSandwich(... items: string[]){
    console.log("\nMaking a sandwich with the following items:\n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich.")
}

// call the function 3 three timeswith 3 different number of arguments
makeSandwich("Chicken","Cheese","Mayo","Egg");

makeSandwich("Beard","Butter");

makeSandwich("Vegetables","Bread","Butter","Mayo","Egg","Chicken","Cheese");