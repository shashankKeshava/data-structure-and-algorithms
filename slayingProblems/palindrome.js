function isPlaindrome(str) {
    var strLen = str.length;
    // Check is input is of length 0 or 1
    if (strLen == 0 || strLen == 1) {
        return true;
    }

    if (str[0] == str[strLen - 1]) {
        return isPlaindrome(str.slice(1, strLen - 1));
    }

    return false;
}

console.log(isPlaindrome('shank'));
console.log(isPlaindrome('dad'));
