/**
 * Created by Arkan on 23/4/2016.
 */
'use strict';

var util = require("util");
var express = require("express");

exports.default = function (req,res){
    res.render("pages/users/login" + config.viewFileExtension,{pageTitle:'Login'});
};
exports.register = function (req,res){
    res.render("pages/users/register" + config.viewFileExtension,{pageTitle:'Register'});
};
exports.recovery = function (req,res){
    res.render("pages/users/recovery" + config.viewFileExtension,{pageTitle:'Forgot Password'});
};
exports.error = function (req,res){
    return res.status(500).json({payload : req, message : "Ha ocurrido un error"});
};