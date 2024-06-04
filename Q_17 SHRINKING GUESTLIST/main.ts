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

// inform that only two guests can be invited for dinner
console.log("unfortunetly , the new dinner table wont arrived o time, so i can invite only to dinner with me.");

//using while.loop to remove guests from the array until only two names remain
while(guestList.length > 2){
let removeGuest = guestList.pop();
console.log(`sorry, ${removeGuest} i can't invite you to dinner`);
}

//sending invitation to the last two guest on the list
console.log(" invitation to the last two guests");
guestList.forEach(lasttwo => console.log(`luckily ${lasttwo} , you are still invited to dinner`));

//removing last two guest from the list
guestList.pop();
guestList.pop()

console.log("Empty List:", guestList);