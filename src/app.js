const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
// const modifiedFood = foods.slice(1,4)
// console.log(modifiedFood)


function slice(start,end){
  let modifiedFood = []
  for (let i = start; i < end-1; i++){
    modifiedFood.push(foods[i])
  }
  return modifiedFood
}
console.log(slice(1,5))

// Progression 2:
function spliced(){
  foods.splice(2,0,'noodles','icecream')
  return foods
}

// Progression 3:

function isEven(number){
  return number%2===0
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function checkNumber(numberArray,operation){
  const newarray = numberArray.filter(operation)
  return newarray
}
console.log(checkNumber(numberArray,isPrime))

// Progression 4:
function reject(numberArray){
  // const newarray = numberArray.filter(operation)
  let nonprime = []
    numberArray.forEach((num) => {
    isPrime(num)? null
    : nonprime.push(num);
  })
   return nonprime
}
// function nonPrime(n){
//   if (n <= 1) {
//     return true;
//   }
//   for (var i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return true;
//     }
//   }
//   return false;
// }
function nonPrime(numberArray){
  return reject(numberArray)
}
console.log(nonPrime(numberArray))



// Progression 5:
const isEvenUsingLambda = ((ele) => {return ele%2===0}) 



// Progression 6:
function findSquareOfNumbers(arr){
  // let newarr = []
  return arr.map((value) =>{return value**2})
}
console.log(findSquareOfNumbers(myArray))


// Progression 7:
function multiply(arr){
    let res = arr.reduce(function(initial,value){
    return initial*value
  })
  return res
}
console.log(multiply(myArray))


function sumOfSquares(array){
  let res2 = myArray.map((value) => {return value**2})
  let res3 = res2.reduce((initial,current) => {
    return initial+current
  },0)
  return res3
}
console.log(sumOfSquares(myArray))


