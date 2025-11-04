function callTest() {
    alert('This will fire when called');
}

function toggleButton(id) {
    let button = document.getElementById(id)
    if (button.clicked == false) {
        button.innerHTML = "unpress me";
        button.clicked = true;
    } else {
        button.innerHTML = "press me";
        button.clicked = false;
    }
}