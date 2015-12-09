'use strict';

const findPrimes = function (find) {
  const primes = [2,3];

  let possiblePrime = primes[primes.length - 1];

  while (primes.length < find) {
    possiblePrime++;
    const possibleFactorUpperLimit = Math.sqrt(possiblePrime);
    let pIndex = 0;
    let isPrime = true;

    while (primes[pIndex] <= possibleFactorUpperLimit && isPrime) {
      const isFactor = possiblePrime % primes[pIndex] === 0;
      if (isFactor) {
        isPrime = false;
      } else {
        pIndex++;
      }
    }

    if (isPrime) primes.push(possiblePrime);
  }

  return primes;
};

const result = findPrimes(10);

console.log(result);
