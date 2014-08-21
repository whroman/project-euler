function foo(limit) {
    var sum = 0;
    var i = 0;

    for (i; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(foo(1000))