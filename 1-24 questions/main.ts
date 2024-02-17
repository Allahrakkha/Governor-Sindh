// Q1= installation done
// Q2 = store person name.....
let user = "Ali"
console.log(user)// answer Ali

let userMessage = "Hello, would you like to learn Typescript?"
console.log(userMessage)

// Q3
let teacher = "Okasha"
console.log(teacher.toUpperCase())
console.log(teacher.toLowerCase())

//Q4
let said = "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man."
let saidPerson = "Quaid e Azam"
console.log(`Famous Quote: "${said}", said "${saidPerson}"`)

// Q5
function quote(val1: string, val2: string) {
  console.log(`Famous quote: "${message}", said ${famousPerson}.`)
}

const message = "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man."
const famousPerson = "Quaid e Azam"
quote(message, famousPerson)


//Q6
let whiteSpaceName1 = "\t       Ali,   \n "
let whiteSpaceName2 = "\t    A      \t      l      \t      i"
console.log(`White Space Name: ${whiteSpaceName1} \n ${whiteSpaceName2}`)
console.log(`Stripped Name: ${whiteSpaceName1.trim()}`)

//Q7 arthmatic operations
// first way
let number = 8
console.log(number)
number += 1
console.log(number)
number -= 2
console.log(number)
number *= 2
console.log(number)
number /= 3
console.log(number)


//2nd way
let addition = 4 + 4
console.log(addition)
let subtarction = 8 - 4
console.log(subtarction)
let division = 8 / 2
console.log(division)
let multiply = 4 * 4
console.log(multiply)


//Q8
// first way
// let sum = 5+3
// console.log(sum)
// console.log(sum)
// console.log(sum)
// console.log(sum)

// 2nd way
function sum1() {
  let total = 5 + 3
  console.log(total)
}
let result = sum1()

// Q9 
let myNumber: number = 12
let myMessage: string = `My favourite number is ${myNumber}.`
console.log(myMessage)

// Q10 
// Program 1 ===>login system
// Programmer AllahRakkha
// Date 14 Feb 2024
let userName: string = "Ali"
let passward: number = 123
if (userName === "Ali" && passward === 123) {
  console.log("You are allowed.")
}
else {
  console.log("you are not allowed.")
}

// Program 2 ===>Area of rectangle
// Programmer AllahRakkha
// Date 14 Feb 2024

function area(width: number, lenght: number) {

  return width * lenght;
}

let answer = area(20, 10)
console.log(answer)

// Q11 array
let myFriend: string[] = ['Ali', 'Raza', 'Ubaid', 'Saleem']
console.log(myFriend)
console.log(myFriend.indexOf("Raza"))
console.log(myFriend.length)
console.log(myFriend[0])
console.log(myFriend[1])
console.log(myFriend[2])
console.log(myFriend[3])



// Q12 Greeting

for (let i = 0; i < myFriend.length; i++) {
  const greeting = myFriend[i];
  console.log(`Salaam, ${greeting}! Have a nice day!`);
}
// Q13
let transport: string[] | {} = [{
  car: "i like blue car",
  bike: "i have my own bike",
  rickshaw: "ricksahw is economical mode of transportatio"
}]
console.log(transport)

// Q14
type Guest = { name: string, message: string }
const guest: Guest[] = [
  { name: "Ali", message: "you are invited for dinner today." },
  { name: "Raza", message: "WoW! we are meeting tonight." },
  { name: "Sara", message: "Please be on time." },
]

for (let i = 0; i < guest.length; i++) {
  let guestName = guest[i]
  console.log(`My friend!${guestName.name} ${guestName.message}`)
}

// Q15
// to remove unwated guest (sara)

guest.pop()
console.log(guest)

// add new guest

function addNewGuest(name: string, message: string): void {
  const newGuest: Guest = { name, message };
  guest.push(newGuest);
  console.log(`New guest, ${name}, has been added with the message: "${message}"`);
}
//   calling function addNewguest
addNewGuest("jibran", "you are new guest.")


// print update list
for (let i = 0; i < guest.length; i++) {
  console.log(guest[i])
}


// Q16 add three more guests
// add guest at start (unshift())
function addMoreNewGuest(name: string, message: string): void {
  const newGuest: Guest = { name, message };
  guest.unshift(newGuest);
  console.log(`New guest, ${name}, has been added with the message: "${message}"`);
}
addMoreNewGuest("Ubaid", "you are 5th guest.")

// add guest in middle (append())

function addMiddleGuest(name: string, message: string): void {
  const newGuest: Guest = { name, message };
  guest.splice(0, 0, newGuest);
  console.log(`Middle guest, ${name}, "${message}"`);
}
addMiddleGuest("liaba", "you are middle guest.")
for (let i = 0; i < guest.length; i++) {
  let middleguest = guest[i];
  console.log(`My friend! ${middleguest.name} ${middleguest.message}`);
}

//  add guest at end 
function appendNewGuest(name: string, message: string): void {
  const newGuest: Guest = { name, message };
  guest.push(newGuest);
  console.log(`New appended guest, ${name}, "${message}"`);
}
appendNewGuest("Rubina", "You may sit on last seat.")

for (let i = 0; i < guest.length; i++) {
  let guestList = guest[i];
  console.log(`Dear ${guestList.name} ${guestList.message}`)
}

// Q17 remove guest
// annoncement
let annoncement = "with regret! Due to an unforseen situation, we can invite only two person."
console.log(annoncement)

// remove guest from list

while (guest.length > 2) {
  const removedGuest = guest.pop();
  if (removedGuest) {
    console.log(`Sorry, ${removedGuest.name}, we can't invite you to dinner.`);
  }
}
for (let i = 0; i < guest.length; i++) {
  let guestList = guest[i];
  console.log(`Dear ${guestList.name} ${guestList.message}`)
}

// remove last two guest 
guest.pop()
guest.pop()
console.log(guest)


if (guest.length === 0) {
  console.log("The guest list is empty.");
} else {
  console.log("There are still guests on the list.");
}

// Q18 favourite places
let myDreamingWorld = ['Makka', 'Madinah', 'Europe', 'America', 'Sidney', 'Arab']
console.log(`\n My Orignal Array`)
console.log(myDreamingWorld)
// temporary alphabatical array
console.log(`\n Alphabetical Order Array`)
console.log([...myDreamingWorld].sort())
// orginal array without order
console.log(`\n Orignal Array after alphabetical order`)
console.log(myDreamingWorld)
// reverse order
// console.log(myDreamingWorld.reverse())
console.log(`\n Reverse Order Array`)
console.log([...myDreamingWorld].reverse())
console.log(`\n Orignal Array`)
console.log(myDreamingWorld)
console.log(`\n Alphabetical Order Array`)
console.log([...myDreamingWorld].sort())
// revers alphabetical order
console.log(`\n Reverse alphabetical Order Array`)
let reversAlphabeticArr = [...myDreamingWorld].sort()
console.log(reversAlphabeticArr.reverse())
// orignal array
console.log(`\n My orignal Array`)
console.log(myDreamingWorld)

// Q19 number of people iviting
let arr1 = guest.length
let arr2 = myDreamingWorld.length
let ans = arr1 + arr2
console.log(` \n Total Invited People`)
console.log(`Attention please: ${ans} are invited for dinner.`)


// Q20 mix data array

let itemArr:{name, message}[] = [
  { name: "vehicle", message: "i like vigo." },
  { name: "vehicle", message: "i have mehran" },
  { name: "mountain", message: "pakistan has K2." },
  { name: "food", message: "i like meat" }

]
console.log(`\n My Item List`)
for(let i=0; i<itemArr.length; i++){
  let item=itemArr[i]
  console.log(`My items: ${item.name}, ${item.message}`)
}

// Q21 object
let myData={
  name:"Allah rakkha",
  age:40,
  gender:"male",
  profession: "teacher"
}
console.log(`\n My Bi Data Object`)
console.log(myData)

// Q22 Array index error 
let fruit=['apple','banana','mango','orange','guava']
let fruitIndex=fruit[6]
console.log(`\n wrong array index `)
if(fruit[3]==="mango"){
  console.log("correct index.")
}
else{
  console.log(`Attention!!! wrong idex.`)
}
console.log(`Wrong index define: ${fruit[6]}`)

// Q23  conditional test
// Condition 1
let student1 = 'Allah Rakkha';
console.log("Is student == 'Allah Rakkha'? I predict True.")
console.log(`\n Condition 1 `)
console.log(student1 == 'Allah Rakkha')

// condition 2
let student2 = 'Raza';
console.log("Is student == 'Allah Rakkha'? I predict False.")
console.log(`\n Condition 2 `)
console.log(student2 == 'Allah Rakkha')

// condition 3
let age1 = 40;
console.log("Is age == '40'? I predict True.")
console.log(`\n Condition 3 `)
console.log(age1 == 40)

// condition 4
let age2 = 40;
console.log("Is age < '40'? I predict False.")
console.log(`\n Condition 4 `)
console.log(age2 < 40)
let isRaining = true;
let heavyRaining = false;
let fruit2 = 'apple';
let city = 'New York';
console.log(`\n Condition 5 `)
console.log("condition 5: Is isRaining == true? I predict True.");
console.log(isRaining == true);
console.log(`\n Condition 6 `)
console.log("condition 6: Is fruit != 'banana'? I predict True.");
console.log(fruit2 != 'banana');
console.log(`\n Condition 7 `)
console.log("condition 7: Is city === 'New York'? I predict True.");
console.log(city === 'New York');
console.log(`\n Condition 8 `)
console.log("condition 8: Is isRaining == isRainin? I predict true.");
console.log(isRaining == isRaining );
console.log(`\n Condition 9 `)
console.log("condition 9: Is fruit === 'orange'? I predict False.");
console.log(fruit2 === 'orange');
console.log(`\n Condition 10 `)
console.log("condition 10: Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles');

