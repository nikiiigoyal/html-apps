// Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("Loop finished!");

// let i = 0;
// while(i<= 10) {
//     console.log(i)
//     i++
// }

// let i= 0;
// do{
//     console.log(i)
//     i++;

// } while(i<=10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// Iterate 0 to n using for loop
let n = 20;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// Write a loop that makes the following pattern using console.log():

for (let i = 0; i <= 7; i++) {
  let pattern = "#".repeat(i);
  console.log(i, pattern);
}

// Use loop to print the following pattern:

for (let i = 0; i <= 10; i++) {
  let result = i * i;
  console.log(`${i} * ${i} = ${result}`);
}

// Using loop print the following pattern
console.log("i i^2 i^3"); // Print the table header
for (let i = 0; i <= 10; i++) {
  let result = i * i * i;
  console.log(`${i} * ${i} * ${i}= ${result}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is a even number`);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log();
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers (A prime number can only be divided evenly (with no remainder) by 1 and itself.)

let count = 0;
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (j % i === 0) {
      isPrime = false;
      break;
    }
    if (isPrime) count++;
    console.log(count);
  }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
  console.log("sum is ", sum);
}

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let Evensum = 0;
let Oddsum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    Evensum += i;
  } else {
    Oddsum += i;
  }
}
const result = [Evensum, Oddsum];
console.log(result);

// Develop a small script which generate array of 5 random numbers

const randomNumbers = Math.floor(Math.random() * 5);
console.log(randomNumbers);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

// Develop a small script which generate a six characters random id:

const char = "abcdefghijklmnopqrstuvwxyz123456789";
let id = "";

for (let i = 0; i < 6; i++) {
  const random = Math.floor(Math.random() * char.length);
  id = char[random] + id;
}
console.log(char, id);

// Write a script which generates a random hexadecimal number.

const characters = "ABCDEabcdefF12345";
let hexadecimal = "";

for (let i = 0; i < 6; i++) {
  const randomid = Math.floor(Math.random() * characters.length);
  hexadecimal = characters[randomid] + hexadecimal;
}
console.log(`#${hexadecimal}`);

// Write a script which generates a random rgb color number.

const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
4;

// const redstring = red.toString.padStart(2, "0");
// const greenstring = green.toString.padStart(2, "0");
// const bluestring = blue.toString.padStart(2, "0");

let rgbcolor = [red, green, blue];

console.log(`rgb(${rgbcolor})`);

//Using the above countries array, create the following new array.

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// const newCountriesArr = [];
// const countriesLength = [];
// for (let i = 0; i < countries.length; i++) {
//   const countryLength = countries[i].length;
//   countriesLength.push(countryLength);
//   newCountriesArr.push(countries[i].toUpperCase());
// }
// 6
const formattedCountriesArray = [];
for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const firstThreeChars = country.slice(0, 3);
  const charsToUpperCase = firstThreeChars.toUpperCase();
  const countryLength = country.length;
  formattedCountriesArray.push([country, charsToUpperCase, countryLength]);
}
console.log(formattedCountriesArray);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

const countriesWithLAnd = [];
for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  if (country.includes("land")) {
    countriesWithLAnd.push(country);
  }
}
if (countriesWithLAnd.length > 0) {
  console.log(countriesWithLAnd);
} else {
  console.log("All these countries are without land");
}

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

const countriesWithSubString = [];
for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  if (country.includes("ia")) {
    countriesWithSubString.push(country);
  }
}
if (countriesWithSubString.length > 0) {
  console.log(countriesWithSubString);
} else {
  console.log("These are countries ends without ia");
}

// Using the above countries array, find the country containing the biggest number of characters.

let longestCountry = countries[0]; //assuming first country is longest
for (let i = 0; i < countries.length; i++) {
  const currentCountry = countries[i];
  if (currentCountry.length > longestCountry.length) {
    longestCountry = currentCountry;
  }
}
console.log(longestCountry);

// Using the above countries array, find the country containing only 5 characters.
let fiveCharsCOmpany;

for (let i = 0; i < countries.length; i++) {
  const currentCountry = countries[i];
  if (currentCountry.length === 5) {
    fiveCharsCOmpany = currentCountry;
  }
}
console.log(fiveCharsCOmpany);

// Find the longest word in the webTechs array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let longestTech = webTechs[0]; //assuming first tech is longest
for (let i = 0; i < webTechs.length; i++) {
  const currentTechs = webTechs[i];
  if (currentTechs.length > longestTech.length) {
    longestTech = currentTechs;
  }
}
console.log(longestTech);

// Use the webTechs array to create the following array of arrays:

const formattedWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
  const techs = webTechs[i];
  const techslength = techs.length;
  formattedWebTechs.push([techs, techslength]);
}
console.log(formattedWebTechs);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const mernStack = ["MongoDB", "Express", "React", "Node"];
let acronym = " ";
for (let i = 0; i < mernStack.length; i++) {
  const firstChar = mernStack[i][0];

  acronym += firstChar;
}
console.log(acronym);
