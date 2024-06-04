var userNames = ["mahad", "ali", "hamza", "admin", "hoor"];
userNames = [];
if (userNames.length === 0) {
    console.log("your array is empty we need to find some users");
}
else {
    // using foreach loop on array
    userNames.forEach(function (oneUsers) {
        if (oneUsers === "admin") {
            console.log("Hello ".concat(oneUsers, ",would you like to see a status reports?"));
        }
        else {
            console.log("Hello ".concat(oneUsers, ",thankyou for logging in again."));
        }
    });
}
