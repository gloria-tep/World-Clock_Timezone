function updateInterval() {
  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDateElement =
      singaporeElement.querySelector("#singapore-date");
    let singaporeTimeElement = document.querySelector("#singapore-time");
    let singaporeTime = moment().tz("Asia/Singapore");

    singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
    singaporeTimeElement.innerHTML = singaporeTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }

  let tokyoElement = document.querySelector("#Tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector("#tokyo-date");
    let tokyoTimeElement = document.querySelector("#tokyo-time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let nyElement = document.querySelector("#New-york");
  if (nyElement) {
    let nyDateElement = nyElement.querySelector("#newyork-date");
    let nyTimeElement = document.querySelector("#newyork-time");
    let nyTime = moment().tz("America/New_York");

    nyDateElement.innerHTML = nyTime.format("MMMM Do YYYY");
    nyTimeElement.innerHTML = nyTime.format("h:mm:ss [<small>]A[</small]");
  }
}

setInterval(updateInterval, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
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
          <div class="time" id="newyork-time">${cityTimeElement} </div>
          <div>
           <a href="/" class="homepage">Back to cities</a> </div> </div>
          `;
}
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
