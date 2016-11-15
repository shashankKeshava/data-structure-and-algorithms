function leftRotateOne(a, n) {
    var temp = a.shift();
    a.push(temp);

}


function leftRotate(n, k, a) {
    var j = 0;
    while (j < k) {
        leftRotateOne(a, n);
        j++;
    }
    console.log((a.toString()).replace(/,/g, ' '));
}



leftRotate(5, 4, [1, 2, 3, 4, 5]);
