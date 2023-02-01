//switch mode button

function switchToDark() {
  let darkModeTheme = document.querySelector("body");
  darkModeTheme.classList.toggle("dark");
  if (darkModeTheme.classList.contains("dark")) {
    let switchToggle = document.querySelector("#switch-mode-button");
    switchToggle.innerHTML = `<i class="fa-solid fa-toggle-off"></i>`;
  } else {
    let switchToggle = document.querySelector("#switch-mode-button");
    switchToggle.innerHTML = `<i class="fa-solid fa-toggle-on"></i>`;
  }
}
let toggleOnButton = document.querySelector("#switch-mode-button");
toggleOnButton.addEventListener("click", switchToDark);

function nightMode(hourNow) {
  if (hourNow > 17 || hourNow < 7) {
    let nightTimeTheme = document.querySelector("body");
    nightTimeTheme.classList.add("dark");
    if (nightTimeTheme.classList.contains("dark")) {
      let switchToggle = document.querySelector("#switch-mode-button");
      switchToggle.innerHTML = `<i class="fa-solid fa-toggle-off"></i>`;
    } else {
      let switchToggle = document.querySelector("#switch-mode-button");
      switchToggle.innerHTML = `<i class="fa-solid fa-toggle-on"></i>`;
    }
  }
}

let now = new Date();
let currentHour = now.getHours();
nightMode(currentHour);

//time and date

let date = now.toDateString();
/* not using this time, using last-updated-time
let time = now.toLocaleTimeString();
*/
let todaysDate = document.querySelector("#date");
todaysDate.innerHTML = `${date}`;
//forecast dates//
function displayForecast() {
  let forecastElement = document.querySelector("#forecast-for-each-day");
  let forecastHTML = ``;
  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu"];

  weekdays.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `<div class="row forecastWholeRow">
       <div class="col-2"></div>
       <div class="col-3">
         <div class="nextDay1">
          <h5 class="forecastDate"> </h5>
          <h5 id="weekday-nextday-1"> ${day}</h5>
         </div>
       </div>
       <div class="col-6">
          <div class="nextDay1-weather">
            <h3 class="forecastIcon card-text"><i class="fa-solid fa-sun"></i></h3>
            <h5 class="forecastDegree card-text">24°</h5>
           </div>
         <div class="col-1"></div>
       </div>
     </div>`;
  });
  forecastHTML = forecastHTML + ``;
  forecastElement.innerHTML = forecastHTML;
}
/*
let tomorrow = new Date();
tomorrow.setDate(now.getDate() + 1);
let nextDayOne = document.querySelector("#date-nextday-1");
nextDayOne.innerHTML = `${tomorrow.toLocaleDateString()}`;
let weekdayTomorrow = weekdays[tomorrow.getDay()];
let weekdayNextDay1 = document.querySelector("#weekday-nextday-1");
weekdayNextDay1.innerHTML = `${weekdayTomorrow}`;

let oneDayAfterTomorrow = new Date();
oneDayAfterTomorrow.setDate(now.getDate() + 2);
let nextDayTwo = document.querySelector("#date-nextday-2");
nextDayTwo.innerHTML = `${oneDayAfterTomorrow.toLocaleDateString()}`;
let weekdayTomorrow2 = weekdays[oneDayAfterTomorrow.getDay()];
let weekdayNextDay2 = document.querySelector("#weekday-nextday-2");
weekdayNextDay2.innerHTML = `${weekdayTomorrow2}`;

let twoDayAfterTomorrow = new Date();
twoDayAfterTomorrow.setDate(now.getDate() + 3);
let nextDayThree = document.querySelector("#date-nextday-3");
nextDayThree.innerHTML = `${twoDayAfterTomorrow.toLocaleDateString()}`;
let weekdayTomorrow3 = weekdays[twoDayAfterTomorrow.getDay()];
let weekdayNextDay3 = document.querySelector("#weekday-nextday-3");
weekdayNextDay3.innerHTML = `${weekdayTomorrow3}`;

let threeDayAfterTomorrow = new Date();
threeDayAfterTomorrow.setDate(now.getDate() + 4);
let nextDayFour = document.querySelector("#date-nextday-4");
nextDayFour.innerHTML = `${threeDayAfterTomorrow.toLocaleDateString()}`;
let weekdayTomorrow4 = weekdays[threeDayAfterTomorrow.getDay()];
let weekdayNextDay4 = document.querySelector("#weekday-nextday-4");
weekdayNextDay4.innerHTML = `${weekdayTomorrow4}`;

let fourDayAfterTomorrow = new Date();
fourDayAfterTomorrow.setDate(now.getDate() + 5);
let nextDayFive = document.querySelector("#date-nextday-5");
nextDayFive.innerHTML = `${fourDayAfterTomorrow.toLocaleDateString()}`;
let weekdayTomorrow5 = weekdays[fourDayAfterTomorrow.getDay()];
let weekdayNextDay5 = document.querySelector("#weekday-nextday-5");
weekdayNextDay5.innerHTML = `${weekdayTomorrow5}`;
*/
//time

//
//create global variables for the 3 functions 1.default 2.search form 3.current location
let displayCityName = document.querySelector("#user-inputed-city");
let weatherIcon = document.querySelector("#weatherNowIcon");
let weatherDetailLine01 = document.querySelector("#weatherDetail-1");
let weatherDetailLine02 = document.querySelector("#weatherDetail-2");
let weatherDetailLine03 = document.querySelector("#weatherDetail-3");
let lowestDegree = document.querySelector("#lowest-degree");
let highestDegree = document.querySelector("#highest-degree");
let weatherDetailLine04 = document.querySelector("#feels-like-degree");

// 1.Default city function (when first opening the website)

function showWeatherOfDefaultCity(response) {
  displayCityName.innerHTML = `${response.data.name}`;
  //for reference for degree settings(see the global variable) at the bottom of page
  celsius = `${Math.round(response.data.main.temp)}`;
  highestCelsius = `${Math.round(response.data.main.temp_max)}`;
  lowestCelsius = `${Math.round(response.data.main.temp_min)}`;
  feelsLikeCelsius = `${Math.round(response.data.main.feels_like)}`;
  //
  let celsiusDegree = document.querySelector("#degree-number");
  celsiusDegree.innerHTML = `${celsius}`;

  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", `icon-id-${response.data.weather[0].icon}`);
  weatherDetailLine01.innerHTML = `${response.data.weather[0].description}`;
  weatherDetailLine02.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  weatherDetailLine03.innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )}mps`;
  lowestDegree.innerHTML = `Lowest: ${lowestCelsius}°`;
  highestDegree.innerHTML = `Highest: ${highestCelsius}°`;
  weatherDetailLine04.innerHTML = `Feels Like: ${feelsLikeCelsius}°`;

  let updatedTime = new Date(response.data.dt * 1000);
  let formattedUpdatedTime = updatedTime.toLocaleTimeString();
  let timeNow = document.querySelector("#last-updated-time");
  timeNow.innerHTML = `${formattedUpdatedTime}`;
}

let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
let defaultCity = "Hong Kong";
/*let imperialUnit = "units=imperial";*/
let metricUnit = "units=metric";
let defaultCityApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&${metricUnit}`;
axios.get(defaultCityApiUrl).then(showWeatherOfDefaultCity);
//

// 2. allow user to search for city as an input in the form
function showWeather(response) {
  //because celsius sign is a default active unit, and fahrenheit is not, "active" here means bold and bigger

  celsiusDegreeSign.classList.add("active");
  fahrenheitDegreeSign.classList.remove("active");
  //
  displayCityName.innerHTML = `${response.data.name}`;
  //for reference for degree settings(see the global variable) at the bottom of page
  celsius = `${Math.round(response.data.main.temp)}`;
  highestCelsius = `${Math.round(response.data.main.temp_max)}`;
  lowestCelsius = `${Math.round(response.data.main.temp_min)}`;
  feelsLikeCelsius = `${Math.round(response.data.main.feels_like)}`;
  //
  let celsiusDegreeOfUserSearch = document.querySelector("#degree-number");
  celsiusDegreeOfUserSearch.innerHTML = `${celsius}`;

  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", `icon-id-${response.data.weather[0].icon}`);
  weatherDetailLine01.innerHTML = `${response.data.weather[0].description}`;
  weatherDetailLine02.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  weatherDetailLine03.innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )}mps`;
  lowestDegree.innerHTML = `Lowest: ${lowestCelsius}°`;
  highestDegree.innerHTML = `Highest: ${highestCelsius}°`;
  weatherDetailLine04.innerHTML = `Feels Like: ${feelsLikeCelsius}°`;

  let updatedTime = new Date(response.data.dt * 1000);
  let formattedUpdatedTime = updatedTime.toLocaleTimeString();
  let timeNow = document.querySelector("#last-updated-time");
  timeNow.innerHTML = `${formattedUpdatedTime}`;
}

function showCity(event) {
  event.preventDefault();
  let userEntryCity = document.querySelector("#inputed-city");
  let userEntryCityValue = userEntryCity.value;
  let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  /* let imperialUnit = "units=imperial";*/
  let metricUnit = "units=metric";
  let searchCityApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userEntryCityValue}&appid=${apiKey}&${metricUnit}`;
  axios.get(searchCityApiUrl).then(showWeather);
}

let citySearchForm = document.querySelector("#city-search");
citySearchForm.addEventListener("submit", showCity);

//

// 3. allow user to click current location button
function showWeatherOfUserCurrentLocation(response) {
  //because celsius sign is a default active unit, and fahrenheit is not, "active" here means bold and bigger

  celsiusDegreeSign.classList.add("active");
  fahrenheitDegreeSign.classList.remove("active");
  //
  displayCityName.innerHTML = `${response.data.name}`;
  //for reference for degree settings(see the global variable) at the bottom of page
  celsius = `${Math.round(response.data.main.temp)}`;
  highestCelsius = `${Math.round(response.data.main.temp_max)}`;
  lowestCelsius = `${Math.round(response.data.main.temp_min)}`;
  feelsLikeCelsius = `${Math.round(response.data.main.feels_like)}`;
  //
  let celsiusDegreeOfUserCity = document.querySelector("#degree-number");
  celsiusDegreeOfUserCity.innerHTML = `${celsius}`;
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", `icon-id-${response.data.weather[0].icon}`);
  weatherDetailLine01.innerHTML = `${response.data.weather[0].description}`;
  weatherDetailLine02.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  weatherDetailLine03.innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )}mps`;
  lowestDegree.innerHTML = `Lowest: ${lowestCelsius}°`;
  highestDegree.innerHTML = `Highest: ${highestCelsius}°`;
  weatherDetailLine04.innerHTML = `Feels Like: ${feelsLikeCelsius}°`;

  let updatedTime = new Date(response.data.dt * 1000);
  let formattedUpdatedTime = updatedTime.toLocaleTimeString();
  let timeNow = document.querySelector("#last-updated-time");
  timeNow.innerHTML = `${formattedUpdatedTime}`;
}

function showCurrentLocation(position) {
  let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  /* let imperialUnit = "units=imperial"; */
  let metricUnit = "units=metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let userCityApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&${metricUnit}&appid=${apiKey}`;
  axios.get(userCityApiUrl).then(showWeatherOfUserCurrentLocation);
}

function searchUserLocationWeatherButton(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}

let findCurrentLocationButton = document.querySelector(
  ".currentLocationButton"
);
findCurrentLocationButton.addEventListener(
  "click",
  searchUserLocationWeatherButton
);
//
displayForecast();
//degree settings

let celsius = null;
let highestCelsius = null;
let lowestCelsius = null;
let feelsLikeCelsius = null;
let celsiusDegreeSign = document.querySelector("#celsius");
let fahrenheitDegreeSign = document.querySelector("#fahrenheit");

function convertToFahrenheit(event) {
  event.preventDefault();

  celsiusDegreeSign.classList.remove("active");
  fahrenheitDegreeSign.classList.add("active");

  let fahrenheitDegreeNumber = document.querySelector("#degree-number");
  let fahrenheit = Math.round((celsius * 9) / 5 + 32);
  fahrenheitDegreeNumber.innerHTML = `${fahrenheit}`;

  let fahrenheitHighestDegree = document.querySelector("#highest-degree");
  let highestFahrenheit = Math.round((highestCelsius * 9) / 5 + 32);
  fahrenheitHighestDegree.innerHTML = `Highest: ${highestFahrenheit}°`;

  let fahrenheitLowestDegree = document.querySelector("#lowest-degree");
  let lowestFahrenheit = Math.round((lowestCelsius * 9) / 5 + 32);
  fahrenheitLowestDegree.innerHTML = `Lowest: ${lowestFahrenheit}°`;

  let fahrenheitFeelsLikeDegree = document.querySelector("#feels-like-degree");
  let feelsLikeFahrenheit = Math.round((feelsLikeCelsius * 9) / 5 + 32);
  fahrenheitFeelsLikeDegree.innerHTML = `Feels Like: ${feelsLikeFahrenheit}°`;
}

let fahrenheitConvertion = document.querySelector("#fahrenheit");
fahrenheitConvertion.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();

  celsiusDegreeSign.classList.add("active");
  fahrenheitDegreeSign.classList.remove("active");

  let celsiusDegreeNumber = document.querySelector("#degree-number");
  celsiusDegreeNumber.innerHTML = `${celsius}`;

  let celsiusHighestDegree = document.querySelector("#highest-degree");
  celsiusHighestDegree.innerHTML = `Highest: ${highestCelsius}°`;

  let celsiusLowestDegree = document.querySelector("#lowest-degree");
  celsiusLowestDegree.innerHTML = `Lowest: ${lowestCelsius}°`;

  let celsiusFeelsLikeDegree = document.querySelector("#feels-like-degree");
  celsiusFeelsLikeDegree.innerHTML = `Feels Like: ${feelsLikeCelsius}°`;
}
let celsiusConvertion = document.querySelector("#celsius");
celsiusConvertion.addEventListener("click", convertToCelsius);
