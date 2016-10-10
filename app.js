"use strict";

const fs = require('fs');
const express = require('express');
const app = express();
const compression = require('compression');

const PORT = process.env.PORT || '8888';

app.set('view engine', 'ejs');

app.use(compression());
app.use(express.static('./node_modules'));
app.use(express.static('./dist'));
app.use(express.static('./'));


app.all('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}...`);
});