// Declaring the variables
let lon;
let lat;
// let temperature = document.querySelector(".temp");
// let summary = document.querySelector(".summary");
// let loc = document.querySelector(".location");
// let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
	console.log(position);
	lon = position.coords.longitude;
	lat = position.coords.latitude;

	// API ID
	const api = "3a5399a4a372c8ab24e17f8b7e950c5f";

	// API URL
	const base =
`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

	// Calling the API
	fetch(base)
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		console.log(data);
		console.log(data.weather[0].description);
		document.getElementById("temp");
		temp.textContent = Math.floor(data.main.temp - kelvin) + "°C";
		var summaryDiv = document.getElementById("summary");
		summary.textContent = data.weather[0].description;
		var loc = document.getElementById("loc");
		loc.textContent = data.name + "," + data.sys.country;
		var icon = document.getElementById("icon");
		let icon1 = data.weather[0].icon;
		icon.innerHTML =
			`<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
		});
	});
}
});


function OnPageLoadFun() {
	alert("Page under Construction -- last updated on 24-12-2021.");
  };