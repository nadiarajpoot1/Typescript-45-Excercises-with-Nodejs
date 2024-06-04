// creating a array
let userNames = ["mahad","ali","nadia","admin",,"nameer"];

// using foreach loop on  array
userNames.forEach(oneUser => {
    if(oneUser === "admin"){
        console.log(`Hello ${oneUser},would you like to see a status reports?`)
    }else{
        console.log(`Hello ${oneUser},thankyou for logging in again.`)
    }
})