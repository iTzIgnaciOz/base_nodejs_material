/**
 * Created by Arkan on 21/4/2016.
 */


// Dependencias Locales

const mongoose = require('./app/config/db')();
const config = require('./config');
const helper = require('./app/services/helper');
const routerApp = require('./app/config/routes');
const pass = require('./app/config/passport');

// Dependencias Externas
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const consolidate = require('consolidate');
const session = require('express-session');
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require("connect-flash");



// Variables globales
global.config = config;
global.helper = helper;

// Global __basedir
global.__basedir = path.resolve(__dirname, '.');
var db = mongoose;
var app = express();
var passConfig = pass();

/* static files */
app.use('/public', express.static(__dirname + '/public'));

app.locals = global.config;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* Middleware para sessiones */
app.use(session({
    saveUnitialized: true,
    resave: true,
    secret: config.sessionSecret
}));

/* Configuración del motor de vistas y directorio de las vistas*/
app.set('view engine', 'nunjucks');
app.set('views', config.dirServerViews);
app.engine(config.viewFileExtension, consolidate.nunjucks);
app.set('view cache', false);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routerApp);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var errorMessage = "Error 404: Lo sentimos, página no encontrada, comunique este error al administrador del sistema! ("+req.uri+")";
    var err = new Error(errorMessage);
    err.status = 404;
    var isAjaxRequest = helper.isAjaxRequest(req, true);
    if(isAjaxRequest){
        return res.status(404).json({payload : req, message : errorMessage});
    }
    else{
        var error = {file: __dirname+__filename};
        console.log(error, errorMessage);
    }
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('errors'+config.viewFileExtension,{
        'error': err.status || 500,
        "message": err.message,
        "stack": err.stack.split("\n"),
    });
    console.log(err);
    console.log("STACK:");
    console.log(err.stack.split("\n"));
    console.log("TRACE:");
    console.trace();
});

var server = app.listen(3030, function() {
    var logMessage = 'Express server para "Base NodeJs Material esta escuchando por el puerto ' + server.address().port;
    console.log(logMessage);
});