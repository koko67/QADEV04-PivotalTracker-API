//Edit Task
/*Author Ronald Butron Salvatierra*/
var request = require('superagent');
require('superagent-proxy')(request);

var endPoint = 'https://www.pivotaltracker.com/services/v5/projects/';
var proxy = 'http://172.20.240.5:8080';

var editTask = function(argument, projectId, storyId, taskId, callback) {

    request
        .put(endPoint + projectId + '/stories/' + storyId + '/tasks/' + taskId)
        .proxy(proxy)
        .set('X-TrackerToken', '0a25c5acfacfb46cdf114252c93ed468')
        .set('Content-Type', 'application/json')
        .send(argument)
        .end(function(err, res) {
            if (err) {
                console.log('Error Edit Task' + JSON.stringify(res.body));
            } else {
                console.log('Task Edited' + JSON.stringify(res.body));
            }
            callback(res);

        });

}

exports.editTask = editTask;
