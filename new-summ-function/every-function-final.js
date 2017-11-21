function isEven(value, index, ar){
		'use strict';
	if (value % 2 == 0)
		return true;
	else
		return false;
}

var every = function(arr, callback, thisArg) {
  var i, length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    if (!callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};
every([2, 4, 6],isEven);