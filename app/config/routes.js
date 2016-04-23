/**
 * Created by Arkan on 23/4/2016.
 */
"use strict";
var express = require("express");
var router = express.Router();

var users = require('../modules/users/usersModule');
// var users = require('./users/index');

router.get('/users/login', users.login.default);
router.get('/users/register', users.login.register);
router.get('/users/recovery', users.login.recovery);

//router.get('/error', home.error);
module.exports = router;