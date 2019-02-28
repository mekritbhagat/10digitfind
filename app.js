var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send(newText);
});

var text = "Hello, 123456789 , I 123 am 1234 from 12345 n 123456 conto 1234567 or 12345678 final 0006543210 111111 999990 00000";

var newText = text.match(/\d{10}/,function(num){
    newText = newText.join(' ');
    return num;
});

app.listen(3000, () =>
    console.log("Server running at 3000")
);