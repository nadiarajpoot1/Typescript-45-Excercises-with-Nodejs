// define a function to print name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through.map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array containning magicians name
var magician_names = ["Harry porter", "Hamza", "Nadia"];
// making  copy of original array through .slice() function
var copy_magician_names = magician_names.slice();
//modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
// show both arrays original & copied 
// original
console.log("original array\n");
show_magicians(magician_names);
// copied 
console.log("\ncopied array");
show_magicians(copy_great_magicians);
