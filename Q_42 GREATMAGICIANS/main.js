// define a function to print name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array containning magicians name
var magician_names = ["Harry porter", "Hamza", "Nadia"];
var great_magicians = make_great(magician_names);
console.log(great_magicians);
show_magicians(great_magicians);
