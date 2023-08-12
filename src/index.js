function updateInterval() {
  let londonElement = document.querySelector("#London");
  let londonDateElement = londonElement.querySelector("#london-date");
  let londonTimeElement = document.querySelector("#london-time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small]"
  );

  let tokyoElement = document.querySelector("#Tokyo");
  let tokyoDateElement = tokyoElement.querySelector("#tokyo-date");
  let tokyoTimeElement = document.querySelector("#tokyo-time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  let nyElement = document.querySelector("#New-york");
  let nyDateElement = nyElement.querySelector("#newyork-date");
  let nyTimeElement = document.querySelector("#newyork-time");
  let nyTime = moment().tz("America/New_York");

  nyDateElement.innerHTML = nyTime.format("MMMM Do YYYY");
  nyTimeElement.innerHTML = nyTime.format("h:mm:ss [<small>]A[</small]");
}
setInterval(updateInterval, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDateElement = cityTime.format("MMMM Do YYYY");
  let cityTimeElement = cityTime.format("h:mm:ss [<small>]A[</small]");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city"> 
  <div>
            <h2>${cityName}</h2>
            <div class="date" id="newyork-date">${cityDateElement}</div>
          </div>
          <div class="time" id="newyork-time">${cityTimeElement}
          </div>`;
}
setInterval(updateCity, 1000);
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
