/*Question 1*/

var async = require('async');
var http = require('http');

var triggerApi = {
    'host': 'api.openweathermap.org',
    'path': '/data/2.5/weather?id=1277333&appid=c7f84de622ad6fd2806c90f96ffaf7cc',
    'method': 'GET'
};

function asyncWaterfall(next) {

    async.waterfall([
            function(callback) {

                http.request(triggerApi, function(res) {
                    console.log('\n\nRequest 1\n\n');
                    console.log('HTTP STATUS: ' + res.statusCode);
                    res.on('data', function(response) {
                        console.log('RESPOSNSE: ' + response);
                    })
                }).end();

                callback();
            },
            function(callback) {

                http.request(triggerApi, function(res) {
                    console.log('\n\nRequest 2\n\n');
                    console.log('HTTP STATUS: ' + res.statusCode);
                    res.on('data', function(response) {
                        console.log('RESPOSNSE: ' + response);
                    })
                }).end();

                callback();
            },
            function(callback) {

                http.request(triggerApi, function(res) {
                    console.log('\n\nRequest 3\n\n');
                    console.log('HTTP STATUS: ' + res.statusCode);
                    res.on('data', function(response) {
                        console.log('RESPOSNSE: ' + response);
                    })
                }).end();

                callback();
            },
            function(callback) {

                http.request(triggerApi, function(res) {
                    console.log('\n\nRequest 4\n\n');
                    console.log('HTTP STATUS: ' + res.statusCode);
                    res.on('data', function(response) {
                        console.log('RESPOSNSE: ' + response);
                    })
                }).end();

                callback();
            },
            function(callback) {

                http.request(triggerApi, function(res) {
                    console.log('\n\nRequest 5\n\n');
                    console.log('HTTP STATUS: ' + res.statusCode);
                    res.on('data', function(response) {
                        console.log('RESPOSNSE: ' + response);
                    })
                }).end();

                callback();
            },
        ],
        function(err, result) {
            if (err) console.log('Err:', err);
            else {
                setTimeout(function() {
                    console.log('Waterfall Completed');
                    next();

                }, 1500);
            }
        });


};




asyncWaterfall(function() {
    console.log('End of Script');
});
