"use strict";

const express = require('express');
const app = express();

const home = require("./routes/home");

app.set('views', './views');
app.set('view engine','ejs');

app.use('/', home); // => 미들웨어

module.exports = app;