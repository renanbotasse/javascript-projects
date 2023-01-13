
const menu = [
	{
	  id: 1,
	  title: "Brazil 1970",
	  category: "national",
	  price: " #10 Pele",
	  img: "./images/item-1.jpeg",
	  desc: `FIFA World Cup`,
	},
	{
	  id: 2,
	  title: "Barcelona 10/11",
	  category: "league",
	  price:  "#10 Messi",
	  img: "./images/item-2.jpeg",
	  desc: `UEFA Champions League`,
	},
	{
	  id: 3,
	  title: "AC Milan 89-90",
	  category: "league",
	  price: "#9  Van Basten",
	  img: "./images/item-3.jpeg",
	  desc: `UEFA Champions League`,
	},
	{
	  id: 4,
	  title: "Arsenal 03/04",
	  category: "league",
	  price: "#14 Thierry Henry",
	  img: "./images/item-4.jpeg",
	  desc: `Premier League`,
	},
	{
	  id: 5,
	  title: "Real Madrid 59/60",
	  category: "league",
	  price: "#9  Di Stefano",
	  img: "./images/item-5.jpeg",
	  desc: `UEFA Champions League`,
	},
	{
	  id: 6,
	  title: "M. United 98/99",
	  category: "league",
	  price: "#19 Dwight Yorke",
	  img: "./images/item-6.jpeg",
	  desc: `UEFA Champions League`,
	},
	{
	  id: 7,
	  title: "Germany 1974",
	  category: "national",
	  price: "#5  Beckenbauer ",
	  img: "./images/item-7.jpeg",
	  desc: `FIFA World Cup`,
	},
	{
		id: 8,
		title: "Santos 1962",
		category: "league",
		price: "#10  Pele",
		img: "./images/item-8.jpeg",
		desc: `Intercontinental Cup`,
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
				<h4>${item.title}</h4>
				<h4 class="price">${item.price}</h4>
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