
let currentscreen = "";

function addToscreen(value) {
    currentscreen += value;
    document.getElementById("screen").value = currentscreen;
}

function clearscreen() {
    currentscreen = "";
    document.getElementById("screen").value = currentscreen;
}

function backspace() {
    currentscreen = currentscreen.slice(0, -1);
    document.getElementById("screen").value = currentscreen;
}

function calculate() {
    currentscreen = eval(currentscreen);
    document.getElementById("screen").value = currentscreen;
}



 
