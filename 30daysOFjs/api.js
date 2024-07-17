console.log("hello");
// const countriesAPI = 'https://restcountries.com/v2/all'

// Exercises: Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.

const countriesAPI = "https://restcountries.com/v2/all";
countries();

async function countries() {
  let response = await fetch(countriesAPI);

  let data = await response.json();
  console.log(data);
  //   for (let i = 0; i < data.length; i++) {
  //     const country = data[i];
  // Assuming we want data for the first country in the response
  const countryData = data[0];

  const { name, capital, languages, population, area } = countryData;
  console.log(`
      name: ${name}
      Capital: ${capital}
      Languages: ${languages}
      Population: ${population}
      Area: ${area} sq km`);
}

// Exercises: Level 2
// Print out all the cat names in to catNames variable.
// const catsAPI = "https://api.thecatapi.com/v1/breeds";
// async function countries() {
//   let response = await fetch(catsAPI);
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
// }

// Exercises: Level 3
// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.
