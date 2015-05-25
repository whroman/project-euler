function largestPalindrome (digits) {
    var n1 = getLargestIntFromNumOfDigits(digits);
    var n2;
    var pal = {};
    pal.val = -Infinity;
    pal.temp = -Infinity;
    pal.found = false;
    pal.half1 = null;
    pal.half2 = null;
    pal.half1EndIndex = null;
    pal.half2EndIndex = null;

    for (n1; n1 > 0; n1--) {
        n2 = n1;
        if (n1 * n2 > pal.val) {
            for (n2; n2 > 0; n2--) {
                if (n1 * n2 > pal.val) {

                    pal.temp = String(n1 * n2);
                    pal.half1Index = Math.floor(pal.temp.length / 2);
                    pal.half2Index = Math.ceil(pal.temp.length / 2);
                    pal.half1 = pal.temp.substr(0, pal.half1Index);
                    pal.half2 = pal.temp
                        .substr(pal.half2Index, pal.temp.length)
                        .split('')
                        .reverse()
                        .join('');

                    pal.found = JSON.stringify(pal.half1) === JSON.stringify(pal.half2);

                    if (pal.found) pal.val = pal.temp;
                }
            }
        }
    }

    return pal.val;
}

function getLargestIntFromNumOfDigits (digits) {
    var largestInt = '';
    for (digits; digits > 0; digits--) {
        largestInt += '9'
    }
    return parseInt(largestInt);
}

var result1 = largestPalindrome(3);

console.log(result1)