function primeNumber(a){
    let primeNumber;
    let result;
    primeNumber = true;

    if(a <= 1000 && a > 1) {
      for(let i = 2; i < a; i = i + 1) {
        if(a % i === 0){
          primeNumber = false;
        }
      }
        result = primeNumber ? `Число ${a} - простое число` : `Число ${a} - составное число`;
        console.log(result)
    } else if (a > 1000) {
        result = `данные неверны`;
        console.log(result)
    }
    return result;
}
primeNumber()