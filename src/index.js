let londonCityElement = document.querySelector("#Ldn-city");
let londonDateElement = londonCityElement.querySelector(".date");
let londonTimeElement = document.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small]");
//Tokyo
let tokyoCityElement = document.querySelector("#Tokyo-city");
let tokyoDateElement = tokyoCityElement.querySelector(".date");
let tokyoTimeElement = document.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
//New york
let nyCityElement = document.querySelector("#Ny-city");
let nyDateElement = nyCityElement.querySelector(".date");
let nyTimeElement = document.querySelector(".time");
let nyTime = moment().tz("America/New_York");

nyDateElement.innerHTML = nyTime.format("MMMM Do YYYY");
nyTimeElement.innerHTML = nyTime.format("h:mm:ss [<small>]A[</small]");
