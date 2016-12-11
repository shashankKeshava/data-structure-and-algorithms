function militryTime(time) {
    time = time.split(':');
    var am = /AM/g;
    var pm = /PM/g;
    if (time[2].match(am)) {
        if (parseInt(time[0]) == 12) {
            time[0] = '00';
        }

        console.log((time[0]) + ':' + time[1] + ':' + time[2].replace(am, ""));
    } else {
        if (parseInt(time[0]) == 12) {
            time[0] = '00';
        }
        console.log(parseInt(time[0]) + 12 + ':' + time[1] + ':' + time[2].replace(pm, ""))
    }
};


militryTime('12:05:39AM');
