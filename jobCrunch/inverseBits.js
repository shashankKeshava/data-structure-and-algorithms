function inverseBits(num) {
    num = num.toString(2);
    var numLen = num.length;
    numLen=numLen-1;
    var mask = Math.pow(2, numLen);
    console.log(mask);
    console.log(~ num & (mask-1));
}(function () {
    inverseBits(10);
})();