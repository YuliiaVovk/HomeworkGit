function summ(a){
  return function(b){
    return a+b;
  }
}
summ(17)(3);