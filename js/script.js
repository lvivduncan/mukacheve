"strict mode"

const menuButton = document.getElementById("menu-button")
const menu = document.getElementById("menu")

menuButton.addEventListener("click", () => {
	menu.classList.toggle("active")
	menuButton.classList.toggle("active")
})
