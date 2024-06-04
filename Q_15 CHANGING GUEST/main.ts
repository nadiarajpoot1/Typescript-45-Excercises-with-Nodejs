let guestList = ["Nadia","Ali","Nameer","Alyana"];

let dontCome = guestList[0];

console.log(dontCome , "nh aa skti");

guestList.splice(0,1, "Amirr");

guestList.forEach(guest => console.log (`Assalam Alaikum ${guest} would you like to dinner with me ?`));
