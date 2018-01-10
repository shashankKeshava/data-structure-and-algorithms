var temp = [];
function formatArray(arr) {
    var i = 0;
    while (i < arr.length) {
        //console.log(arr[i]);
        if (typeof arr[i] !== 'object') {
            //console.log('temp:', temp);
            temp.push(arr[i]);
            //i++;
        } else {
            formatArray(arr[i]);
        }
        i++;
    }
    return temp;
}

console.log(formatArrayString([1, 2, [3, 4, [5, 6, 7, [8, 9, 10]]]]));

function formatArrayString(arr) {
    arr = arr.toString().split(',');
    for (var i = 0; i < arr.length; i++) {
        temp.push(parseInt(arr[i]));
    }
    return temp;
}
