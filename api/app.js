const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 5000;
const cors = require("cors")

app.use(bodyParser.json());
app.use(
    cors({
        origin: "http://localhost:8080",
    })
)

//Import Routes
const BauelementRoute = require('./routes/Bauelement');
const BaugruppeRoute = require('./routes/Baugruppe');
const MaschineRoute = require('./routes/Maschine');
const BaugruppeHilfstabelleRoute = require('./routes/BaugruppeHilfstabelle');

app.use('/Bauelement', BauelementRoute);
app.use('/Baugruppe', BaugruppeRoute);
app.use('/Maschine', MaschineRoute);
app.use('/BaugruppeHilfstabelle', BaugruppeHilfstabelleRoute);


app.get('/', (req, res) =>
    res.send(`Startseite`)
)

//Connect to DB
const uri = 'mongodb+srv://123:123@infosystem.fokuk.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(
    uri, 
    { useNewUrlParser: true }, 
    () => console.log('Connected to MongoDB')
);
        

//Start and listening to server
app.listen(port, () => {
    console.log("API is running on port: " + port);
});