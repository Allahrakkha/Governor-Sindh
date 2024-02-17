// Q24 condition testing 2
// string 
var str1 = "AllahRakkha";
var str2 = "allarakkha";
var str3 = "ALLAHRAKKHA";
console.log("\n case 1 str1 !== str2? I predict True.");
console.log(str1 !== str2);
console.log("\n case 2 str1 === str1? I predict False.");
console.log(str1 === str2);
console.log("\n case 3 str1 !== str3? I predict True.");
console.log(str1 !== str3);
console.log("\n case 4 str1 === str3? I predict False.");
console.log(str1 === str3);
// lower case function
var str4 = "hello";
var str5 = str4.toLocaleLowerCase();
var str6 = str4.toLocaleUpperCase();
console.log("\n case 5 str4 === str5? i predict True");
console.log(str4 === str5);
console.log("\n case 6 str4 !== str5? i predict False");
console.log(str4 !== str5);
console.log("\n case 7 str4 === str6? i predict False");
console.log(str4 === str6);
console.log("\n case 8 str4 !== str6? i predict True");
console.log(str4 !== str6);
// and or operator
console.log("\n AND OR operator");
console.log("\n case 1");
var passWard = 123;
var user1 = "Allahrakkha";
if (passWard === 123 && user1 === "Allahrakkha") {
    console.log("\n I predict True Answer: ".concat(passWard === 123 && user1 === "Allahrakkha"));
}
// "And" Operator Test
var a = true;
var b = false;
var andResult = a && b;
console.log("\n \"And\" Operator Test: ".concat(a, " && ").concat(b, " is ").concat(andResult));
// "Or" Operator Test
var orResult = a || b;
console.log("\n \"Or\" Operator Test: ".concat(a, " || ").concat(b, " is ").concat(orResult));
if (passWard === 123 || user1 === "allahrakkha") {
    console.log("\n or operator is true");
}
else {
    console.log(" \n or operator is not true");
}
// item to check in array
var itemCheckArray = ['A', 'B', 'C', 'D'];
var arrayElement = "A";
var checkArray = itemCheckArray.includes(arrayElement);
console.log('To check array');
console.log("Item in array:".concat(arrayElement, " is in the array: ").concat(checkArray));
var myArray = ["apple", "banana", "orange", "grape"];
var itemToCheck = "kiwi";
// Check if the item is in the array
var isInArray = !myArray.includes(itemToCheck);
console.log("Item in Array Test: \"".concat(itemToCheck, "\" is in the array: ").concat(isInArray));
// check if item is not in array
var newArray = ["apple", "banana", "orange", "grape"];
var itemCheck = "kiwi";
// Check if the item is not in the array
var isNotInArray = !newArray.includes(itemToCheck);
console.log("Item not in Array Test: \"".concat(itemToCheck, "\" is not in the array: ").concat(isNotInArray));
