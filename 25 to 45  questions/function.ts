// Q36 Function
function shirt(size, message) {
    console.log(`i bought ${size} shirt with printed "${message}"`)
}
shirt('XL', "Hello World")


// Q37
// function default value and message
console.log(`\n Function default Parameter`)
function fashion(size: string = "Large", message: string = "i love typescript.") {
    console.log(`I order ${size} sized shirt with printed message ${message}`)
}
fashion()
fashion("medium")
fashion("small", "I am software Engineer")

// Q38
// function default value and message
console.log(`\n Function default Parameter`)
function cities(city: string = "Karachi", country: string = "Pakistan") {
    console.log(`City ${city} is in ${country}`)
}
cities()
cities("Lahore")
cities("Makka", "Sauodia Arabia")

// Q39
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

const cityCountry: { city: string, country: string }[] = [
    { city: "Lahore", country: "Pakistan" },
    { city: "New York", country: "USA" },
    { city: "Tokyo", country: "Japan" }
];
for (let i = 0; i < cityCountry.length; i++) {
    const cityName = cityCountry[i]
    console.log(`"${cityName.city}, ${cityName.country}"`)
}

// Q40 album
// Function to create an album object
function artist(name: string, album: string, track?: number) {
    return {
        name,
        album,
        track,
    }
}
let album1 = artist("Lata", "Volume1", 1)
let album2 = artist("Mukaish", "Volume1", 1)
let album3 = artist("Iqbal", "Volume1")

console.log(album1)
console.log(album2)
console.log(album3)



// Q41 magician
function show_magicians(name: string[]) {
    let magician_names = ['David', 'Thomas', 'Harward']
    console.log(`\n magician_names`)
    console.log(magician_names)
}
show_magicians(['David', 'Thomas', 'Harward'])

// Function to show magicians' names
function show_magicians2(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
const magiciansArray: string[] = ["David", "Houdini", "Derren", "Teller"];
show_magicians2(magiciansArray);


// Q42
function make_great(city: string, country: string): string {
    return `${city}, ${country}`;
}

const magiciansNames: { name: string, message: string }[] = [
    { name: "Lahore", message: "Pakistan" },
    { name: "New York", message: "USA" },
    { name: "Tokyo", message: "Japan" }
];
for (let i = 0; i < cityCountry.length; i++) {
    const cityName = cityCountry[i]
    console.log(`"${cityName.city}, ${cityName.country}"`)
}

// Q43
function make_great3(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`the Great ${magicians[i]}`);
    }

    return greatMagicians;
}

function show_magicians3(magicians: string[]): void {
    console.log(`\n Thre great magician`)
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

const magicians: string[] = ["John", "Alice", "David"];
const greatMagicians = make_great3(magicians);
show_magicians3(greatMagicians);


// Q 44
// Function for ingredient 
function sandwicth(...items: string[]) {
    if (items.length === 0) {
        console.log(`your sandwich is without ingredient.`)
    } else {
        console.log('\n bread + ' + items.join(' + ') + ' + Bread')
    }
}
sandwicth('Mayo', 'chicken', 'catchup')
sandwicth('Mayo', 'chicken')
sandwicth()

//   Q45
// Function car object
function car(manufacturer: string, modelName: string, ...options: any): any {
    const cardata: any = {
        manufacturer,
        modelName,
    };
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const key = Object.keys(option)[0];
        cardata[key] = option[key];
    }

    return cardata;
}
const car1 = car('Toyota', 'Camry', { color: 'Blue' }, { year: 2022 }, {gear:'auto'});
const car2 = car('Tesla', 'Model S', { color: 'Red' }, { autopilot: true });

console.log(car1);
console.log(car2);



