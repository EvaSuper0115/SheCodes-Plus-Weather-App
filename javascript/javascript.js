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

let time = now.toLocaleTimeString();

let todaysDate = document.querySelector("#date");
todaysDate.innerHTML = `${date}`;
//forecast dates//
let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
//time

//

//Default city details(when first opening the website)

function showWeatherOfDefaultCity(response) {
  //efforts of trying to get the time of the destination city(not working)
  /*console.log(response.data.coord.lat);
  console.log(response.data.coord.lon);
  console.log(response.data.dt);
  console.log(response.data.timezone);
  let destinationTimeDifference = response.data.timezone;

  let destinationTime = new Date();
  destinationTime.setDate(now.getDate() + 0.3);
  console.log(destinationTime);
  let destinationTimeNow = destinationTime.toLocaleTimeString();
  console.log(destinationTimeNow);
*/
  //
  let displayDefaultCityName = document.querySelector("#user-inputed-city");
  displayDefaultCityName.innerHTML = `${response.data.name}`;

  let celsiusDegreeOfDefaultCity = document.querySelector("#degree-number");
  celsiusDegreeOfDefaultCity.innerHTML = `${Math.round(
    response.data.main.temp
  )}`;

  let weatherIcon = document.querySelector("#weatherNowIcon");
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", `icon-id-${response.data.weather[0].icon}`);

  let weatherDetailLine01 = document.querySelector("#weatherDetail-1");
  weatherDetailLine01.innerHTML = `${response.data.weather[0].description}`;

  let weatherDetailLine02 = document.querySelector("#weatherDetail-2");
  weatherDetailLine02.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let weatherDetailLine03 = document.querySelector("#weatherDetail-3");
  weatherDetailLine03.innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )}mps`;

  let lowestDegree = document.querySelector("#lowest-degree");
  lowestDegree.innerHTML = `Lowest: ${Math.round(
    response.data.main.temp_min
  )}°`;

  let highestDegree = document.querySelector("#highest-degree");
  highestDegree.innerHTML = `Highest: ${Math.round(
    response.data.main.temp_max
  )}°`;

  let weatherDetailLine04 = document.querySelector("#feels-like-degree");
  weatherDetailLine04.innerHTML = `Feels Like: ${Math.round(
    response.data.main.feels_like
  )}°`;

  let updatedTime = new Date(response.data.dt * 1000);
  let formattedUpdatedTime = updatedTime.toLocaleTimeString();
  let timeNow = document.querySelector("#last-updated-time");
  timeNow.innerHTML = `${formattedUpdatedTime}`;
}

let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
let defaultCity = "Hong Kong";
let imperialUnit = "units=imperial";
let metricUnit = "units=metric";
let defaultCityApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&${metricUnit}`;
axios.get(defaultCityApiUrl).then(showWeatherOfDefaultCity);
//

//allow user to search for city as an input in the form
function showWeather(response) {
  let displayCityName = document.querySelector("#user-inputed-city");
  displayCityName.innerHTML = `${response.data.name}`;

  let celsiusDegreeOfUserSearch = document.querySelector("#degree-number");
  celsiusDegreeOfUserSearch.innerHTML = `${Math.round(
    response.data.main.temp
  )}`;

  let weatherIcon = document.querySelector("#weatherNowIcon");
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", `icon-id-${response.data.weather[0].icon}`);

  let weatherDetailLine01 = document.querySelector("#weatherDetail-1");
  weatherDetailLine01.innerHTML = `${response.data.weather[0].description}`;

  let weatherDetailLine02 = document.querySelector("#weatherDetail-2");
  weatherDetailLine02.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let weatherDetailLine03 = document.querySelector("#weatherDetail-3");
  weatherDetailLine03.innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )}mps`;

  let lowestDegree = document.querySelector("#lowest-degree");
  lowestDegree.innerHTML = `Lowest: ${Math.round(
    response.data.main.temp_min
  )}°`;

  let highestDegree = document.querySelector("#highest-degree");
  highestDegree.innerHTML = `Highest: ${Math.round(
    response.data.main.temp_max
  )}°`;

  let weatherDetailLine04 = document.querySelector("#feels-like-degree");
  weatherDetailLine04.innerHTML = `Feels Like: ${Math.round(
    response.data.main.feels_like
  )}°`;

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
  let imperialUnit = "units=imperial";
  let metricUnit = "units=metric";
  let searchCityApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userEntryCityValue}&appid=${apiKey}&${metricUnit}`;
  axios.get(searchCityApiUrl).then(showWeather);
}

let citySearchForm = document.querySelector("#city-search");
citySearchForm.addEventListener("submit", showCity);

//

//allow user to click current location button
function showWeatherOfUserCurrentLocation(response) {
  let displayCityName = document.querySelector("#user-inputed-city");
  displayCityName.innerHTML = `${response.data.name}`;

  let celsiusDegreeOfUserCity = document.querySelector("#degree-number");
  celsiusDegreeOfUserCity.innerHTML = `${Math.round(response.data.main.temp)}`;

  let weatherIcon = document.querySelector("#weatherNowIcon");
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", `icon-id-${response.data.weather[0].icon}`);

  let weatherDetailLine01 = document.querySelector("#weatherDetail-1");
  weatherDetailLine01.innerHTML = `${response.data.weather[0].description}`;

  let weatherDetailLine02 = document.querySelector("#weatherDetail-2");
  weatherDetailLine02.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let weatherDetailLine03 = document.querySelector("#weatherDetail-3");
  weatherDetailLine03.innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )}mps`;

  let lowestDegree = document.querySelector("#lowest-degree");
  lowestDegree.innerHTML = `Lowest: ${Math.round(
    response.data.main.temp_min
  )}°`;

  let highestDegree = document.querySelector("#highest-degree");
  highestDegree.innerHTML = `Highest: ${Math.round(
    response.data.main.temp_max
  )}°`;

  let weatherDetailLine04 = document.querySelector("#feels-like-degree");
  weatherDetailLine04.innerHTML = `Feels Like: ${Math.round(
    response.data.main.feels_like
  )}°`;

  let updatedTime = new Date(response.data.dt * 1000);
  let formattedUpdatedTime = updatedTime.toLocaleTimeString();
  let timeNow = document.querySelector("#last-updated-time");
  timeNow.innerHTML = `${formattedUpdatedTime}`;
}

function showCurrentLocation(position) {
  let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  let imperialUnit = "units=imperial";
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

//degree settings
/*function convertToFahrenheit() {
  let fahrenheitDegreeNumber = document.querySelector("#degree-number");
  fahrenheitDegreeNumber.innerHTML = `116`;

  let fahrenheitHighestDegree = document.querySelector("#highest-degree");
  fahrenheitHighestDegree.innerHTML = `65`;

  let fahrenheitLowestDegree = document.querySelector("#lowest-degree");
  fahrenheitLowestDegree.innerHTML = `45`;
}

let fahrenheitConvertion = document.querySelector("#fahrenheit");
fahrenheitConvertion.addEventListener("click", convertToFahrenheit);

/*function convertToCelsius() {
  let celsiusDegreeNumber = document.querySelector("#degree-number");
  celsiusDegreeNumber.innerHTML = `30`;

  let celsiusHighestDegree = document.querySelector("#highest-degree");
  celsiusHighestDegree.innerHTML = `34`;

  let celsiusLowestDegree = document.querySelector("#lowest-degree");
  celsiusLowestDegree.innerHTML = `27`;
}
let celsiusConvertion = document.querySelector("#celsius");
celsiusConvertion.addEventListener("click", convertToCelsius);
*/
