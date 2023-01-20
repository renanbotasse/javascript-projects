
const menu = [
	{
	  id: 1,
	  name: "Brazil 1970",
	  category: "national",
	  best: "Pele",
	  img: "./images/item-1.jpeg",
	  desc: `Félix, Carlos Alberto, Everaldo, Brito, Piazza, Clodoaldo, Gérson, Rivellino, Jairzinho, Tostão and Pelé.`,
	},
	{
	  id: 2,
	  name: "Barcelona 10/11",
	  category: "league",
	  best:  "Messi",
	  img: "./images/item-2.jpeg",
	  desc: `Valdes, Puyol,	Touré, Piqué, Sylvinho, Xavi, Busquets, Iniesta, Messi, Eto'o and Henry.`,
	},
	{
	  id: 3,
	  name: "AC Milan 89/90",
	  category: "league",
	  best: "Van Basten",
	  img: "./images/item-3.jpeg",
	  desc: `Galli, Tassotti, Maldini, Colombo, Costacurta, Baresi, Ancelotti, Rijkaard, van Basten, Gullit and Evani.`,
	},
	{
	  id: 4,
	  name: "Arsenal 03/04",
	  category: "league",
	  best: "Thierry Henry",
	  img: "./images/item-4.jpeg",
	  desc: `Lehmann, Cole, Campbell, Toure, Lauren, Pires, Silva, Vieira, Ljunberg, Bergkamp and Henry.`,
	},
	{
	  id: 5,
	  name: "Real Madrid 59/60",
	  category: "league",
	  best: "Di Stefano",
	  img: "./images/item-5.jpeg",
	  desc: `Dominguez, Marquitos, Pachin, Vidal, Santamaria, Zarraga, Canario, Di Stefano, Puskas and Gento.`,
	},
	{
	  id: 6,
	  name: "M. United 98/99",
	  category: "league",
	  best: "Yorke",
	  img: "./images/item-6.jpeg",
	  desc: `Schmeichel, Neville, Johnsen, Stam, Irwin, Giggs, Beckham, Butt, Blomqvist, Yorke and Cole.`,
	},
	{
	  id: 7,
	  name: "Germany 1974",
	  category: "national",
	  best: "Beckenbauer ",
	  img: "./images/item-7.jpeg",
	  desc: `Maier, Vogts, Beckenbauer, Schwarzenbeck, Breitner, Bonhof, Overath, Hoeneß, Grabowski, Hölzenbein and Muller.`,
	},
	{
		id: 8,
		name: "Santos 1962",
		category: "league",
		best: "Pele",
		img: "./images/item-8.jpeg",
		desc: `Gilmar, Olavo, Mauro, Calvet, Dalmo, Lima, Zito, Dorval, Coutinho, Pelé and Pepe.`,
	  },
	  {
		id: 9,
		name: "Bayern Munich 75/76",
		category: "league",
		best: "Beckenbauer",
		img: "./images/item-9.jpeg",
		desc: `Maier, Hansen, Horsmann, Schwarzenbeck, Beckenbauer, Roth, Rummenigge, Dürnberger, Muller, Hoeneß and Kapellmann.`,
	  },
	  {
		id: 10,
		name: "Torino 47/48",
		category: "league",
		best: "Gabetto",
		img: "./images/item-10.jpeg",
		desc: `Bacgalupo, Ballarin, Toma, Loik, Rigamonti, Grezar , Menti, Castigliano, Gabetto, Martelli and Ossola.`,
	  },
	  {
		id: 11,
		name: "Argetina 2022",
		category: "national",
		best: "Messi",
		img: "./images/item-11.jpeg",
		desc: `Dibu Martinez, Molina, Romero, Otamendi, Tagliafico, E. Fernandez, De Paul, Mac Allister, Messi, J. Alvarez and Dimaria.`,
	  },
	  {
		id: 12,
		name: "Spain 2010",
		category: "national",
		best: "Xavi",
		img: "./images/item-12.jpeg",
		desc: `Cassilas, S. Ramos, Pique, Puyol, Capdevila, S. Busquetes, X. Alonso, Xavi, Iniesta, Pedro and D. Villa.`,
	  },
	  {
		id: 13,
		name: "Italy 2006",
		category: "national",
		best: "Totti",
		img: "./images/item-13.jpeg",
		desc: `Buffon, Zambrotta, Cannavaro, Materazzi, Grosso, Camoranesi, Gattuso, Pirlo, Perrota, Totti and L. Toni.`,
	  },
	  {
		id: 14,
		name: "Brazil 2002",
		category: "national",
		best: "Ronaldo",
		img: "./images/item-14.jpeg",
		desc: `Marcos, Lucio, Edmilson, Roque Junior, Cafu, G. Silva, Kleberson, R. Carlos, Ronaldinho, Rivaldo and Ronaldo.`,
	  },
	  {
		id: 15,
		name: "Uruguay 1950",
		category: "national",
		best: "Schiaffino",
		img: "./images/item-15.jpeg",
		desc: `Maspoli, Gonzalez, Tejera, Gambetta, Varela, Andrade, Ghiggia, Perez, Miguez, Schiaffino and Moran.`,
	  },
	  {
		id: 16,
		name: "Liverpool 18/19",
		category: "league",
		best: "Salah",
		img: "./images/item-16.jpeg",
		desc: `Alisson, Alexander-Arnold, Matip, Virgil, Robertson, Henderson, Fabinho, Wijnaldum, Salah, Firmino and Mane.`,
	  },
	  {
		id: 17,
		name: "Real Madrid 16/17",
		category: "league",
		best: "C. Ronaldo",
		img: "./images/item-17.jpeg",
		desc: `Navas, Carvajal, S. Ramos, Varane, Marcelo, Casemiro, T. Kroos, Modric, Isco, Benzema and C. Ronaldo.`,
	  },
	  {
		id: 18,
		name: "Chelsea 11/12",
		category: "league",
		best: "Drogba",
		img: "./images/item-18.jpeg",
		desc: `P. Cech, Bosingwa, D. Luiz, G. Cahill, A. Cole, Obi, Lampard, Kalou, Mata, Bertrand and Drogba.`,
	  },
	  {
		id: 19,
		name: "AC Milan 06/07",
		category: "league",
		best: "Kaka",
		img: "./images/item-19.jpeg",
		desc: `Dida, Oddo, Nesta, Maldini, Jankulovski, Gattuso, Pirlo, Ambrosini, Seedorf, Kaka and Inzaghi.`,
	  },
	  {
		id: 20,
		name: "Inter Milan 09/10",
		category: "league",
		best: "Sneijder",
		img: "./images/item-20.jpeg",
		desc: `J. Cesar, Maicon, Lucio, Samuel, Chivu, Zanetti, Cambiasso, Sneijder, Etoo, Milito and Pandev.`,
	  },

  ];
 

  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  const filterBtns = document.querySelectorAll(".filter-btn");
  
 
  window.addEventListener("DOMContentLoaded", function () {
	diplayMenuItems(menu);
  });
  
  filterBtns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
	  const category = e.currentTarget.dataset.id;
	  const menuCategory = menu.filter(function (menuItem) {
		if (menuItem.category === category) {
		  return menuItem;
		}
	  });
	  if (category === "all") {
		diplayMenuItems(menu);
	  } else {
		diplayMenuItems(menuCategory);
	  }
	});
  });
  
  function diplayMenuItems(menuItems) {
	let displayMenu = menuItems.map(function (item) {

	  return `<article class="menu-item">
			<img src=${item.img} alt=${item.title} class="photo" />
			<div class="item-info">
			  <header>
				<h4>${item.name}</h4>
				<h4 class="best">${item.best}</h4>
			  </header>
			  <p class="item-text">
				${item.desc}
			  </p>
			</div>
		  </article>`;
	});
	displayMenu = displayMenu.join("");

  
	sectionCenter.innerHTML = displayMenu;
  }