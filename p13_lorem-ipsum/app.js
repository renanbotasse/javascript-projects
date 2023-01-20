const text = [
	`Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than man.`,
	`There is a time for many words, and there is also a time for sleep.`,
	`There is nothing more admirable than when two people who see eye to eye keep house as man and wife, confounding their enemies and delighting their friends.`,
	`A man who has been through bitter experiences and travelled far enjoys even his sufferings after a time`,
	`Be strong, saith my heart; I am a soldier; I have seen worse sights than this.`,
	`For a friend with an understanding heart is worth no less than a brother.`,
	`Sleep, delicious and profound, the very counterfeit of death`,
	`Men are so quick to blame the gods: they say that we devise their misery. But they	themselves- in their depravity- design grief greater than the griefs that fate assigns.`,
	`Ah how shameless – the way these mortals blame the gods. From us alone they say come all their miseries yes but they themselves with their own reckless ways compound their pains beyond their proper share`,
	`My name is Nobody.`,
	`The blade itself incites to deeds of violence.`,
	`And empty words are evil.`,
	`Each man delights in the work that suits him best.`,
	`some things you will think of yourself,...some things God will put into your mind.`,
	`There will be killing till the score is paid.`,
	`Few sons are like their fathers--most are worse, few better.`,
	`Take courage, my heart: you have been through worse than this. Be strong, saith my heart; I am a soldier; I have seen worse sights than this.`,
	`Why cover the same ground again? ... It goes against my grain to repeat a tale told once, and told so clearly.`,
	`Immortals are never alien to one another.`,
	`Sing in me, Muse, and through me tell the story of that man skilled in all ways of contending, the wanderer, harried for years on end`,	
  ];
  
  const form = document.querySelector(".lorem-form");
  const amount = document.getElementById("amount");
  const result = document.querySelector(".lorem-text");
  
  form.addEventListener("submit", function (e) {
	// A click on a form submit button – initiates its submission to the server.
  
	e.preventDefault();
  
	const value = parseInt(amount.value);
	const random = Math.floor(Math.random() * text.length);
  
	if (isNaN(value) || value <= 0 || value > 15) {
		result.innerHTML = `<p class="result">${text[random]}</p>`;
	  } else {
		let tempText = text.slice(0, value);
		tempText = tempText
		  .map(function (item) {
			return `<p class="result">${item}</p>`;
		  })
		  .join("");
		result.innerHTML = tempText;
	  }
	});