const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function () {
	//quando clica ele "aplica show-links" no CSS
	links.classList.toggle("show-links");
});