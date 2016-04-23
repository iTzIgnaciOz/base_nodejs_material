/**
 * Created by Arkan on 23/4/2016.
 */
/**
 * @author José Gabriel Gonzalez Perez
 */
var helper = {};

helper.isAjaxRequest = function(req, withJsonResponse){
    var answer = req.xhr;
    if(withJsonResponse){
        answer = req.xhr && req.headers.accept.indexOf("json") > -1;
    }
    return answer;
};

module.exports = helper;