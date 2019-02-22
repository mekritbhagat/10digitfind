var express = require('express');
var path = require('path');
var multer = require('multer');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    var dataString = "Hello, 1234567890 , I 123 am 1234 from 12345 n 123456 conto 1234567 or 12345678 final 0006543210 111111 999990 00000";
    var ck = /\d{10}/;
    var matches = dataString.match(ck);
    for (var i = 0; i < matches.length; i++) {
        res.send( matches + ": is Matched" );
    }
});

app.listen(3000, () =>
    console.log("Server running at 3000")
);