/* String Functors

Means: A functor is an object that has a map method. Arrays in JavaScript implement map and are therefore functors. Promises, Streams and Trees often implement map in functional languages, and when they do, they are considered functors. The map method of the functor takes it’s own contents and transforms each of them using the transformation callback passed to map, and returns a new functor, which contains the structure as the first functor, but with the transformed values.

URL: https://www.youtube.com/watch?v=YLIH8TKbAh4 */


/* Warning Exmaple Wrong, Watch: https://www.youtube.com/watch?v=DisD9ftUyCk */

function stringFunction(value,fn){
    var chars=value.split("");
    return chars.map(function(char){
        return String.fromCharCode(fn(char.charCodeAt(0)));
    }).join("")
}

function plus1(value){
    return value+1;
}

function minus1(value){
    return value-1;
}

console.log([3,2].map(plus1))

console.log(stringFunction("ABC",plus1))
console.log(stringFunction("XYZ",minus1))

