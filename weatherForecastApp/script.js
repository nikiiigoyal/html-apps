const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const list = document.querySelector("#cities");
const button = document.getElementById("submit-btn");
const container = document.querySelector("#ajax-container");
const sideBar = document.querySelector("#sidebar");
const weatherApi = "https://goweather.herokuapp.com/weather/Curitiba";

// add event listener
form.addEventListener("submit", function (event) {
  event.preventDefault();
  getWeatherData();
});
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
      addRecentSearch(inputValue);
      displayRecentSearches();
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // Here you would typically show an error message to the user
    }
  }
}
// function to display the data we got
function displayWeather(city, description, temperature, wind) {
  const iconClass = getWeatherIcon(description);
  const li = document.createElement("li");
  li.innerHTML = `
        <h1 class="city-name">${city}</h1>
         <div class="city-temp">${temperature}</div>
         <i class="${iconClass} city-icon"></i>
         <figcaption>${description}</figcaption>
         <div>Wind: ${wind}</div>
       `;

  list.appendChild(li);

  if (!container.contains(list)) {
    container.appendChild(list);
  }
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
//function to get recent searches
function getRecentSearches() {
  return JSON.parse(localStorage.getItem("recentSearches")) || [];
}

//function to store data in a local storage

function addRecentSearch(city) {
  let searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
  searches = searches.filter((item) => item !== city);
  searches.unshift(city);
  searches = searches.slice(0, 4);
  localStorage.setItem("recentSearches", JSON.stringify(searches));
}
//function to display recent searches
function displayRecentSearches() {
  const searches = getRecentSearches();
  const sideBarList = document.createElement("ul");
  sideBarList.classList.add("recent-searches");

  searches.forEach((city) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <span class = "city-name">${city}</span>`;
    sideBarList.appendChild(li);
  });
  sideBar.appendChild(sideBarList);
  console.log(sideBar);
}
