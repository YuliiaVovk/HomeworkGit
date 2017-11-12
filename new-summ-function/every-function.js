//[2, 4, 6].every(isEven) // true
//[1, 2, 3].every(isEven) // false

function isEven(value, index, ar){
		'use strict';
	if (value % 2 == 0)
		return true;
	else
		return false;
}
function every(numbers,isEven){
if (numbers.every(isEven))
	return true;
else
	return false;
};
every([2, 4, 6],isEven);