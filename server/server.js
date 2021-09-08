const express = require("express");
const app = express();
const welcome = require('./routes/welcome');
const parts = require('./routes/parts');
const bodyParser = require('body-parser');
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/welcome', parts); // Oh, hi there! Wait, whose parts are these?

app.use('/parts', parts);

app.listen(port);
console.log("Listening on port: ", port);
