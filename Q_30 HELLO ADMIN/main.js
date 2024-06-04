// creating a array
var userNames = ["mahad", "ali", "nadia", "admin", , "nameer"];
// using foreach loop on  array
userNames.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status reports?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",thankyou for logging in again."));
    }
});
