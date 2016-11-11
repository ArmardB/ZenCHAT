'use strict';
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    // res.send('<h1>Hello Express!</h1>');
    res.render('login');
});

app.listen(app.get('port'), () => {
    console.log('ZenCHAT running on Port: ', 3000);
});