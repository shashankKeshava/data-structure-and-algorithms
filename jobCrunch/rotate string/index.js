// A function that roates string by once in anti-clock wise direction
function rotateString(input, length) {
    const lastElelment = input.slice(length - 1);
    const restOfTheElements = input.substring(0, length - 1);
    return lastElelment + restOfTheElements;
}

const shiftedDiff = (first, second) => {
    const lengthOfString = first.length;

//   If both strings are identical
    if (first === second) {
        return 0;
    }
  
    let count = 1;
    let rotatedString = rotateString(first, lengthOfString);

    //Iterative loop
    while (count < lengthOfString && rotatedString != second) {
        rotatedString = rotateString(rotatedString, lengthOfString);
        count++;
    }

    // If string matched return count
    if (rotatedString === second) {
        return count;
    }

    // If match not found return -1
    return -1;
};