/**
 * Created by Arkan on 23/4/2016.
 */
'use strict';

var util = require("util");
var User = require('mongoose').model('User'),
    passport = require('passport');

var getErrorMessage = function(err) {
    // Definir la variable de error message
    var message = '';

    // Si un error interno de MongoDB ocurre obtener el mensaje de error
    if (err.code) {
        switch (err.code) {
            // Si un eror de index único ocurre configurar el mensaje de error
            case 11000:
            case 11001:
                message = 'Usuario ya existe';
                break;
            // Si un error general ocurre configurar el mensaje de error
            default:
                message = 'Se ha producido un error';
        }
    } else {
        // Grabar el primer mensaje de error de una lista de posibles errores
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }
    // Devolver el mensaje de error
    return message;
};

exports.default = function (req,res){
    res.render("pages/users/login" + config.viewFileExtension,{pageTitle:'Login'});
};

exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};
exports.register = function (req,res){
    res.render("pages/users/register" + config.viewFileExtension,{pageTitle:'Register',messages:req.flash('error')});
};

exports.create = function(req, res, next) {
    // Si user no está conectado, crear y hacer login a un nuevo usuario, en otro caso redireccionar el user de vuelta a la página de la aplicación principal
    if (!req.user) {
        // Crear una nueva instancia del modelo 'User'
        var user = new User(req.body);
        var message = null;

        // Configurar la propiedad user provider
        user.provider = 'local';

        // Intenta salvar el nuevo documento user
        user.save(function(err) {
            // Si ocurre un error, usa el mensaje flash para reportar el error
            if (err) {
                // Usa el método de manejo de errores para obtener el mensaje de error
                var message = getErrorMessage(err);
                console.log(message);
                // Configura los mensajes flash
                req.flash('error', message);

                // Redirecciona al usuario de vuelta a la página signup
                return res.redirect('/users/register');
            }

            // Si el usuario fue creado de modo correcto usa el método 'login' de Passport para hacer login
            req.login(user, function(err) {
                // Si ocurre un error de login moverse al siguiente middleware
                if (err) return next(err);

                // Redireccionar al usuario de vuelta a la página de la aplicación principal
                return res.redirect('/');
            });
        });
    } else {
        return res.redirect('/');
    }
};

exports.recovery = function (req,res){
    res.render("pages/users/recovery" + config.viewFileExtension,{pageTitle:'Forgot Password'});
};
exports.error = function (req,res){
    return res.status(500).json({payload : req, message : "Ha ocurrido un error"});
};