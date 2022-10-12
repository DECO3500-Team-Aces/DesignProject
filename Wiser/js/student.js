/* JavaScript Document for the Student View on Wiser */

window.onload = function() {
    let userInput = prompt("Please enter you class linking code:");

    if (userInput==null || userInput=="") {
        alert("Error, no code entered!");
        window.location.reload();
    } else {
        alert("Welcome student! You have been allocated page 7.")
    }
}