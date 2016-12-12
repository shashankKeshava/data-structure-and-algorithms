function bigSum(n, arr) {
    var i = 0;
    var sum = 0;
    while (i < n) {
        sum += Math.abs(arr[i]);
        i++;
    }

    return sum;
}

var arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(bigSum(5, arr));
