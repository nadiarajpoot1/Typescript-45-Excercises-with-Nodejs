// Define variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "peach"];
// test for equality and unequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
// tests using lowercase  function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n Is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//numerical tests
// equals to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// not equal to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
// greater than 
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
//less than 
console.log("\n Is twenty is less than 10?");
console.log(twenty < 10);
// greater than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
// less than or equals to 
console.log("\n Is  twenty is less than or equals to 10?");
console.log(twenty <= 10);
// tests using "and & "or" operators
// using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10 ");
console.log(twenty != 10 && twenty > 30);
// using  || (OR)
console.log("\n 20 is greater than 50 or 20 is equals to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
//test wheather an item is include in array 
console.log("\nIs peach is include in my fruits array");
console.log(fruits.includes("peach"));
// not include
console.log("\n Is peach not include in my fruits array");
console.log(!fruits.includes("orange"));
