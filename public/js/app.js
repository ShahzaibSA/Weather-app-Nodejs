
// const getWeather = (location) => {
//     const url_2 = `http://localhost:5000/weather?location=${location}`;
//     fetch(url_2).then(response => {
//         response.json().then(data => {
//             if (data.error) {
//                 console.log(data.error);
//             } else {
//                 console.log(data);
//             }
//         })
//     })
//     // .catch(err => {
//     //     console.log(err);
//     // });
// };


const weatherForm = document.querySelector("form");
const locationInput = document.getElementById("location-input");
const weatherInfoDiv = document.querySelector("#weather-info");
const errorMsgDiv = document.querySelector("#error-msg");
const showLocation = document.querySelector("#location");
const showTemperature = document.querySelector('#temperature');
const showWeather = document.querySelector('#weather');
const showHumidity = document.querySelector("#humidity");
const showFeels = document.querySelector("#feels");

weatherForm.addEventListener("submit", (e) => {
    const location = locationInput.value;

    if (location.length === 0) {
        console.log("Please enter address");
        weatherInfoDiv.style.display = 'none';
        errorMsgDiv.style.display = 'block';
        errorMsgDiv.innerHTML = `<h3>Error:  Please enter your location..!!</h3>`
    } else {
        const url = `http://localhost:5000/weather?location=${location}`;

        showLocation.textContent = "Loading...";
        showTemperature.textContent = "Loading...";
        showWeather.textContent = "Loading...";
        showHumidity.textContent = "Loading...";
        showFeels.textContent = "Loading...";

        fetch(url).then(response => {
            response.json().then(data => {
                if (data.error) {
                    weatherInfoDiv.style.display = 'none';
                    errorMsgDiv.style.display = 'block';
                    errorMsgDiv.innerHTML = `<h3>Error:  ${data.error}..!!</h3>`
                } else {
                    errorMsgDiv.style.display = 'none';
                    weatherInfoDiv.style.display = 'block';
                    showLocation.textContent = `Your currently in ${data.place}`;
                    showTemperature.textContent = `It is currently ${data.temperature} C`;
                    showWeather.textContent = data.weather;
                    showHumidity.textContent = data.humidity;
                    showFeels.textContent = `${data.feels_like} C`;
                }
            });
        });
    }

    e.preventDefault();
});


























// const getWeather = (location) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ae7996dc544b5ba0c8725bf751a208a0`;
//     const url_2 = `http://localhost:5000/weather?location=${location}`;
//     fetch(url_2)
//         .then(response => {
//             response.json().then(data => {
//                 console.log(data);
//                 console.log(data.place);
//             })
//         })
//         .catch(err => console.log(err));
// }

// // const loc = prompt("Enter Location", "Karachi");


// const weatherForm = document.querySelector('form');
// const locationInput = document.getElementById('location');

// weatherForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const location = locationInput.value
//     // console.log(location);
//     getWeather(location);

// });











































// fetch("https://puzzle.mead.io/puzzle").then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// });