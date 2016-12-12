var MS_PER_DAY = 1000 * 60 * 60 * 24;

function fineCalc(ad, am, ay, ed, em, ey) {
    var actualDate = new Date(ay, am - 1, ad + 1);
    var expectedDate = new Date(ey, em - 1, ed + 1);

    var due = Math.floor((actualDate - expectedDate) / MS_PER_DAY);

    if (due <= 0) return 0;

    if (ay > ey) {
        return 10000;
    }

    if ((due > 0) && (am > em) && (ay == ey)) {
        due = Math.floor(Math.abs(em - am));
        return due * 500;
    }

    if ((due > 0) && (am == em) && (ay == ey)) {
        return due * 15;
    }

};


console.log(fineCalc(5, 5, 2014, 23, 2, 2014));
