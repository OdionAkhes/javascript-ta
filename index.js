function checkPrimeNo(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}

let isPrime;

isPrime = checkPrimeNo(7);
console.log(isPrime); 
isPrime = checkPrimeNo(15);
console.log(isPrime); 
isPrime = checkPrimeNo(23);
console.log(isPrime); 
isPrime = checkPrimeNo(13);
console.log(isPrime); 
