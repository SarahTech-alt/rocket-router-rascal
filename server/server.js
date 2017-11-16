var express = require("express");
var app = express();
var hello = require('./routes/welcome');
var parts = require('./routes/parts');
var bodyParser = require('body-parser');
var port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.get('/hello', parts); // Oh, hi there! Wait, who's parts are these?

app.use('/parts', parts);

app.listen(port);
console.log("Listening on port: ", port);
