let count = 0;
// let decrease
// let reset
// let increase

const value = document.querySelector('#value');
//com isso nós pegamos o contador no HTML - pq é o primeiro
const btns = document.querySelectorAll('.btn');
//nesse nós pegamos todos os botões

btns.forEach( function(btn) {
//para todos os itens do btns rodar a função 

	btn.addEventListener("click", function (e) {
		//quando um botão for clicado rodar a função
	const styles = e.currentTarget.classList;
	//styles é criado com o valor dos botões btns "<button class="btn reset">r e s e t</button>"
	if (styles.contains('decrease')){
		count--;
	}
	else if (styles.contains('increase')) {
		count++;
	}
	else {
		count = 0;
	}
	//faz as alterações toda vez que tem o click e manda alterar no html
	value.textContent = count;

});
});