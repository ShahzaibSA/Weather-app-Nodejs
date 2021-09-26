const request = require('request');

const forecast = (location, callback) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ae7996dc544b5ba0c8725bf751a208a0`;

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback("Internet Failure", undefined);
        } else if (body.message) {
            callback("Location Not Found", undefined);
        } else {
            const data = {
                country: body.sys.country,
                place: body.name,
                weather: body.weather[0].main,
                temperature: body.main.temp_min,
                humidity: body.main.humidity,
                feels_like: body.main.feels_like
            };
            callback(undefined, data);
        }
    });
};

// forecast("Porgal", (err, data) => {
//     console.log(err);
//     console.log(data);
// })

module.exports = forecast;