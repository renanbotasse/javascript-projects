const colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];
//array para todas as cores do arco-iris que poderão ser utilizadas

const btn = document.getElementById("btn");
//btn passa para a constante BTN o valor do BTN no HTML, então, fazendo alteraçao nele, consegue aletrar o

const color = document.querySelector(".color");
//color passa para a constante COLOR o valor da colot no HTML

btn.addEventListener("click", function() {
	//quando clicar roda a seguinte função
	const randonN = getRandonN();
	//cria uam variavel de constante random, pela função de conseguir numero random
	document.body.style.backgroundColor = colors[randonN];
	//muda a cor do background no CSS
	color.textContent = colors[randonN];
	//muda o texto do HTMLK
});

function getRandonN(){
	return Math.floor(Math.random() * colors.length)
	//Usa o Flor pra conseguir de 0 a 1, multiplica pelo nº de itens que possui
}