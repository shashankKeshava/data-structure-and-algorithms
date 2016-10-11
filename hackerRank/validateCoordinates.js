var fs = require('fs');

var input = fs.readFileSync('./validateCoordinate.txt', 'utf-8');

var RegEx = /(\+*\-*)(\d+\.*\w*)/g;
var RegExZero = /^[\+\-]*([1-9]+(\.*[0-9]+)*)$/g;

function processData(input) {
    console.log(input);
    console.log(input.match(RegEx));
    var data = input.match(RegEx)
    var i = 0,
        j = 1;
    var n = parseInt(data[0]);
    while (i < n) {
        console.log(validator(data[j], data[j + 1]));
        i++;
        j += 2;
    }


}


function validator(x, y) {
    console.log(x, y);
    if (x.match(RegExZero) && y.match(RegExZero)) {
        if ((-90 <= x && x <= +90) && (-180 <= y && y <= 180))
            return 'Valid';
        else
            return 'Invalid';
    } else
        return 'Invalid';
}

processData(input);
