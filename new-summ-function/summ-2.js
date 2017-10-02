function summ(a){
  'use strict'
  return function(b){
    return a+b;
  }
}
summ(17)(3);