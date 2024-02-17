
// Q25 alien color
let alienColour= "green"
if (alienColour==="green"){
  console.log(`\n Alien Colour`)
  console.log("Congratulation! you have got 5 points.")
  }
  if (alienColour!="green"){
    console.log(`\n Alien Colour`)
    console.log("Alas! you donot have got 5 points.")
  }

  if (alienColour==="red"){
    console.log(`\n Alien Colour`)
    console.log("Alas! you donot have got 5 points.")
  }
// Q26
const alienColour2= "green"
if(alienColour2=== "green"){
    console.log(`\n Q26 Alien Color 2 `)
    console.log("Good! you have got 5 point for shooting alien.")
}
else{
    console.log("Wow! you have got 10 point.")
}

const alien_Colour:string = "red";
if(alien_Colour === "green"){
    console.log(`\n Q26 Alien Color 2 `)
    console.log("Good! you have got 5 point for shooting alien.")
}
else{
    console.log("Wow! you have got 10 point.")
}


// Q27 color 3
// Green color
let ColorGreenAlien= "green"
if (ColorGreenAlien==="green"){
  console.log(`\n Q27 Color Green`)
  console.log(`GREEN COLOR: "You have go 5 points"`)
} 
else if(ColorGreenAlien==="yelllow"){
  console.log("you have got 10 point.")
}
else if(ColorGreenAlien==="red"){
  console.log("you have got 15 point.")
}
// Yellow Color
let ColorGreenAlien2= "yellow"
if (ColorGreenAlien2==="green"){
  console.log(`\n Color yellow`)
  console.log("You have go 5 points")
} 
else if(ColorGreenAlien2==="yellow"){
  console.log(`YELLOW COLOR: "you have got 10 point."`)
}
else if(ColorGreenAlien2==="red"){
  console.log("you have got 15 point.")
}
// Red Color
let ColorGreenAlien3= "red"
if (ColorGreenAlien3==="green"){
  console.log(`\n Color Yellow`)
  console.log("You have go 5 points")
} 
else if(ColorGreenAlien3==="yelllow"){
  console.log("you have got 10 point.")
}
else if(ColorGreenAlien3==="red"){
  console.log(`RED COLOR: "you have got 15 point."`)
}

// Q28 age verible if else
let age =5
if (age<=2){
  console.log(`\n The person is BABY of 2 years old.`)
}
else if(age >=2 && age <=4){
  console.log(`\n The person is TODDLER of age less than 4 years.`)
}
else if(age >=4 && age <=13){
  console.log(`\n The person is KID of age less than 13 years.`)
}
else if(age >=13 && age <=20){
  console.log(`\n The person is TEENAGER of age less than 13 years.`)
}
else if(age >=20 && age <=65){
  console.log(`\n The person is ADULT of age less than 65 years.`)
}
else if(age >=65 ){
  console.log(`\n The person is ELDER of age less tan 65 years.`)
}

// 29 fruit Array
let favorite_fruit_Array=['Apple','Banana','Mango']
if(favorite_fruit_Array.includes(`Apple`)){
  console.log(`I like banana`)
}


// Array of favorite fruits
const favorite_fruits: string[] = ["banana", "apple", "mango"];

// Check for specific fruits in the array
if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
}

if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}

// 30 Greetin array
type Person={name, message}
let greeting:Person[] =[
  {name:'Admin', message:'Hello Admin! Would you like to see status?'},
  {name:'Ali', message:'Hello Ali! You are welcome'},
  {name:'Raza', message:'Hello Raza! You are welcome'},
]
for(let i=0; i<greeting.length; i++){
  const result=greeting[i];
  console.log(result);
}
//Q31

favorite_fruit_Array.pop()
favorite_fruit_Array.pop()
favorite_fruit_Array.pop()
console.log(favorite_fruit_Array)
if(favorite_fruit_Array.length===0){
  console.log(`we need to find more users.`)
}







