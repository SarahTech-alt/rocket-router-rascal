const express = require("express");
const app = express();
const hello = require('./routes/welcome');
const parts = require('./routes/parts');
const bodyParser = require('body-parser');
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.get('/hello', parts); // Oh, hi there! Wait, who's parts are these?

app.use('/parts', parts);

app.listen(port);
console.log("Listening on port: ", port);
