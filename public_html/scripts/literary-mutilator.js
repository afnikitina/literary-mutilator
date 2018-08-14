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

function replaceGeneric(flag) {
	const find = document.getElementById("find").value;
	const replace = document.getElementById("replace").value;
	paragraphs = document.querySelectorAll("p");
	paragraphs.forEach((el) => {
		el.innerHTML = el.innerHTML.replace(new RegExp(find,flag), replace);
	});
}

function replaceFirst() {
	replaceGeneric("i");
}

function replaceAll() {
	replaceGeneric("gi");
}

function resetAll() {
	window.location.reload(true);
}
