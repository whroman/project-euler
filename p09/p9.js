var getPythagoreanSet = function (num) {
    var a, b, c;
    for (let iterA = 1; iterA < num; iterA++) {
        for (let iterB = 1; iterB < num; iterB++) {
            const iterC = num - iterA - iterB;
            const pySet = [iterA, iterB, iterC];
            if (
                iterC <= iterA ||
                iterC <= iterB
            ) break;
            if (iterA * iterA + iterB * iterB === iterC * iterC) return pySet;
        }
    }

};


var foo = getPythagoreanSet(1000).reduce((memo, item) => {
    return memo * item;
}, 1);
console.log(foo);