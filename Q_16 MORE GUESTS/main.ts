//creating a guestlist Array
let guestList = ["Nadia","Ali","Nameer","Alyana"];

//making variable for those guest who can't come
let dontCome = guestList[0];

//print the name of guest who can't come
console.log(dontCome ,"nh aa sakti hain");

// add or remove guestlist array
guestList.splice(0,1, "Amirr");

//message print for bigger table
console.log("Good News ! We have Found a Bigger Table For Dinner . ");

//adding a new valueat starting index of array
guestList.unshift("Aijaz");

//adding a new value at ending index of array
guestList.push("zain");

//get amiddle index of our guestlist array 
let middleIndex: number  = Math.floor(guestList.length / 2);

//adding a new guest at middle index of array
guestList.splice(middleIndex ,0 , "Ablaaj");

//print message of updated list
console.log("Updated List of our Guests");

//sending a invitation message to our guests one by one with their  names
guestList.forEach(oneguest => console.log(`salam ${oneguest}, Would you like to dinner with me`));