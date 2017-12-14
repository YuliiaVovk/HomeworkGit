function getSquareRoot(a) {
	return Math.sqrt(a); 
}

// a simple function to add something
var getSquareRoot = (n) => Math.sqrt(n); 
getSquareRoot(9);
// a simple memoized function to add something
const cached = (n) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = Math.sqrt(n);
      cache[n] = result;
      return result;
    }
  }
}
// returned function from memoizedAdd
cached(4);