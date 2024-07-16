// EXCERCISE 1
// Declare a function fullName and it print out your full name.
function fullName() {
  const firstName = "Nikita";
  const lastName = "Goyal";
  const full = `${firstName} ${lastName}`;
  return full;
}
console.log(fullName());

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
  let name = `${firstName} ${lastName}`;
  return name;
}
console.log(fullName("NIkita", "Goyal"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log(addNumbers(2500, 850));
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaOfRectangle(50, 50));
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  const perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(20, 30));
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  const volume = length * width * height;
  return volume;
}
console.log(volumeOfRectPrism(10, 20, 30));
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(5));
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r) {
  let circumference = 2 * Math.PI * r;
  return circumference;
}
console.log(circumOfCircle(50));
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mass, volume) {
  const calculateDensity = Math.round(mass / volume);
  return calculateDensity;
}
console.log(density(50, 20));
// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speedOfObject(distance, time) {
  const speed = distance / time;
  return speed;
}
console.log(speedOfObject(500, 20));
// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weightOfSubstance(mass, gravity = 9.81) {
  const weight = mass * gravity + "N";
  return weight;
}
console.log(weightOfSubstance(15));
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC) {
  const calculate = (oC * 9) / 5 + 32 + "F";
  return calculate;
}
console.log(convertCelsiusToFahrenheit(10));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function bodyMassIndex(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log(`${bmi} person is underweight`);
  } else if ((bmi = 18.5 || bmi < 24.9)) {
    console.log(`${bmi} person is Normal weight`);
  } else if ((bmi = 25 || bmi < 30)) {
    console.log(`${bmi} person is overweight`);
  } else {
    console.log(`${bmi} person is obese`);
  }
}
console.log(bodyMassIndex(500, 100));
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  if (month === "december" || month === "january" || month === "february") {
    console.log(`${month} is winter Season`);
  } else if (month === "march" || month === "april" || month === "may") {
    console.log(`${month} is spring Season`);
  } else if (month === "june" || month === "july" || month === "august") {
    console.log(`${month} is summer Season`);
  } else if (
    month === "september" ||
    month === "october" ||
    month === "november"
  ) {
    console.log(`${month} is autumn Season`);
  } else {
    console.log("Invalid Month");
  }
}

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(num1, num2, num3) {
  let max = num3;
  if (num1 > max) {
    max = num1;
  } else if (num2 > max) {
    max = num2;
  }
  return max;
}
console.log(findMax(100, 10, 5));
// 10
// console.log(findMax(0, -10, -2))
// 0

// Exercises: Level 2

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, x, y) {
  let solution = a * x + b * y + c;
  return solution;
}
console.log(solveLinEquation(2, 8, 7, 5, 6));
// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a, b, c) {
  let calculation = b * b - 4 * a * c;
  // two answers expected
  let solution1 = ((-b + Math.sqrt(calculation)) / 2) * a;
  let solution2 = ((-b - Math.sqrt(calculation)) / 2) * a;

  // Determine the nature of the solutions based on the discriminant
  let solutions;
  if (calculation > 0) {
    solutions = `The equation has two real solutions: x1 = ${solution1} and x2 = ${solution2}`;
  } else if (calculation === 0) {
    solutions = `The equation has a repeated real solution: x = ${solution1}`;
  } else {
    solutions = `The equation has two complex solutions: x1 = ${solution1} and x2 = ${solution2}`;
  }
  return solutions;
}

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    //loop to run over all elements of array
    console.log(arr[i]);
  }
}
const numbers = [2, 5, 6, 8, 7];
console.log(printArray(numbers));
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const months = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const formattedDate = `${date}/${months}/${year} ${hours}:${minutes}`;
  return formattedDate;
}
console.log(showDateTime());
// showDateTime()
// 08/01/2020 04:08

// Declare a function name swapValues. This function swaps value of x to y.

function swapValues(x, y) {
  let swapX = y;
  y = x;
  x = swapX;
}
let a = 3;
let b = 4;

console.log("Before swap:", a, b); // Output: Before swap: 3 4

swapValues(a, b);

console.log("After swap:", a, b); // Output: After swap: 4 3
//console.log(swapValues(a, 5)); // x = 5, y = 4
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr) {
  // let returnedarr;
  for (let i = arr.length; i >= 0; i--) {
    console.log(arr[i]);
    // returnedarr = arr[i];
  }
  //   return returnedarr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
// //[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
// //['C', 'B', 'A']
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const StoreArray = [];
function capitalizeArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let capitalizedWord = arr[i].toUpperCase();
    StoreArray.push(capitalizedWord);
  }
  return StoreArray;
}
const names = ["niki", "chiri", "nihsi"];
console.log(capitalizeArray(names));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
  const items = [];
  items.push(item);
  return items;
}
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an

function removeItem(index) {
  let array = [2, 4, 5, 5];
  let firstArray = array.slice(0, index);
  let secondArray = array.slice(index + 1);
  let newArray = firstArray.concat(secondArray);
}

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
let sum = 0;
function sumOfNumbers(starting, ending) {
  for (let i = starting; i <= ending; i++) {
    sum = i + sum;
  }
  //loop to starting and ending number
  return sum;
}
console.log(sumOfNumbers(20, 50));
// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(starting, ending) {
  for (let i = starting; i <= ending; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumOfOdds(10, 20));

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEvens(starting, ending) {
  for (let i = starting; i <= ending; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumOfEvens(10, 20));
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
let evenCount = 0;
let oddCount = 0;
function evensAndOdds(number) {
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      evenCount++;
    } else if (i % 2 !== 0) {
      oddCount++;
    }
  }
  return { evenCount, oddCount };
}
console.log(evensAndOdds(100));
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArguments() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}
console.log(sumOfArguments(1, 2, 3, 4, 8, 3));
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// Writ a function which generates a randomUserIp.
function generaterandomUserIp() {
  const parts = [];
  for (let i = 0; i < 4; i++) {
    const randomIP = Math.floor(Math.random() * 256);
    parts.push(randomIP);
  }
  return parts.join(".");
}
console.log(generaterandomUserIp());
// Write a function which generates a randomMacAddress

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const characters = "ABCDEabcdefF12345";
let hexadecimal = "";
function randomHexaNumberGenerator() {
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    hexadecimal += characters[randomNumber];
  }
  return `#${hexadecimal}`;
}
console.log(randomHexaNumberGenerator());
// '#ee33df'
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
let userId = "";
function userIdGenerator() {
  for (let i = 0; i < 7; i++) {
    const randomNumber = Math.floor(Math.random() * char.length);
    userId += char[randomNumber];
  }
  return userId;
}
console.log(userIdGenerator());
// 41XTDbE
// //

//EXCERCIESE 3
//Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser() {}
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '

//Write a function name rgbColorGenerator and it generates rgb colors.
// function rgbColor() {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   return `rgb(${red},${green},${blue})`;
// }
// console.log(rgbColor());
//rgb(125,244,255)

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(no) {
  const rgbColor = [];

  for (let i = 0; i < no; i++) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let formatted = `rgb(${red},${green},${blue})`;
    rgbColor.push(formatted);
  }
  return rgbColor;
}
console.log(arrayOfRgbColors(6));

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    //get a random index
    let randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the current element with the randomly selected element
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}

console.log(shuffleArray([1, 3, 5, 4]));
// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    alert("input must be a non -negative number");
  }
  //factorial of 0 is 1
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(10));

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value) {
  if (typeof value === null || value === undefined) {
    return true;
  }
}

// Call your function sum, it takes any number of arguments and it returns the sum.
function sums() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total = arguments[i] + total;
  }
  return total;
}

console.log(sums(25, 20, 50));
// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      alert("you can only enter numeric values");
    }
    sum += arr[i];
    count++;
  }
  return sum / count;
}
console.log(average([10, 20, 30]));
// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(array) {
  if (array.length < 5) {
    return "item not found: array has less than 5 elements";
  }
  let modifies = array[4].toUpperCase();
  return modifies;
}

console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));
//   'Not Found'
// Write a function called isPrime, which checks if a number is prime number.

// Write a functions which checks if all items are unique in the array.

// Write a function which checks if all the items of the array are the same data type.

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
