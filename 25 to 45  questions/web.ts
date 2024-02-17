// Q32
// List of current usernames
const current_users: string[] = ["Ali", "Raza", "Sara", "Ubaid", "Hassan"];

// List of new usernames
let current_teachers=['huma','saba','zoha']
let new_teachers=['huma','ruba','huda']
for(let i=0; i<current_teachers.length; i++){
    const staff=new_teachers[i]
    if(current_teachers.includes(staff)){
        console.log(`"Teacher already available" `)
        console.log(`Teacher ${staff} is already avaiable.`)
    }else{
        console.log(`\n "Teacher not avaiable"`)
        console.log(`Teacher ${staff} is not already avaiable.`) 
    }
}
// Q33
let num_arr=[1,2,3,4,5]
console.log(`Ordinal Numbers`)
for(let i=0; i<num_arr.length; i++){
        let num_end:string
    if(num_arr[i]=== 1){
num_end= "st"
    }
    else if(num_arr[i]=== 2){
num_end= "nd"
    }
    else if(num_arr[i]=== 3){
num_end= "rd"
    }
    else{
        num_end = "th"
    }
    console.log(`${num_arr[i]}${num_end}`)
}

// Q34 Pizza Array
let pizza=['chinesepizza','chickenpizza','pepperoni']
for(let i=0; i<pizza.length; i++){
    console.log(` i like ${pizza[i]}`)
}
console.log("Realy i like pizza.")

// Q35 animal array
console.log(`\n Animals Array`)
let animals=['cat','dog','horse']
for(let i=0; i<animals.length; i++){
    console.log(` ${animals[i]} is a great animal.`)
}
console.log(`all animals are faithful.`)

