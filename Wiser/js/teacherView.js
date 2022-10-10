// JavaScript Document for Teacher View of Wiser Site

window.onload = function() {
	let title;
	let userInput = prompt("Enter your story title:", "Untitled");
	if (userInput==null || userInput=="") {
			title = "Untitled";
	} else {
		title = userInput;
	}

	document.getElementById("titleElement").innerHTML = title;
}
