var express = require('express'),
    morgan = require('morgan'),
    demock = require('demock-express');

var app = express();

var logFmt = ':method :url :status :response-time';

app.use(morgan(logFmt));
app.use(demock());

app.listen(3000);
