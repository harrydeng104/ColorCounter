const boxes = document.getElementsByClassName("num");

function erase(event) {
    event.target.style.visibility = "hidden";
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", erase);
}
