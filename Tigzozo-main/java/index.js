
var icon = document.getElementById("icon");

icon.onclick = function(){
document.body.classList.toggle("dark-theme");
}

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})