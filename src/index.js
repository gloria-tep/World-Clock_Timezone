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
