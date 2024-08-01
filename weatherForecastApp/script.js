// const form = document.querySelector(".top-banner form");
// const input = document.querySelector(".top-banner input");
// const msg = document.querySelectorAll(".msg");
// const list = document.querySelector("ajax-section .cities");

// async function getWeatherData(latitude, longitude) {
//   const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=GMT`;

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// }
// function displayWeatherData(data) {
//   if (data && data.current) {
//     const temperature = data.current.temperature_2m;
//     const windSpeed = data.current.wind_speed_10m;

//     // Assuming you have elements with these IDs in your HTML
//     document.getElementById(
//       "temperature"
//     ).textContent = `Temperature: ${temperature}°C`;
//     document.getElementById(
//       "wind-speed"
//     ).textContent = `Wind Speed: ${windSpeed} km/h`;
//   } else {
//     console.error("Invalid data structure");
//   }
// }
// async function handleCityClick(latitude, longitude) {
//   const weatherData = await getWeatherData(latitude, longitude);
//   displayWeatherData(weatherData);
// }

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".msg");
const list = document.querySelector(".ajax-section .cities");

async function getWeatherData(city) {
  const apiKey = "YOUR_API_KEY_HERE"; // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

function displayWeatherData(data) {
  const { main, name, sys, weather } = data;
  const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

  const li = document.createElement("li");
  li.classList.add("city");
  const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
            <img class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
  }">
            <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
    `;
  li.innerHTML = markup;
  list.appendChild(li);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const cityName = input.value.trim();

  try {
    const weatherData = await getWeatherData(cityName);
    displayWeatherData(weatherData);
    msg.textContent = "";
  } catch (error) {
    msg.textContent = "Please search for a valid city";
  }

  // Clear input field
  input.value = "";
});
