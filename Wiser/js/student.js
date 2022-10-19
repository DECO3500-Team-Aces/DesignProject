/* JavaScript Document for the Student View on Wiser */
var toggleBoard = true;

function toggleWhiteboard() {
    if (toggleBoard) {
        document.getElementById("whiteboard").classList.add("hidden");
        document.getElementById("bookPages").style.removeProperty("bottom");
        document.getElementById("bookPages").style.removeProperty("overflow");
        document.getElementById("bookPages").style.top = "100px";
        document.getElementById("bookPages").style.width = "90%";
        document.getElementById("bookPages").style.flexWrap = "wrap";

        toggleBoard = false;
    } else {
        document.getElementById("whiteboard").classList.remove("hidden");
        document.getElementById("bookPages").style.removeProperty("top");
        document.getElementById("bookPages").style.removeProperty("flex-wrap");
        document.getElementById("bookPages").style.bottom = "10px";
        document.getElementById("bookPages").style.width = "100%";
        document.getElementById("bookPages").style.overflow = "scroll";
        toggleBoard = true;
    }
}