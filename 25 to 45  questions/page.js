//Q31
var arr1 = ['ali', 'raza', 'sunny'];
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.pop();
console.log(arr1);
if (arr1.length === 0) {
    console.log("\n Empty Array");
    console.log("We need to find more users.");
}
// Q32
// List of current usernames
var current_users = ['user1', 'user2', 'user3', 'user4', 'user5'];
// List of new usernames
var new_users = ['user2', 'user6', 'user7', 'user8', 'user9'];
// Loop through new_users to check for unique usernames
for (var i = 0; i < new_users.length; i++) {
    var newUser = new_users[i];
    // Check if the new username is already in the current_users list
    //   if (current_users.includes(newUser)) {
    //     console.log(`Sorry, the username "${newUser}" is already taken. Please enter a new username.`);
    //   } else {
    //     console.log(`Congratulations! The username "${newUser}" is available.`);
    //   }
    //   for (let j = 0; j < current_users.length; j++) {
    //     let usernameTaken=false;
    //     if (newUser.toLowerCase() === current_users[j].toLowerCase()) {
    //       console.log(`Sorry, the username "${newUser}" is already taken. Please enter a new username.`);
    //       usernameTaken = true;
    //       break;
    //     }
    //   }
    // }
    console.log("hell world");
}
