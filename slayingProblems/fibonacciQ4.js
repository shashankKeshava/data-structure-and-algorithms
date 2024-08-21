var prev = -1,
    cur = 1,
    sum = 0;

function fibonacciSeries(next) {


    sum = cur + prev;
    console.log(sum);
    prev = cur;
    cur = sum;

    while (cur < 400) {
        fibonacciSeries();
    }
    if (cur >= 400) {
        console.log('End of Script');
        process.exit();
    }
};


fibonacciSeries();
