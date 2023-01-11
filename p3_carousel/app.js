//precisa ser criada uma lista com os objetos que serão utilizados para preencher o HTML
const reviews = [
{
	id: 1,
	game: "Metal Gear Solid 3",
	score: "Score 9.6",
	img: "./mgs3.jpg",
	synopsis: "There’s a reason a snake’s skeleton, and not a snake itself, features prominently in the title sequence of Snake Eater. This was the game that stripped the Metal Gear formula down to its very core and proved that it could still function even outside our expectations. It forced us to take what we knew about espionage and infiltration and learn how to apply it in a new, unfamiliar environment, and it did so with a bold and elegant understanding of its own systems. You could have all the stealth know-how and military training in the world, but out there in the unpredictable jungle of the Russian wilderness, you were exposed, vulnerable… a Naked Snake. And it worked. Snake Eater is arguably one of the most interesting love stories ever told in a game, one of the strangest and most exciting Cold War-era adventures, and one of the first games to truly make me reflect on my actions as a player. It manages to be tragic, sometimes devastatingly so, and yet still maintain that absurd comedic flair that I admire about this series. Any game that can make you emotional about climbing a ladder deserves some kind of recognition.",
},
{
	id: 2,
	game: "Silent Hill 2",
	score: "Score 9",
	img: "./sh.jpg",
	synopsis: "Silent Hill 2 was the first in the series to establish the town itself as a character – in a genre oversaturated with run-of-the-mill killers, zombies, aliens, and other more conventional adversaries, Silent Hill 2’s focus on horror in architecture, in the layout and personality of a space, of the human psyche turned tangible, was vastly more interesting to me. Most of all, it was scary – like, actually scary: an exploration of the depths of human depravity and the effects it has on the people and places around us that few video games have handled with such a disturbing grace and maturity.",
},
{
	id: 3,
	game: "Red Dead Redemption 2",
	score: "Score 10",
	img: "./rdr2.jpg",
	synopsis: "A sprawling Western that stands shoulder-to-shoulder with Grand Theft Auto V as one of gaming’s greatest open-world achievements, Red Dead Redemption 2 is a game of rare scope and even rarer quality. A beautiful ode to an ugly era, RDR2 combines Rockstar’s most authentic and lived-in open world ever with its most earnest storytelling to date, filling in the gaps with an astonishing array of deep systems and nearly endless emergent gameplay opportunities. Its slower pace allows us to binge on the world like a virtual museum but, when the lead starts flying, it puts the wild back in the west (and then some). Few games manage the level of uncompromising detail as Red Dead Redemption 2 does.",
},
{
	id: 4,
	game: "Final Fantasy VII",
	score: "Score 9.5",
	img: "./ffvii.jpg",
	synopsis: "Final Fantasy VII is a landmark JRPG for a variety of reasons, but many of its achievements have now been lost to the winds of time and technological progress. Yet, its age has done nothing to change its status as the series' most popular and beloved entry, which has come about thanks to its wide cast of detailed, emotionally-driven characters that journey through one of the most memorable worlds to emerge from Japan's development scene. The pacing of its continually timely tale is its masterstroke; Square allows you to slowly fall for its rag-tag bunch of eco-terrorists before introducing its main villain - the forever chilling Sephiroth - and then focusing the story on much more personal stakes, despite the looming apocalypse. While overall the story is heavy, the world thrives on its idiosyncrasies - a variety of bizarre enemies, comedic minigames, and absurdly sized swords. It's this combination of light and dark that makes Final Fantasy VII such an enduring classic.",
},
{
	id: 5,
	game: "Counter-Strike",
	score: "Score 8.9",
	img: "./cs.jpeg",
	synopsis: "Many of the things I value most in skill-based games, I value because of Counter-Strike: good level design, team-based dynamic, the dedication required to master it, a friendly sense of competition, and a solid sense of community. It taught me the joy of earning my victories in a game, but also the importance of learning from my failures. It’s the reason I love first-person shooters and the reason I stuck by PC games at a young age, and I owe it all to its earliest iterations.",
},
];

//pegamos todos os nome dos elementos do HTML e passamos para as variaveis abaixo
const img = document.getElementById("game-img");
const game = document.getElementById("game");
const score = document.getElementById("score");
const synopsis = document.getElementById("synopsis");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//iniciamos como o objeto 0, pq se não iria iniciar sem nada na pagina
let currentItem = 0;

//determina que será aberta a janela com o item dentro da função showGame (e na primeira vez que é carregado, carrega com o valor 0)
//DOMCONTENTLOADED obriga o JS a carregar a pagina
window.addEventListener('DOMContentLoaded', function() {
	showGame(currentItem)
});
//a função serve para pegar os valores do reviews e passar para uma novo objeto sem contaminar o original
//também faz a mudança da página original para o do item
function showGame(videogame) {
	const item = reviews[videogame];
	img.src = item.img;
	game.textContent = item.game;
	score.textContent = item.score;
	synopsis.textContent = item.synopsis;
}

nextBtn.addEventListener('click', function(){
currentItem++;
if(currentItem > reviews.length -1){
	currentItem = 0;
};
showGame(currentItem);
});


prevBtn.addEventListener('click', function(){
	currentItem--;
	if(currentItem < 0 ){
		currentItem = reviews.length - 1;
	};
	showGame(currentItem);
	});


randomBtn.addEventListener('click', function(){
	currentItem = Math.floor(Math.random() * reviews.length);
	showGame(currentItem);
})