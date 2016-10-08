function sumOfRangeOfSquares (startInt, endInt) {
    var sum = 0;
    for (startInt; startInt <= endInt; startInt++) {
        sum += (startInt * startInt);
    }

    return sum;
}

function squareOfSumOfRange (startInt, endInt) {
    var sum = 0;
    for (startInt; startInt <= endInt; startInt++) {
        sum += startInt;
    }

    return sum * sum;
}

console.log(squareOfSumOfRange(1,10) - sumOfRangeOfSquares(1,10))

console.log(squareOfSumOfRange(1,100) - sumOfRangeOfSquares(1,100))