// define a function to print name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containning magicians name
var magician_name = ["Harry porter", "Hamza", "Nadia"];
// call the function to print each magician name
show_magicians(magician_name);
