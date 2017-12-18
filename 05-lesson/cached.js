var cached  = (function createCachable (getSquareRoot) {
	var prevArgs;
	return function getSquareRoot (a) {
		prevArgs = arguments;
		return Math.sqrt(a); 
	}
}());
cached(4);

// a simple function to add something
const getSquareRoot = (n) => Math.sqrt(n);
getSquareRoot(9);
// a simple memoized function to add something
const createCachable  = (getSquareRoot) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = getSquareRoot;
      cache[n] = result;
      return result;
    }
  }
}
// returned function from memoizedAdd
const cached = createCachable(getSquareRoot);

console.log(cached(9)); // calculated
console.log(cached(9)); // cached


-------------------
// a simple pure function to get a value adding 10
const add = (n) => (n + 10);
console.log('Simple call', add(3));

// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];  // just taking one argument here
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}
// creating a memoized function for the 'add' pure function
const memoizedAdd = memoize(add);
console.log(memoizedAdd(3));  // calculated
console.log(memoizedAdd(3));  // cached
console.log(memoizedAdd(4));  // calculated
console.log(memoizedAdd(4));  // cached