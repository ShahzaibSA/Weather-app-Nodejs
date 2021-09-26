const path = require('path');
const express = require('express');
const forecast = require('./utils/forecast');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 5000;

const viewsPath = path.join(__dirname, '../templates/views');

app.use(express.static("../public"));

app.set('view engine', 'hbs');
app.set('views', viewsPath)


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/weather", (req, res) => {

    const location = req.query.location;
    forecast(location, (err, { country, place, temperature, weather, feels_like, humidity } = {}) => {
        if (err) {
            res.send({
                error: err
            });
            // console.log(chalk.red.inverse(err));
        } else {
            // const { country, place_name, temp_min, temp_status } = data;
            res.send({
                location: country,
                place,
                temperature,
                weather,
                feels_like,
                humidity
            });
        }
    });



});

app.get("/we", (req, res) => {
    res.render("we");
});

app.listen(port, () => {
    console.log("Server is Running " + port);
});

