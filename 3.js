function func1(number1){
    return function(number2){
      return number1 + number2
    }
};
const resultFunc = func1(1);
const result = resultFunc(2);
  
console.log(result)