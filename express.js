var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    demock = require('demock-express');

var app = express();

var staticOptions = {
    redirect: false,
    setHeaders: function (res) {
        res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    }
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan(':method :url', { immediate: true }));
app.use(morgan('--> :method :url :status :response-time', { immediate: false }));
app.use(demock('/api', __dirname, staticOptions));
app.use(express.static(__dirname, staticOptions));

app.listen(3000);
