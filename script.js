const box = document.getElementsByClassName("num")

function erase(event) {
    event.target.style.display = "none"
}

box.addEventListener("click", erase);