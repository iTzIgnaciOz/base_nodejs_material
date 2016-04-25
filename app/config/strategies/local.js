/**
 * Created by Arkan on 24/4/2016.
 */

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function() {
    // Usar la estrategia local de Passport
    passport.use(new LocalStrategy(function(username, password, done) {
        // Usar el método 'findOne' de 'User'  para encontrar un usuario con el nombre de usuario actual
        User.findOne({
            username: username
        }, function(err, user) {
            // Si ocurre un error continuar al siguiente middleware

            if (err) {
                return done(err);
            }

            // Si no se ha encontrado un usuario, continuar al siguiente middleware con un mensaje de error
            if (!user) {
                return done(null, false, {
                    message: 'Usuario desconocido'
                });
            }

            // Si la contraseña es incorrecta, continuar al siguiente middleware con un mensaje de error
            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Contraseña incorrecta'
                });
            }
            // En otro caso, continuar al siguiente middleware con el objeto user
            return done(null, user);
        });
    }));
};