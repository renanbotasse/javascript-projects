document.addEventListener('DOMContentLoaded', () => {
	//card options
	const cardArray = [
	  {
		name: 'bulba',
		img: 'images/bulba.png'
	  },
	  {
		name: 'charmander',
		img: 'images/charmander.png'
	  },
	  {
		name: 'evee',
		img: 'images/evee.png'
	  },
	  {
		name: 'gengar',
		img: 'images/gengar.png'
	  },
	  {
		name: 'pikachu',
		img: 'images/pikachu.png'
	  },
	  {
		name: 'squirtle',
		img: 'images/squirtle.png'
	  },
	  {
		name: 'bulba',
		img: 'images/bulba.png'
	  },
	  {
		name: 'charmander',
		img: 'images/charmander.png'
	  },
	  {
		name: 'evee',
		img: 'images/evee.png'
	  },
	  {
		name: 'gengar',
		img: 'images/gengar.png'
	  },
	  {
		name: 'pikachu',
		img: 'images/pikachu.png'
	  },
	  {
		name: 'squirtle',
		img: 'images/squirtle.png'
	  }
	]
  
	cardArray.sort(() => 0.5 - Math.random())
  
	const grid = document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	let cardsChosen = []
	let cardsChosenId = []
	let cardsWon = []
  
	//create your board
	function createBoard() {
	  for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement('img')
		card.setAttribute('src', 'images/blank.png')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
		grid.appendChild(card)
	  }
	}
  
	//check for matches
	function checkForMatch() {
	  const cards = document.querySelectorAll('img')
	  const optionOneId = cardsChosenId[0]
	  const optionTwoId = cardsChosenId[1]
	  
	  if(optionOneId == optionTwoId) {
		cards[optionOneId].setAttribute('src', 'images/blank.png')
		cards[optionTwoId].setAttribute('src', 'images/blank.png')
		alert('You can not catch the same Pokemon!')
	  }
	  else if (cardsChosen[0] === cardsChosen[1]) {
		alert('You catch the Pokemon!')
		cards[optionOneId].setAttribute('src', 'images/pokedex.png')
		cards[optionTwoId].setAttribute('src', 'images/pokedex.png')
		cards[optionOneId].removeEventListener('click', flipCard)
		cards[optionTwoId].removeEventListener('click', flipCard)
		cardsWon.push(cardsChosen)
	  } else {
		cards[optionOneId].setAttribute('src', 'images/blank.png')
		cards[optionTwoId].setAttribute('src', 'images/blank.png')
		alert('The Pokemon run away')
	  }
	  cardsChosen = []
	  cardsChosenId = []
	  resultDisplay.textContent = cardsWon.length
	  if  (cardsWon.length === cardArray.length/2) {
		resultDisplay.textContent = 'You are the Master Pokemon!!'
	  }
	}
  
	//flip your card
	function flipCard() {
	  let cardId = this.getAttribute('data-id')
	  cardsChosen.push(cardArray[cardId].name)
	  cardsChosenId.push(cardId)
	  this.setAttribute('src', cardArray[cardId].img)
	  if (cardsChosen.length ===2) {
		setTimeout(checkForMatch, 500)
	  }
	}
  
	createBoard()
  })