/**
 * Created by Arkan on 23/4/2016.
 */
"use strict";
var express = require("express");
var passport = require('passport');
var router = express.Router();


var users = require('../modules/users/usersModule');
// var users = require('./users/index');

router.get('/users/login', users.login.default);
router.post('/users/login',passport.authenticate('local',{
        successRedirect: '/',
        failureRedirect:'/users/login',
        failureFlash: true
    }));
router.get('/users/register', users.login.register);
router.post('/users/register', users.login.create);
router.get('/users/recovery', users.login.recovery);
router.get('/users/logout', users.login.logout);

//router.get('/error', home.error);
module.exports = router;