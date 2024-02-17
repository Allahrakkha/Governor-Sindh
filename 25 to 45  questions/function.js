// Q36 Function
function shirt(size, message) {
    console.log("i bought ".concat(size, " shirt with printed \"").concat(message, "\""));
}
shirt('XL', "Hello World");
// Q37
// function default value and message
console.log("\n Function default Parameter");
function fashion(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "i love typescript."; }
    console.log("I order ".concat(size, " sized shirt with printed message ").concat(message));
}
fashion();
fashion("medium");
fashion("small", "I am software Engineer");
// Q38
// function default value and message
console.log("\n Function default Parameter");
function cities(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("City ".concat(city, " is in ").concat(country));
}
cities();
cities("Lahore");
cities("Makka", "Sauodia Arabia");
// Q39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var cityCountry = [
    { city: "Lahore", country: "Pakistan" },
    { city: "New York", country: "USA" },
    { city: "Tokyo", country: "Japan" }
];
for (var i = 0; i < cityCountry.length; i++) {
    var cityName = cityCountry[i];
    console.log("\"".concat(cityName.city, ", ").concat(cityName.country, "\""));
}
// Q40 album
// Function to create an album object
function artist(name, album, track) {
    return {
        name: name,
        album: album,
        track: track,
    };
}
var album1 = artist("Lata", "Volume1", 1);
var album2 = artist("Mukaish", "Volume1", 1);
var album3 = artist("Iqbal", "Volume1");
console.log(album1);
console.log(album2);
console.log(album3);
// Q41 magician
function show_magicians(name) {
    var magician_names = ['David', 'Thomas', 'Harward'];
    console.log("\n magician_names");
    console.log(magician_names);
}
show_magicians(['David', 'Thomas', 'Harward']);
// Function to show magicians' names
function show_magicians2(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magiciansArray = ["David", "Houdini", "Derren", "Teller"];
show_magicians2(magiciansArray);
// Q42
function make_great(city, country) {
    return "".concat(city, ", ").concat(country);
}
var magiciansNames = [
    { name: "Lahore", message: "Pakistan" },
    { name: "New York", message: "USA" },
    { name: "Tokyo", message: "Japan" }
];
for (var i = 0; i < cityCountry.length; i++) {
    var cityName = cityCountry[i];
    console.log("\"".concat(cityName.city, ", ").concat(cityName.country, "\""));
}
// Q43
function make_great3(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great ".concat(magicians[i]));
    }
    return greatMagicians;
}
function show_magicians3(magicians) {
    console.log("\n Thre great magician");
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicians = ["John", "Alice", "David"];
var greatMagicians = make_great3(magicians);
show_magicians3(greatMagicians);
// Q 44
// Function for ingredient 
function sandwicth() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("your sandwich is without ingredient.");
    }
    else {
        console.log('\n bread + ' + items.join(' + ') + ' + Bread');
    }
}
sandwicth('Mayo', 'chicken', 'catchup');
sandwicth('Mayo', 'chicken');
sandwicth();
//   Q45
// Function car object
function car(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var cardata = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        var key = Object.keys(option)[0];
        cardata[key] = option[key];
    }
    return cardata;
}
var car1 = car('Toyota', 'Camry', { color: 'Blue' }, { year: 2022 }, { gear: 'auto' });
var car2 = car('Tesla', 'Model S', { color: 'Red' }, { autopilot: true });
console.log(car1);
console.log(car2);
