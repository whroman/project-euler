function isPrime(n) {
    if (n <= 3) { return n > 1; }
    if (n % 2 == 0 || n % 3 == 0) { return false; }
    for (var  i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) { return false; }
    }
    return true;
}

function getLargestPrimeFactor (num) {
    var factorList = (function(){
        var _factorList = [];
        var ii = 2;
        var maxFactor = Math.sqrt(num);
        while (ii < maxFactor) {
            var factorFound = num % ii === 0;
            var factorsComplement;
            if (factorFound) {
                factorsComplement = num / ii;
                _factorList.push(ii);
                _factorList.push(factorsComplement)
            }
            ii += 1;
        }
        return _factorList;
    })();

    var primeFactorList = (function() {
        var _primeFactorList = [];
        factorList.forEach(function(factor) {
            if (isPrime(factor)) {
                _primeFactorList.push(factor)
            }
        });
        return _primeFactorList;
    })();

    var largestPrimeFactor = Math.max.apply( Math, primeFactorList );

    return largestPrimeFactor
}

var answer = getLargestPrimeFactor(600851475143);
console.log(answer);