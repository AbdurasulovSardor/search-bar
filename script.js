let inputBox = document.querySelector(".input-box")
let search = document.querySelector(".search")
let closeIcon = document.querySelector(".close-icon")

search.addEventListener("click", () => inputBox.classList.add("open"))
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"))