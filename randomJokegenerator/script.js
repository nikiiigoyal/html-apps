const updateJoke = document.querySelector("#updatejoke");
const btn = document.querySelector("#btn");
const basicJokeUrl = "https://v2.jokeapi.dev/joke/Any?amount=10";

btn.addEventListener("click", generateJoke);
generateJoke();

//using async /await
async function generateJoke() {
  const response = await fetch(basicJokeUrl); //Fetch the joke data
  console.log(generateJoke);
  const data = await response.json();
  console.log(data);

  //   updateJoke.textContent = data.jokes[0].joke; //accesing first joke
  //   if (data.jokes && data.jokes.length > 0) {
  updateJoke.textContent = data.jokes[0].joke;
  //   } else {
  //     alert("No new jokes available");
  //     // Optionally display a message to the user indicating no new jokes
  //   }
  // }
}
