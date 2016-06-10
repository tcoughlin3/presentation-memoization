// Checks if num is evenly divisible by any number from 2 to num - 1.
// How can isPrime be optimized? Does it need to check all those numbers?
var isPrime = function(num) {

  for (var i = 2; i < num; i++) {
    // return false immediately if not prime
    if (num % i === 0) return false;
  }

  return true;
}

// Build array of primes until the ordinal is found
var findPrime = function(ord) {
  var primes = [];
  var num = 2;

  while (primes.length < ord) {
    if (isPrime(num)) primes.push(num);
    num++;
  }

  return primes[ord - 1];
};

var memoize = function(func) {
  var memoized = {};

  return function() {
    var args = JSON.stringify(Array.prototype.slice.call(arguments));
    if (memoized[args] === undefined) {
      console.log('ran function')
      memoized[args] = func.apply(this, arguments);
    } else {
      console.log('didn\'t run function used memoized result')
    }
    //console.log('memoized:', memoized)
    return memoized[args];
  };
};


















// /*
// Test findPrime function, verify it works.
// Compare findPrime result against list of first 168 primes according to wikipedia.
// */
//
//
// var hardcodedPrimes = [null, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
//
// var n = 1;
// console.log('findPrime(' + n + '): ' + findPrime(n) + ' should equal ' + hardcodedPrimes[n]);
// n = 15
// console.log('findPrime(' + n + '): ' + findPrime(n) + ' should equal ' + hardcodedPrimes[n]);
// n = 101
// console.log('findPrime(' + n + '): ' + findPrime(n) + ' should equal ' + hardcodedPrimes[n]);
// n = 5
// console.log('findPrime(' + n + '): ' + findPrime(n) + ' should equal ' + hardcodedPrimes[n]);
// n = 168
// console.log('findPrime(' + n + '): ' + findPrime(n) + ' should equal ' + hardcodedPrimes[n]);
//
//
//
//
//
// // How long did it take our function to find 5 prime numbers?
// // Was that a short or long amount of time?
// // Did our function have to do a lot of work to find those 5 primes? What was the work?












// /*
// Find 10,000th prime
// */
//
// console.log(findPrime(10000));
// // console.log(findPrime(10000));
// // console.log(findPrime(10000));
//
//
//
//
// // How long does it take our function to find the 10,000th prime number?
// // What if our program looks for the 10,000th prime number twice?
// // 3 times?















// /*
// Memoize isPrime
// */
//
// var memFindPrime = memoize(findPrime);
// console.log(memFindPrime(10000));
// // console.log(memFindPrime(10000));
// // console.log(memFindPrime(10000));
//
// // How much time was saved? Why did it take less time?
