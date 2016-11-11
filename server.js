'use strict';
const express = require('express');
const app = express();
const zenCHAT = require('./app');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', zenCHAT.router);

app.listen(app.get('port'), () => {
    console.log('ZenCHAT Running on Port: ', 3000);
});