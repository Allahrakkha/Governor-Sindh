var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Q1= installation done
// Q2 = store person name.....
var user = "Ali";
console.log(user); // answer Ali
var userMessage = "Hello, would you like to learn Typescript?";
console.log(userMessage);
// Q3
var teacher = "Okasha";
console.log(teacher.toUpperCase());
console.log(teacher.toLowerCase());
//Q4
var said = "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man.";
var saidPerson = "Quaid e Azam";
console.log("Famous Quote: \"".concat(said, "\", said \"").concat(saidPerson, "\""));
// Q5
function quote(val1, val2) {
    console.log("Famous quote: \"".concat(message, "\", said ").concat(famousPerson, "."));
}
var message = "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man.";
var famousPerson = "Quaid e Azam";
quote(message, famousPerson);
//Q6
var whiteSpaceName1 = "\t       Ali,   \n ";
var whiteSpaceName2 = "\t    A      \t      l      \t      i";
console.log("White Space Name: ".concat(whiteSpaceName1, " \n ").concat(whiteSpaceName2));
console.log("Stripped Name: ".concat(whiteSpaceName1.trim()));
//Q7 arthmatic operations
// first way
var number = 8;
console.log(number);
number += 1;
console.log(number);
number -= 2;
console.log(number);
number *= 2;
console.log(number);
number /= 3;
console.log(number);
//2nd way
var addition = 4 + 4;
console.log(addition);
var subtarction = 8 - 4;
console.log(subtarction);
var division = 8 / 2;
console.log(division);
var multiply = 4 * 4;
console.log(multiply);
//Q8
// first way
// let sum = 5+3
// console.log(sum)
// console.log(sum)
// console.log(sum)
// console.log(sum)
// 2nd way
function sum1() {
    var total = 5 + 3;
    console.log(total);
}
var result = sum1();
// Q9 
var myNumber = 12;
var myMessage = "My favourite number is ".concat(myNumber, ".");
console.log(myMessage);
// Q10 
// Program 1 ===>login system
// Programmer AllahRakkha
// Date 14 Feb 2024
var userName = "Ali";
var passward = 123;
if (userName === "Ali" && passward === 123) {
    console.log("You are allowed.");
}
else {
    console.log("you are not allowed.");
}
// Program 2 ===>Area of rectangle
// Programmer AllahRakkha
// Date 14 Feb 2024
function area(width, lenght) {
    return width * lenght;
}
var answer = area(20, 10);
console.log(answer);
// Q11 array
var myFriend = ['Ali', 'Raza', 'Ubaid', 'Saleem'];
console.log(myFriend);
console.log(myFriend.indexOf("Raza"));
console.log(myFriend.length);
console.log(myFriend[0]);
console.log(myFriend[1]);
console.log(myFriend[2]);
console.log(myFriend[3]);
// Q12 Greeting
for (var i = 0; i < myFriend.length; i++) {
    var greeting = myFriend[i];
    console.log("Salaam, ".concat(greeting, "! Have a nice day!"));
}
// Q13
var transport = [{
        car: "i like blue car",
        bike: "i have my own bike",
        rickshaw: "ricksahw is economical mode of transportatio"
    }];
console.log(transport);
var guest = [
    { name: "Ali", message: "you are invited for dinner today." },
    { name: "Raza", message: "WoW! we are meeting tonight." },
    { name: "Sara", message: "Please be on time." },
];
for (var i = 0; i < guest.length; i++) {
    var guestName = guest[i];
    console.log("My friend!".concat(guestName.name, " ").concat(guestName.message));
}
// Q15
// to remove unwated guest (sara)
guest.pop();
console.log(guest);
// add new guest
function addNewGuest(name, message) {
    var newGuest = { name: name, message: message };
    guest.push(newGuest);
    console.log("New guest, ".concat(name, ", has been added with the message: \"").concat(message, "\""));
}
//   calling function addNewguest
addNewGuest("jibran", "you are new guest.");
// print update list
for (var i = 0; i < guest.length; i++) {
    console.log(guest[i]);
}
// Q16 add three more guests
// add guest at start (unshift())
function addMoreNewGuest(name, message) {
    var newGuest = { name: name, message: message };
    guest.unshift(newGuest);
    console.log("New guest, ".concat(name, ", has been added with the message: \"").concat(message, "\""));
}
addMoreNewGuest("Ubaid", "you are 5th guest.");
// add guest in middle (append())
function addMiddleGuest(name, message) {
    var newGuest = { name: name, message: message };
    guest.splice(0, 0, newGuest);
    console.log("Middle guest, ".concat(name, ", \"").concat(message, "\""));
}
addMiddleGuest("liaba", "you are middle guest.");
for (var i = 0; i < guest.length; i++) {
    var middleguest = guest[i];
    console.log("My friend! ".concat(middleguest.name, " ").concat(middleguest.message));
}
//  add guest at end 
function appendNewGuest(name, message) {
    var newGuest = { name: name, message: message };
    guest.push(newGuest);
    console.log("New appended guest, ".concat(name, ", \"").concat(message, "\""));
}
appendNewGuest("Rubina", "You may sit on last seat.");
for (var i = 0; i < guest.length; i++) {
    var guestList = guest[i];
    console.log("Dear ".concat(guestList.name, " ").concat(guestList.message));
}
// Q17 remove guest
// annoncement
var annoncement = "with regret! Due to an unforseen situation, we can invite only two person.";
console.log(annoncement);
// remove guest from list
while (guest.length > 2) {
    var removedGuest = guest.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest.name, ", we can't invite you to dinner."));
    }
}
for (var i = 0; i < guest.length; i++) {
    var guestList = guest[i];
    console.log("Dear ".concat(guestList.name, " ").concat(guestList.message));
}
// remove last two guest 
guest.pop();
guest.pop();
console.log(guest);
if (guest.length === 0) {
    console.log("The guest list is empty.");
}
else {
    console.log("There are still guests on the list.");
}
// Q18 favourite places
var myDreamingWorld = ['Makka', 'Madinah', 'Europe', 'America', 'Sidney', 'Arab'];
console.log("\n My Orignal Array");
console.log(myDreamingWorld);
// temporary alphabatical array
console.log("\n Alphabetical Order Array");
console.log(__spreadArray([], myDreamingWorld, true).sort());
// orginal array without order
console.log("\n Orignal Array after alphabetical order");
console.log(myDreamingWorld);
// reverse order
// console.log(myDreamingWorld.reverse())
console.log("\n Reverse Order Array");
console.log(__spreadArray([], myDreamingWorld, true).reverse());
console.log("\n Orignal Array");
console.log(myDreamingWorld);
console.log("\n Alphabetical Order Array");
console.log(__spreadArray([], myDreamingWorld, true).sort());
// revers alphabetical order
console.log("\n Reverse alphabetical Order Array");
var reversAlphabeticArr = __spreadArray([], myDreamingWorld, true).sort();
console.log(reversAlphabeticArr.reverse());
// orignal array
console.log("\n My orignal Array");
console.log(myDreamingWorld);
// Q19 number of people iviting
var arr1 = guest.length;
var arr2 = myDreamingWorld.length;
var ans = arr1 + arr2;
console.log(" \n Total Invited People");
console.log("Attention please: ".concat(ans, " are invited for dinner."));
// Q20 mix data array
var itemArr = [
    { name: "vehicle", message: "i like vigo." },
    { name: "vehicle", message: "i have mehran" },
    { name: "mountain", message: "pakistan has K2." },
    { name: "food", message: "i like meat" }
];
console.log("\n My Item List");
for (var i = 0; i < itemArr.length; i++) {
    var item = itemArr[i];
    console.log("My items: ".concat(item.name, ", ").concat(item.message));
}
// Q21 object
var myData = {
    name: "Allah rakkha",
    age: 40,
    gender: "male",
    profession: "teacher"
};
console.log("\n My Bi Data Object");
console.log(myData);
// Q22 Array index error 
var fruit = ['apple', 'banana', 'mango', 'orange', 'guava'];
var fruitIndex = fruit[6];
console.log("\n wrong array index ");
if (fruit[3] === "mango") {
    console.log("correct index.");
}
else {
    console.log("Attention!!! wrong idex.");
}
console.log("Wrong index define: ".concat(fruit[6]));
// Q23  conditional test
// Condition 1
var student1 = 'Allah Rakkha';
console.log("Is student == 'Allah Rakkha'? I predict True.");
console.log("\n Condition 1 ");
console.log(student1 == 'Allah Rakkha');
// condition 2
var student2 = 'Raza';
console.log("Is student == 'Allah Rakkha'? I predict False.");
console.log("\n Condition 2 ");
console.log(student2 == 'Allah Rakkha');
// condition 3
var age1 = 40;
console.log("Is age == '40'? I predict True.");
console.log("\n Condition 3 ");
console.log(age1 == 40);
// condition 4
var age2 = 40;
console.log("Is age < '40'? I predict False.");
console.log("\n Condition 4 ");
console.log(age2 < 40);
var isRaining = true;
var heavyRaining = false;
var fruit2 = 'apple';
var city = 'New York';
console.log("\n Condition 5 ");
console.log("condition 5: Is isRaining == true? I predict True.");
console.log(isRaining == true);
console.log("\n Condition 6 ");
console.log("condition 6: Is fruit != 'banana'? I predict True.");
console.log(fruit2 != 'banana');
console.log("\n Condition 7 ");
console.log("condition 7: Is city === 'New York'? I predict True.");
console.log(city === 'New York');
console.log("\n Condition 8 ");
console.log("condition 8: Is isRaining == isRainin? I predict true.");
console.log(isRaining == isRaining);
console.log("\n Condition 9 ");
console.log("condition 9: Is fruit === 'orange'? I predict False.");
console.log(fruit2 === 'orange');
console.log("\n Condition 10 ");
console.log("condition 10: Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles');
