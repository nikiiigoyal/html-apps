const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const list = document.querySelector("#cities");
const button = document.getElementById("submit-btn");
const container = document.querySelector("#ajax-container");
const sideBar = document.querySelector("#sidebar");
const weatherApi = "https://goweather.herokuapp.com/weather/Curitiba";

getRecentSearches();

// add event listener
form.addEventListener("submit", function (event) {
  event.preventDefault();
  getWeatherData();
});

let recentSearches = [];
// function to get data from Api
async function getWeatherData() {
  const inputValue = input.value;
  console.log(inputValue);
  if (!inputValue) {
    alert("please enter a valid city name");
    return;
  }

  if (inputValue) {
    const url = `https://goweather.herokuapp.com/weather/${inputValue}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      const description = data.description;
      const temperature = data.temperature;
      const wind = data.wind;

      console.log(description);
      console.log(temperature);
      console.log(wind);

      displayWeather(inputValue, description, temperature, wind);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // Here you would typically show an error message to the user
    }
  }
}
// function to display the data we got
function displayWeather(city, description, temperature, wind) {
  const iconClass = getWeatherIcon(description);
  const listEl = document.createElement("li");
  list.innerHTML = "";
  listEl.innerHTML = `
        <h1 class="city-name">${city}</h1>
         <div class="city-temp">${temperature}</div>
         <i class="${iconClass} city-icon"></i>
         <figcaption>${description}</figcaption>
         <div>Wind: ${wind}</div>
       `;
  list.appendChild(listEl);

  if (!container.contains(list)) {
    container.appendChild(list);
  }
  //Store city and temperature in local storage
  recentSearches = JSON.parse(localStorage.getItem("weatherData")) || [];
  const weatherData = { city, temperature };
  let isCityAvailable = false;
  for (let i = 0; i < recentSearches.length; i++) {
    const cityName = recentSearches[i].city;
    if (cityName !== city) {
      isCityAvailable = true;
    } else {
      isCityAvailable = false;
    }
  }
  if (!isCityAvailable) {
    recentSearches.push(weatherData);
  }
  localStorage.setItem("weatherData", JSON.stringify(recentSearches));
  // Retrieve stored data (for demonstration purposes)
  getRecentSearches();
}

// function for the icons
function getWeatherIcon(description) {
  const lowercaseDesc = description.toLowerCase();
  if (lowercaseDesc.includes("sun") || lowercaseDesc.includes("clear")) {
    return "fas fa-sun";
  } else if (lowercaseDesc.includes("cloud")) {
    return "fas fa-cloud";
  } else if (lowercaseDesc.includes("rain")) {
    return lowercaseDesc.includes("light")
      ? "fas fa-cloud-rain"
      : "fas fa-cloud-showers-heavy";
  } else if (lowercaseDesc.includes("snow")) {
    return "fas fa-snowflake";
  } else if (
    lowercaseDesc.includes("thunder") ||
    lowercaseDesc.includes("storm")
  ) {
    return "fas fa-bolt";
  } else {
    return "fas fa-cloud-sun"; // default icon
  }
}

function getRecentSearches() {
  let recentSearches = JSON.parse(localStorage.getItem("weatherData")) || [];

  sideBar.innerHTML = "";
  sideBar.classList.add("recent-searches");

  for (let i = 0; i < recentSearches.length; i++) {
    let city = recentSearches[i].city;
    let temperature = recentSearches[i].temperature;
    const li = document.createElement("li");
    li.innerHTML = `
      <span class = "city-name">${city}     <strong>${temperature}</strong></span>`;
    console.log("li", li);
    sideBar.appendChild(li);
  }
}
