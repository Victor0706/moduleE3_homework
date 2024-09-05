function getTypeNumber(){
    let arr = [0, 1, 8, 78, false, 'str'];
    let evennumber = 0;
    let oddnumber = 0;
    let zero = 0;
    
    for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
              if (arr[i] === 0) {
                  zero += 1;
              } else if (arr[i] % 2 === 0) {
                  evennumber += 1;
              } else {
                  oddnumber += 1;
              }
          }
      }
    
    console.log('четных элементов: ', evennumber)
    console.log('нечетных элементов: ', oddnumber)
    console.log('нулей: ', zero)
  }
  getTypeNumber()