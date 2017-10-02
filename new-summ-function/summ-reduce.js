// create an array
var numbers = [7, 1, 10, 2];
   'use strict'
/* call reduce() on the array, passing a callback
that adds all the values together */
var result = numbers.reduce(function (accumulator, currentValue) {
     return accumulator + currentValue;
});

// log the result
console.log(result);