import {isPrimeNumber} from './function.js';

export function myFunction() {
  var x = document.getElementById("Input").value;
  if (isPrimeNumber(Number(x))){
    document.getElementById("result").innerHTML = 'It is Prime';
  } else {
    document.getElementById("result").innerHTML = 'It is not Prime';
  }
  return false
}