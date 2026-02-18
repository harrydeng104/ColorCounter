const box = document.getElementsByClassName("num");

function erase(event) {
    event.target.style.visibility = "hidden";
}

box.addEventListener("click", erase);