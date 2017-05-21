/*
  euler problem 1 
  sum the multiples of 3 and 5 from 1-1000
*/

var sum = 0;
for(var i = 0; i < 1000; i++) {
  if(i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum); //expected result 233168
