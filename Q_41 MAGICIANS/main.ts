// define a function to print name from an array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// define an array containning magicians name
let magician_name = ["Harry porter","Hamza","Nadia"];

// call the function to print each magician name
show_magicians(magician_name);