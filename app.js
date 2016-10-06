"use strict";

const fs = require('fs');
const express = require('express');
const app = express();
const compression = require('compression');

const PORT = process.env.PORT || '8888';

app.use(compression());
app.use(express.static('./node_modules'));
app.use(express.static('./dist'));

app.all('/', (req, res) => {
    fs.createReadStream('index-aot.html').pipe(res);
});

app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}...`);
});