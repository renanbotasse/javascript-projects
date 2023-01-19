const colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function() {
	const randonN = getRandonN();
	document.body.style.backgroundColor = colors[randonN];
	color.textContent = colors[randonN];
});

function getRandonN(){
	return Math.floor(Math.random() * colors.length)
}