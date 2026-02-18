const boxes = document.getElementsByClassName("num");

function colorChange(event) {
    event.target.style.backgroundColor = "lightgreen";
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", colorChange);
}
