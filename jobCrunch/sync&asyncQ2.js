/*Question 2*/
var async = require('async');
var http = require('http');

var triggerApi = {
    'host': 'api.openweathermap.org',
    'path': '/data/2.5/weather?id=1277333&appid=c7f84de622ad6fd2806c90f96ffaf7cc',
    'method': 'GET'
};



if (process.argv[2] === 'sync') {
    syncFunction();
} else if (process.argv[2] === 'async') {
    asyncFunction();
} else {
    console.log('Error the arguments is Invalid. Use only sync or async as arguments');
}



function syncFunction() {
    console.log('Syncronous Function');
    firstFunction();
    secondFunction();
}


function asyncFunction() {
    async.parallel({
        one: firstFunction,
        two: secondFunction

    }, function(err, result) {
        console.log('ASyncronous Function');
    })

}



function firstFunction() {

    http.request(triggerApi, function(res) {
        console.log('\n\nRequest 1\n\n');
        console.log('HTTP STATUS: ' + res.statusCode);
        res.on('data', function(response) {
            console.log('RESPOSNSE: ' + response);
        })
    }).end();
    //    callback();

};


function secondFunction() {

    http.request(triggerApi, function(res) {
        console.log('\n\nRequest 2\n\n');
        console.log('HTTP STATUS: ' + res.statusCode);
        res.on('data', function(response) {
            console.log('RESPOSNSE: ' + response);
        })
    }).end();
    //  callback();
};
