var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8');
var RegExpPattern = /(?:(http|(\/\/)))(\.?\w+)+/g;
var RegExpRmHttp = /(\.?\w+)+/g;

function processData(input) {
    var n = 10,
        i = 0;
    var trimmedIp = input.trim().split();
    console.log(trimmedIp.length);
    //console.log(trimmedIp);

    var strip = trimmedIp[0].match(RegExpPattern);
    while (i < strip.length) {
        strip[i].match(RegExpRmHttp);
        i++;
    }

    console.log(strip);

}


processData(input);
