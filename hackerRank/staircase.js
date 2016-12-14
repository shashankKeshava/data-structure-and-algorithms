function staircase(n) {
    var str = "";
    for (var i = n; i > 0; i--) {
        for (var j = i; j < n; j++) {
            str.concat(" ");
        }
        str.concat("#");
    }
    return str;
}

console.log(staircase(4));
