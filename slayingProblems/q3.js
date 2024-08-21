/* Resolve scope issue in this simple example, we are ought to get exact sum values as mentioned in the text of console.logs, you are allowed to change as little as possible, and not allowed to change variable names in it. */
var async = require('async');
var Chance = require('chance');
var chance = new Chance();
sum = 100; //master sum value
async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
], function(err, result) {
    console.log("Sum from last waterfall level:" + result);
});

function myFirstFunction(callback) {
    var var1 = chance.natural({ min: 1, max: 100 });
    var var2 = chance.natural({ min: 1, max: 100 });
    var sum = var1 + var2;
    console.log("SUM master is:" + sum);
    console.log("Function Level: First, var1: " + var1 + ", var2: " + var2 + ", Sum:" + sum);
    callback(null, sum);
}

function mySecondFunction(sum, callback) {
    var var1 = chance.natural({ min: 1, max: 100 });
    var var2 = chance.natural({ min: 1, max: 100 });
    var sum = var1 + var2;
    console.log("Sum from previous waterfall level:" + sum);
    console.log("Function Level: First, var1: " + var1 + ", var2: " + var2 + ", Sum:" + sum);
    callback(null, sum);
}

function myLastFunction(sum, callback) {
    var var1 = chance.natural({ min: 1, max: 100 });
    var var2 = chance.natural({ min: 1, max: 100 });
    var sum = var1 + var2;
    console.log("Sum from previous waterfall level:" + sum);
    console.log("Function Level: First, var1: " + var1 + ", var2: " + var2 + ", Sum:" + sum);
    callback(null, sum);
}
