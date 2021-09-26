const chalk = require('chalk');
const yargs = require('yargs');
const forecast = require('../utils/forecast');
const geocode = require('../utils/geocode');

//! Finding Latitude & Longitude
yargs.command({
    command: "location",
    describe: "Enter Location..",
    builder: {
        location: {
            describe: "Location",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        geocode(argv.location, (err, { placeName, longitude, latitude } = {}) => {
            if (err === "Unable to find location.Try Another!") {
                console.log(chalk.red.inverse("No Internet Connection..!!"));
            } else {
                if (data === undefined) {
                    console.log(chalk.red.inverse("Unable to find location. Try Another!"));
                } else {
                    console.log('Longitude :>> ', chalk.magenta.inverse.italic(longitude));
                    console.log('Latitude :>> ', chalk.yellow.inverse.italic(latitude));
                    console.log('Location :>> ', chalk.green.inverse.italic(placeName));
                };
            };
        });
    }
});

//!  Forecast
const address = process.argv[2];
if (!address) {
    console.log(chalk.red.inverse("Please provide address..!!"));
} else {
    forecast(address, (err, data) => {
        if (err) {
            console.log(chalk.red.inverse(err));
        } else {
            const { country, place_name, temp_min, temp_status } = data;
            console.log('Country :>> ', chalk.white.inverse.italic(country));
            console.log('Place Name :>> ', chalk.magenta.inverse.italic(place_name));
            console.log('Temp :>> ', chalk.yellow.inverse.italic(temp_min));
            console.log('Status :>> ', chalk.green.inverse.italic(temp_status));
        }
    });
};

yargs.parse();