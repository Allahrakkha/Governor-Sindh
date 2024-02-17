// Q24 condition testing 2
// string 
let str1="AllahRakkha"
let str2= "allarakkha"
let str3= "ALLAHRAKKHA"
console.log(`\n case 1 str1 !== str2? I predict True.`);
console.log(str1 !== str2)
console.log(`\n case 2 str1 === str1? I predict False.`);
console.log(str1 === str2)
console.log(`\n case 3 str1 !== str3? I predict True.`);
console.log(str1 !== str3)
console.log(`\n case 4 str1 === str3? I predict False.`);
console.log(str1 === str3)
// lower case function
let str4="hello"
let str5=str4.toLocaleLowerCase()
let str6=str4.toLocaleUpperCase()
console.log(`\n case 5 str4 === str5? i predict True`)
console.log(str4 === str5)
console.log(`\n case 6 str4 !== str5? i predict False`)
console.log(str4 !== str5)
console.log(`\n case 7 str4 === str6? i predict False`)
console.log(str4 === str6)
console.log(`\n case 8 str4 !== str6? i predict True`)
console.log(str4 !== str6)

// and or operator
console.log(`\n AND OR operator`)
console.log(`\n case 1`)

let passWard=123
let user1="Allahrakkha"
if(passWard===123 && user1=== "Allahrakkha"){
  console.log(`\n I predict True Answer: ${passWard===123 && user1=== "Allahrakkha"}`)
}

// "And" Operator Test
const a: boolean = true;
const b: boolean = false;
const andResult: boolean = a && b;
console.log(`\n "And" Operator Test: ${a} && ${b} is ${andResult}`);

// "Or" Operator Test
const orResult: boolean = a || b;
console.log(`\n "Or" Operator Test: ${a} || ${b} is ${orResult}`);

if(passWard===123 || user1=== "allahrakkha"){
console.log("\n or operator is true")
}
else{
  console.log(" \n or operator is not true")
}

// item to check in array
let itemCheckArray:string[]=['A','B','C','D']
const arrayElement="A";
const checkArray=itemCheckArray.includes(arrayElement)
console.log('To check array')
console.log(`Item in array:${arrayElement} is in the array: ${checkArray}`)


const myArray: string[] = ["apple", "banana", "orange", "grape"];
const itemToCheck: string = "kiwi";

// Check if the item is in the array
const isInArray: boolean = !myArray.includes(itemToCheck);
console.log(`Item in Array Test: "${itemToCheck}" is in the array: ${isInArray}`);

// check if item is not in array
const newArray: string[] = ["apple", "banana", "orange", "grape"];
const itemCheck: string = "kiwi";

// Check if the item is not in the array
const isNotInArray: boolean = !newArray.includes(itemToCheck);
console.log(`Item not in Array Test: "${itemToCheck}" is not in the array: ${isNotInArray}`);













