const request = require('request');
const chalk = require('chalk');

const geocode = (location, callback) => {

    const setLocation = encodeURIComponent(location);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${setLocation}.json?access_token=pk.eyJ1Ijoic2hhaHphaWJhaG1lZHNhIiwiYSI6ImNrdHB5ZjRvdzByamIyeGw0ZXA4aTk1M3UifQ.IPiLZ1p4dl4jzTYLhdIONw&limit=1`;

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("No Internet Connection..!!", undefined);

        } else if (response.body.features.length === 0) {
            callback("Unable to find location. Try Another!", undefined);

        } else {
            callback(undefined, {
                placeName: response.body.features[0].place_name,
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[0]
            });
        }
    });

};

module.exports = geocode

geocode("Karachi", (err, data) => {
    // console.log(err);
    // console.log(data);
    if (err === "Unable to find location.Try Another!") {
        console.log(chalk.red.inverse("No Internet Connection..!!"));
        console.log("1", err);
    }
    else if (err === "No Internet Connection..!!") {
        // console.log(chalk.red.inverse("Unable to find location. Try Another!"));
        console.log("2 - ", err);
    }
    else {
        if (data === undefined) {
            console.log(chalk.red.inverse("Unable to find location. Try Another!"));
        } else {
            console.log('Longitude :>> ', chalk.magenta.inverse.italic(data.longitude));
            console.log('Latitude :>> ', chalk.yellow.inverse.italic(data.latitude));
            console.log('Location :>> ', chalk.green.inverse.italic(data.placeName));
        }
    }
});