/**
 * Created by Arkan on 24/4/2016.
 */

var passport = require('passport'),
    mongoose = require('mongoose');

module.exports = function () {
    var User = mongoose.model('User');
    passport.serializeUser(function (user, done) {
        done(null,user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findOne({
            _id: id
        },function (err, user) {
            console.log(user);
            user.salt = null;
            console.log(user);
            done(err,user);
        })
    })
    require('./strategies/local')();
};