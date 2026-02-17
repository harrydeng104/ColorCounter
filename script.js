const box = document.getElementsByTagName("button");

function erase(event) {
    event.target.style.display = "none"
}

box.addEventListener("click", erase);