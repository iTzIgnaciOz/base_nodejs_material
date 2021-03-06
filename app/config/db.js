/**
 * Created by Arkan on 21/4/2016.
 */
/*// Bring Mongoose into the app
 var mongoose = require( 'mongoose' );

 // Build the connection string
 var dbURI = 'mongodb://192.168.10.10/base';

 // Create the database connection
 mongoose.connect(dbURI);

 // CONNECTION EVENTS
 // When successfully connected
 mongoose.connection.on('connected', function () {
 console.log('Mongoose default connection open to ' + dbURI);
 });

 // If the connection throws an error
 mongoose.connection.on('error',function (err) {
 console.log('Mongoose default connection error: ' + err);
 });

 // When the connection is disconnected
 mongoose.connection.on('disconnected', function () {
 console.log('Mongoose default connection disconnected');
 });

 // If the Node process ends, close the Mongoose connection
 process.on('SIGINT', function() {
 mongoose.connection.close(function () {
 console.log('Mongoose default connection disconnected through app termination');
 process.exit(0);
 });
 });


 // BRING IN YOUR SCHEMAS & MODELS
 // For example
 require('../modules/users/models/user');*/

var  config = require('./../../config'),
    mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect(config.db.url);
    var db = mongoose.connection;
    db.once('open', function (callback) {
        console.log("Conexión establecida con MongoDB ("+config.db.url+")");
    });
    db.on('error', console.error.bind(console, 'connection error:'));

    require('../modules/users/models/user');
    return db;
};