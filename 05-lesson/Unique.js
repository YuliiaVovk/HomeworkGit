//var strings = [1,2,3,4,2,3,1];
//var a = {};
//var b = [];
//var c = 'string';
//unique([a, b, c, b]) // [a, b, c]
//unique(['first', 'second', 'first', 'third']) // ['first', 'second', 'third']


function unique(arr) {
	return arr.filter((v, i, a) => a.indexOf(v) === i);
}

	var strings = [1,2,3,4,2,3,1];

console.log( unique(strings) ); 

//variant 2

function unique(array) {
	var result = Array.from(new Set(array));
	return result 
}
var strings = ['first', 'second', 'first', 'third'];

unique(strings);