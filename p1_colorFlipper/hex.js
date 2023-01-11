const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
let hexColor = "#";
for (let i = 0; i < 6; i++) {
	hexColor += hex[getRandonN()];
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;

});

function getRandonN(){
	return Math.floor(Math.random() * hex.length);
};

/* o hex faz mais ou menos a mesma coisa que o apps, a diferença é que quando clica
ele faz um loop e gera um código de 6 digitos que são interpretados scomo uma cor
por isso que substitui o mesmo hexColor no CSS e HTML.
/*