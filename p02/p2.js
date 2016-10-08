function foo(limit) {
    var fib1 = 1;
    var fib2 = 2;
    var sum = 0;
    var i = 0;

    for (fib2; fib2 <= limit; fib2) {
        var temp = fib1;

        if (fib2 % 2 === 0) {
            sum += fib2;
        }

        fib1 = fib2;
        fib2 += temp;

    }

    return sum;
}

console.log(foo(4000000))