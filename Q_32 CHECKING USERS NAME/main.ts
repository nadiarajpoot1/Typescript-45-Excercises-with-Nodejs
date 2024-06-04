// array of current users
let current_users = ["Usman","Ali","Alyar","Nadia","Faiza"];

 //array of new users
let new_users = ["Hamza", "Amna","Ali","Mahad","Nadia"];

// loop through new_users to check for usersnames availability
new_users.forEach(new_one_user => {
    
    // making a condition for username already exist and save in our_cindition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

//print different message using if_else statements
if (our_condition){
    console.log(`sorry ${new_one_user}is already taken`)
}else{
    console.log(`this usernme ${new_one_user} is availble.`)
}
})