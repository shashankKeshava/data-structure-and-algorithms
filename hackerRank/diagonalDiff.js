function matrixDiff(n, arr) {
    var primaryD = 0,
        secondaryD = 0;
    for (var i = 0; i < n; i++) {
        for (var j = i; j < i + 1; j++) {
            primaryD += arr[i][j];
        }
    }

    for (var i = 0; i < n; i++) {
        for (var j = n - i - 1; j < n - i; j++) {
            secondaryD += arr[i][j];
        }
    }

    return Math.abs(primaryD - secondaryD);
};

var arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

var n = 3;
console.log(matrixDiff(n, arr));
