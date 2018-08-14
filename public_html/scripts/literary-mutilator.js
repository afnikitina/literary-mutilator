// change font color of all three paragraphs
function changeToRed() {
	paragraphs = document.querySelectorAll("p");
	paragraphs.forEach(el => el.style.color = "#C70039");
}

function changeToBlue() {
	paragraphs = document.querySelectorAll("p");
	paragraphs.forEach(el => el.style.color = "#231798");
}

function changeToGreen() {
	paragraphs = document.querySelectorAll("p");
	paragraphs.forEach(el => el.style.color = "#199542");
}

function changeToDefault() {
	paragraphs = document.querySelectorAll("p");
	paragraphs.forEach(el => el.style.color = "#000000");
}
















// we assume that this input is a valid regular expression
// function findPattern(pattern) {
// 	// trip the string and remove leading and trailing slashed
// 	pattern = pattern.trim();
//
// 	let strLen = pattern.length;
// 	if (str.charAt(0) === '/' && str.charAt(strLen-1)) {
// 		pattern = pattern.substring(1, strLen-2);
// 	}
//
// }