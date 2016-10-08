function findLowestMultipleOfRange (start, end) {
    var lowestMultiple = end * (end - 1);
    var i = end - 2;
    var test, remainder, count;

    for (i; i > start; i--) {
        count = 1;
        remainder = 1;
        while (remainder !== 0) {
            remainder = lowestMultiple * count % i;
            if (remainder !== 0) {
                count++;
            }
        }

        lowestMultiple = lowestMultiple * count;
    }

    return lowestMultiple;
}

var answer = findLowestMultipleOfRange(1,20); // 2520

console.log(answer);