//making a array of countries  and print its original order
let countriesToVisit: string[] = ["China", "Denmark","Brazil","Afganistan"];
console.log("Original Order:", countriesToVisit);

//print the array in alphabetical order without modifing the actual array list
console.log("Aiphabetical Order: " ,[...countriesToVisit].sort());

//show that the array is stil in its original order
console.log("still in original order:", countriesToVisit);

// print the array  in reversed order without modifing the acctual array list 
console.log("Reverse Order:", [...countriesToVisit].reverse());

//show that the array is still in its orginal order
console.log("still in original order:", countriesToVisit);

//we have changed the original array order now
console.log("Original Array Reversed:", countriesToVisit.reverse());

//print the array to show that its back to its original order
console.log("Back to original order:", countriesToVisit.reverse());

//print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

//we have changed again the original array order now in reversed order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());

