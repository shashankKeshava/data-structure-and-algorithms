function numberRotation(n) {
    var len = (n.toString).length;
    var rem = n % 10;
    n = n / 10;
    n = n + ((Math.pow(10, len - 1)) * rem)
    return n;

}

function eRotation(n) {
    n = Math.pow(10, parseInt(n));
    console.log(n);
    console.log(numberRotation(n));
}

eRotation('54');
