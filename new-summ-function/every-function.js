function isEven(element, index, array) {
  if (element % 2 === 0) return true;
  else return false;
}
[2, 4, 6].every(isEven) // true
[1, 2, 3].every(isEven) // false