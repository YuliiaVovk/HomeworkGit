var cached  = (function createCachable (getSquareRoot) {
	var prevArgs;
	return function getSquareRoot (a) {
		prevArgs = arguments;
		return Math.sqrt(a); 
	}
}());
cached(4);