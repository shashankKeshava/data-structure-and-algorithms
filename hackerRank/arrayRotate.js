function main() {
    var i = 0;
    arr = [1, 4, 3, 2];
    n = 4;
    var output = "";

    while (i < n) {
        output += arr.pop();
        output += " ";
        i++;
    }

    console.log(output);
}



main();
