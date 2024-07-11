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
console.log("i\ti^2\ti^3"); // Print the table header
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
    console.log(`${i} is a odd number`);
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers (A prime number can only be divided evenly (with no remainder) by 1 and itself.)
// let count = 0;
// // for (let i = 0; i <= 100; i++) {
//   for(let j = 1; j < i; j++ ) {
//     if(j%i === 0) {
//         count++
//     }
//     console.log(`${i} is a prime number`);
//   }
// }

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

// const redstring = red.toString.padStart(2, "0");
// const greenstring = green.toString.padStart(2, "0");
// const bluestring = blue.toString.padStart(2, "0");

let rgbcolor = [red, green, blue];

console.log(`rgb(${rgbcolor})`);
