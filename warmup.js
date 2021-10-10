let today = new Date();
let birthday = new Date(1999, 6, 9);
let age = parseInt(Math.abs(today - birthday) / 1000 / 60 / 60 / 24 / 30 / 12);
console.log("Your age is " + age);
// -----------------
let length = 5;
let width = 8;
console.log("The area of the rectangle is: " + length * width);
// -----------------
let celsius = 37;
let fah = celsius * (9 / 5) + 32;
console.log(fah + "°F is " + celsius + "°C");
// -------------
