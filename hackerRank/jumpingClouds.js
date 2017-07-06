/*
Author: Shashank Keshava
Problem Statement: https://www.hackerrank.com/challenges/jumping-on-the-clouds?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=45-day-campaign*/

var n = 6;
var clouds = [0, 0, 0, 1, 0, 0];

function leapCloud(n, clouds) {
    var jumps = 0;
    for (var i = 0; i < n - 1; i) {
        //i+1 and i+2 Jumps possible
        if (!clouds[i + 2] || !clouds[i + 1]) {
            !clouds[i + 2] ? (i = i + 2) : (i++);
            jumps++;
        } else {
            jumps++;
            i = i + 1;
        }
    }
    console.log(jumps);
}


leapCloud(n, clouds);
