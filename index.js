// Create a method to check the number is odd or even
function isOdd(Number) {
  let num = Number % 2;
  let result = num == 1;
  return result;
}

console.log(isOdd(2));
console.log(isOdd(45));
console.log(isOdd(2342));

//Create a method to return a larger number

function larger(Num1, Num2) {
  if (Num1 > Num2) {
    return Num1;
  } else {
    return Num2;
  }
}

console.log(larger(45, 87));

//Convert Celsius to Frhrenhiet

function toFahrenhiet(CelsiusValue) {
  return (9 / 5) * CelsiusValue + 32;
}

console.log(toFahrenhiet(39));
