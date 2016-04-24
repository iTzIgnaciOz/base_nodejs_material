/**
 * Created by Arkan on 21/4/2016.
 */
var config = {};

config.environment = 'dev'; // dev, prod, test

config.db = {url: "mongodb://localhost/test"}

config.dirServerServices = "./app/services";
config.dirServerModels = "./app/models";
config.dirServerModules = "./app/modules";

config.dirServerViews = "app/views";
config.dirServerLayoutViews = config.dirServerViews+"/layouts";
config.dirServerPagesViews = config.dirServerViews+"/pages";
config.viewFileExtension = ".njk";
config.isAjaxRequest = function(req, withJsonResponse){
    var answer = req.xhr;
    if(withJsonResponse){
        answer = req.xhr && req.headers.accept.indexOf("json") > -1;
    }
    return answer;
};

module.exports = config;
