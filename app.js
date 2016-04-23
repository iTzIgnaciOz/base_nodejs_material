/**
 * Created by Arkan on 21/4/2016.
 */

// Dependencias Externas
const express = require('express');
const nunjucks = require('nunjucks');

// Dependencias Locales
const config = require('./config');

var app = express();

nunjucks.configure([config.dirServerLayoutViews,config.dirServerPagesViews], {
    autoescape: true,
    express: app
});

/* static files */
app.use('/public', express.static(__dirname + '/public'));

app.get("/users/login", function (req,res) {
    res.render("login.njk",{pageTitle:'Login'});
});

var server = app.listen(3030, function() {
    var logMessage = 'Express server para "Base NodeJs Material esta escuchando por el puerto ' + server.address().port;
    console.log(logMessage);
});