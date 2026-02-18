const boxes = document.getElementsByClassName("num");

function erase(event) {
    event.target.style.visibility = "hidden";
}

for (let i = 0; i < 5; i++) {
    box[i].addEventListener("click", erase);
}
