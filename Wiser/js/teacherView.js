// JavaScript Document for Teacher View of Wiser Site

var toggle = true;

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

function saveDraft() {
	var elements = document.getElementsByClassName("page");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.border = "green 3px dashed";
	}
	
	alert("Your book has been saved. You can pick up where you've left off by selecting this book in the Library.");
}

function saveFinished() {
	var elements = document.getElementsByClassName("page");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.border = "green 3px solid";
	}
	alert("Your book has been saved! Note: you can no longer edit this book, but you can read it anytime in the Library.");
	window.open("storybook.html");
}

function toggleAllocation() {
	if (toggle) {
		document.getElementById("allocationPopup").classList.remove("hidden");
		toggle = false;
	} else {
		document.getElementById("allocationPopup").classList.add("hidden");
		toggle = true;
	}
}

function smokeAndMirrors() {
	alert("Smoke and Mirrors: this doesn't actually do anything :)");
}