// Q32
// List of current usernames
var current_users = ["Ali", "Raza", "Sara", "Ubaid", "Hassan"];
// List of new usernames
var current_teachers = ['huma', 'saba', 'zoha'];
var new_teachers = ['huma', 'ruba', 'huda'];
for (var i = 0; i < current_teachers.length; i++) {
    var staff = new_teachers[i];
    if (current_teachers.includes(staff)) {
        console.log("\"Teacher already available\" ");
        console.log("Teacher ".concat(staff, " is already avaiable."));
    }
    else {
        console.log("\n \"Teacher not avaiable\"");
        console.log("Teacher ".concat(staff, " is not already avaiable."));
    }
}
// Q33
var num_arr = [1, 2, 3, 4, 5];
console.log("Ordinal Numbers");
for (var i = 0; i < num_arr.length; i++) {
    var num_end = void 0;
    if (num_arr[i] === 1) {
        num_end = "st";
    }
    else if (num_arr[i] === 2) {
        num_end = "nd";
    }
    else if (num_arr[i] === 3) {
        num_end = "rd";
    }
    else {
        num_end = "th";
    }
    console.log("".concat(num_arr[i]).concat(num_end));
}
// Q34 Pizza Array
var pizza = ['chinesepizza', 'chickenpizza', 'pepperoni'];
for (var i = 0; i < pizza.length; i++) {
    console.log(" i like ".concat(pizza[i]));
}
console.log("Realy i like pizza.");
// Q35 animal array
console.log("\n Animals Array");
var animals = ['cat', 'dog', 'horse'];
for (var i = 0; i < animals.length; i++) {
    console.log(" ".concat(animals[i], " is a great animal."));
}
console.log("all animals are faithful.");
// Q36 Function
function shirt(size, message) {
    console.log(i, bought, $, { size: size }, shirt);
    with (printed)
        "${message}";
}
shirt('XL', "Hello World");
// Q37
// function default value and message
console.log(n, Function, Parameter);
function fashion(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "i love typescript."; }
    console.log(I, order, $, { size: size }, sized, shirt);
    with (printed)
        message;
    $;
    {
        message;
    }
}
fashion();
fashion("medium");
fashion("small", "I am software Engineer");
// Q38
// function default value and message
console.log(n, Function, Parameter);
function cities(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log(City, $, { city: city }, is in $, { country: country });
}
cities();
cities("Lahore");
cities("Makka", "Sauodia Arabia");
