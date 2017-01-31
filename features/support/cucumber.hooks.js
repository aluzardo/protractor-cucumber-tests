var Cucumber = require('cucumber');
var fs = require('fs');

var hooks = function () {
    "use strict";
    var timestamp = Date.now();
    var outputDir = './reports/';

    this.After(function (scenario, callback) {
        if (scenario.isFailed()) {
            browser.takeScreenshot().then(function (base64png) {
                var decodedImage = new Buffer(base64png, 'base64');
                scenario.attach(decodedImage, 'image/png');
                callback();
            }, function (err) {
                callback(err);
            });
        } else {
            callback();
        }
    });

    var createHtmlReport = function (sourceJson) {
        var report = require('cucumber-html-report');
        report.create({
            source: sourceJson,
            dest: outputDir,
            name: timestamp + '-cucumber-report.html'
        }).then(console.log).catch(console.error);
    };

    var JsonFormatter = Cucumber.Listener.JsonFormatter();
    JsonFormatter.log = function (string) {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        var targetJson = outputDir + timestamp + '-cucumber-report.json';
        fs.writeFile(targetJson, string, function (err) {
            if (err) {
                console.log('Failed to save cucumber test results to json file.');
                console.log(err);
            } else {
                createHtmlReport(targetJson);
            }
        });
    };

    this.registerListener(JsonFormatter);

};
module.exports = hooks;