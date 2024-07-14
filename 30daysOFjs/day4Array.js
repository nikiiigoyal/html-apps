// Declare an empty array;
const emptyArr = [];
// Declare an array with more than 5 number of elements
const names = ["sakshi", "shivali", "swati", "suhani", "sweety", "simran"];
// Find the length of your array
console.log(names.length);
// Get the first item, the middle item and the last item of the array
console.log(names[0]);
console.log(names[2]);
const last = names.length - 1;
console.log(names[last]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["niki", 12, true, 55, 54, "imii"];
console.log(mixedDataTypes.length);
console.log(typeof mixedDataTypes);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log("NUmber of companies: ", itCompanies.length);
// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
const lastComp = itCompanies.length - 1;
console.log(itCompanies[lastComp]);

// // Print out each company

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let companiesString = "";
for (let i = 0; i < itCompanies.length; i++) {
  companiesString += itCompanies[i]; // Add company name
  if (i < itCompanies.length - 1) {
    companiesString += ", "; // Add comma and space *before* next company
  } else {
    // Add "and" before the last company
    companiesString += " and ";
  }
}
console.log(companiesString);

// // Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf("Apple");
if (index === -1) {
  console.log("This company does not exist");
} else {
  console.log("This company exists");
}

// // Filter out companies which have more than one 'o' without the filter method
let companywithouO = [];
let count = 0;
for (let i = 0; i < itCompanies.length; i++) {
  let company = itCompanies[i];
  count = 0; //reset count for each company
  for (let j = 0; j < company.length; j++) {
    if (company[j] === "o") {
      count++;
      break; // Exit inner loop if an "o" is found (company has "o")
    }
  }
  if (count === 0) {
    // Check if there are NO "o"s (count is 0)
    companywithouO.push(company);
  }
}

console.log("companies without o: ", companywithouO);

// Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

// Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(3, 8));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, 4));
// // Slice out the middle IT company or companies from the array
const middleCompnay = Math.floor(itCompanies.length / 2);

console.log(itCompanies.slice(middleCompnay));
// // Remove the first IT company from the array
itCompanies.shift();
console.log("removing first company: ", itCompanies);
// // Remove the middle IT company or companies from the array

// // Remove the last IT company from the array
itCompanies.pop();
console.log("removing last company: ", itCompanies);
// // Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log("removing all company: ", itCompanies);

// // Exercise: Level 2

// // First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.split(" ");
console.log(words);
console.log(words.length);

// // In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// // add 'Meat' in the beginning of your shopping cart if it has not been already added
const hasMeat = shoppingCart.includes("Meat");
if (!hasMeat) {
  shoppingCart.unshift("Meat");
  console.log("Meat is included: ", shoppingCart);
}

// // add Sugar at the end of you shopping cart if it has not been already added

const hasSugar = shoppingCart.includes("Sugar");
if (!hasSugar) {
  shoppingCart.push("Suger");
  console.log("Sugar is included: ", shoppingCart);
}

// // remove 'Honey' if you are allergic to honey
const userInput = propmt("are you allergic to honey? (yes/no");
if (userInput === "yes") {
  const indexOFHoney = shoppingCart.indexOf("Honey");
  shoppingCart.splice(indexOFHoney, 1);
}
console.log("after adding: ", shoppingCart);
// // modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);
// // In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

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
const countryToAdd = "Ethiopia";
const countryExist = countries.includes(countryToAdd);
if (!countryExist) {
  countries.unshift(countryToAdd);
  console.log(`${countryToAdd.toUpperCase()} added (uppercase)`);
} else {
  //   countryToAdd.toUpperCase();
  console.log(`${countryToAdd.toUpperCase()} modified (uppercase)`);
}
console.log(countries);
// // In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const tectToAdd = "Sass";
const techExist = webTechs.includes(tectToAdd);
if (!techExist) {
  webTechs.unshift(tectToAdd);
  console.log(webTechs);
} else {
  console.log("Sass is a CSS process");
}
// // Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
// // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// // Exercise: Level 3
// // The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// // Sort the array and find the min and max age
ages.sort();
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`${minAge} and ${maxAge}`);
// // Find the median age(one middle item or two middle items divided by two)

// // Find the average age(all items divided by number of items)

// // Find the range of the ages(max minus min)
const range = maxAge - minAge;
console.log(range);
// // Compare the value of (min - average) and (max - average), use abs() method
//1.Slice the first ten countries from the countries array
const sliced = countries.slice(0, 10);
console.log(sliced);
// // Find the middle country(ies) in the countries array

const middleIndex = Math.round(countries.length / 2);
const middle = countries[middleIndex];
console.log(middle);
// // Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const firstHalf = countries.slice(0, middleIndex + 1);
const secondHalf = countries.splice(middleIndex + 1);
console.log(firstHalf, secondHalf);

// This is a fruit array , reverse the order using loop without using a reverse method.

let fruitArray = ["banana", "orange", "mango", "lemon"];
let reversedArray = [];
for (let i = fruitArray.length - 1; i >= 0; i++) {
  reversedArray.push(fruitArray);
}
console.log(reversedArray);
