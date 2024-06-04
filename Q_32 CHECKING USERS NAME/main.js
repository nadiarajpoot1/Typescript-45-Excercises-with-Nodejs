// array of current users
var current_users = ["Usman", "Ali", "Alyar", "Nadia", "Faiza"];
//array of new users
var new_users = ["Hamza", "Amna", "Ali", "Mahad", "Nadia"];
// loop through new_users to check for usersnames availability
new_users.forEach(function (new_one_user) {
    // making a condition for username already exist and save in our_cindition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //print different message using if_else statements
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, "is already taken"));
    }
    else {
        console.log("this usernme ".concat(new_one_user, " is availble."));
    }
});
