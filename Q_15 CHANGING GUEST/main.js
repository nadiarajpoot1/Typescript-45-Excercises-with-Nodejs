var guestList = ["Nadia", "Ali", "Nameer", "Alyana"];
var dontCome = guestList[0];
console.log(dontCome, "nh aa skti");
guestList.splice(0, 1, "Amirr");
guestList.forEach(function (guest) { return console.log("Assalam Alaikum ".concat(guest, " would you like to dinner with me ?")); });
