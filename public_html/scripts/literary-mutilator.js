
// we assume that this input is a valid regular expression
function findPattern(pattern) {
	// trip the string and remove leading and trailing slashed
	pattern = pattern.trim();

	let strLen = pattern.length;
	if (str.charAt(0) === '/' && str.charAt(strLen-1)) {
		pattern = pattern.substring(1, strLen-2);
	}

}