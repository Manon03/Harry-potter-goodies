const choose = document.querySelector(".choose");
	console.log(choose);
	choose.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("choose");
});

document.getElementById("iconeBurger").addEventListener("click",toggleMenu);
function toggleMenu(e) {
	document.getElementById("menuBurger").classList.toggle("change");
}
