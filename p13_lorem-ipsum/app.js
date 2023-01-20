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
	`But humans cannot stay awake forever; immortal gods have set a proper time for everything that mortals do on earth.`,
	`I am at home, for I am he. I bore adversities, but in the twentieth year, I am ashore in my own land.`,
	`Alcinous.`,
	`To see the smoke from his loved palace rise, While the dear isle in distant prospect lies`,
	`If any man, so lost in his strength and prowess, pays you no respect —just pay him back . . . Do what you like. Whatever warms your heart.`,
	`Weapons themselves can tempt a man to fight.`,
	`If something rude of any kind was said, let the winds take it.`,
	`Endure, my heart; yea, a baser thing thou once didst bear`,
	`It has been an easy, and a popular expedient of late years, to deny the personal or real existence of men and things whose life and condition were too much for our belief`,
	`Grief wrapped around her, eating at her heart. The house was full of chairs but she could not bear to sit upright`,
	`The creation of genius always seem like miracles, because they are, for the most part, crated far out of the reach of observation.`,
	`It is hateful to me to tell a story over again, when it has been well told.`,
	`Her heart raced with joy to sleep with War`,
	`..for iron of itself draws a man thereto`,
	`Upon my word, just see how mortal men always put the blame on us gods! We are the source of evil, so they say - when they have only their own madness to think if their miseries are worse than they ought to be.`,
	`Then, O swineherd Eumaios, you said to him in answer: ‘This, it is too true, is the dog of a man who perished far away. If he were such, in build and performance, as when Odysseus left him behind, when he went to Ilion`,
	`Now as these two were conversing thus with each other, a dog who was lying there raised his head and ears. This was Argos, patient-hearted Odysseus' dog, whom he himself raised, but got no joy of him, since before that he went to sacred Ilion. In the days before, the young men had taken him 295 out to follow goats of the wild, and deer, and rabbits; but now he had been put aside, with his master absent`,
	`Human beings live for only a short time, and when a man is harsh himself, and his mind knows harsh thoughts, all men pray that sufferings will befall him hereafter while he lives; and when he is dead all men make fun of him. But when a man is blameless himself, and his thoughts are blameless, the friends he has entertained carry his fame widely to all mankind, and many are they who call him excellent.`,
	`Sleep is sweet, whomever it seizes, though he has cares.`,
	`The Greek word epos means simply “word” or “story” or “song.” It is related to a verb meaning “to say” or “to tell,” which is used (in a form with a prefix) in the first line of the poem. The narrator commands the Muse, “Tell me”: enn-epe. An epic poem is, at its root, simply a tale that is told.`,
	`The shock of encountering an ancient author speaking in largely recognizable language can make him seem more strange, and newly strange. I would like to invite readers to experience a sense of connection to this ancient text, while also recognizing its vast distance from our own place and time. Homer is, and is not, our contemporary.`,
	`I would disapprove of another hospitable man who was excessive in friendship, as of one excessive in hate. In all things balance is better.`,
	`No finer, greater gift in the world than that: When man and woman possess their home, two minds, two hearts that work as one. Despair to their enemies, a joy to all their friends. Their own best claim to glory.`,
	`The creations of genius always seem like miracles, because they are, for the most part, created far out of the reach of observation.`,
	`Odysseus is a migrant, but he is also a political and military leader, a strategist, a poet, a loving husband and father, an adulterer, a homeless person, an athlete, a disabled cripple, a soldier with a traumatic past, a pirate, thief and liar, a fugitive, a colonial invader, a home owner, a sailor, a construction worker, a mass murderer, and a war hero.`,
	`What I say will be a bit of boasting. The mad wine tells me to do it. Wine sets even a thoughtful man to singing, or sets him into softly laughing, sets him to dancing. Sometimes it tosses out a word that was better unspoken.`,
	`The business of wretches is wretched even in guarantee giving.`,
	`Homer’s language is markedly rhythmical, but it is not difficult or ostentatious. The Odyssey relies on coordinated, not subordinated syntax (“ and then this, and then this, and then this,” rather than “although this, because of that, when this, which was this, on account of that”)`,
	`Perverse mankind! whose wills, created free, Charge all their woes on absolute degree; All to the dooming gods their guilt translate, And follies are miscall'd the crimes of fate.`,
	`Achilles’ rebuke of Odysseus, in its pride and despair, resonates throughout the Odyssey. Yet rather than spreading a gloom over the rest of the poem, it is a constant background reminder. We are moved, as the poet describes them, by the simplest of things human life has to offer: a bath, a meal, a courteous welcome to a stranger, a conversation by the fire. There is a radiance that surrounds our brief human actions, a beauty that makes even the life of a beggar or a slave, from Achilles’ perspective, seem like a privilege. These simple things are the givens longed for by him and the other ghosts, those that would have wept to step barefoot into reality, That would have wept and been happy, have shivered in the frost And cried out to feel it again, have run fingers over leaves And against the most coiled thorn, have seized on what was ugly And laughed . . `,
	`oon as rosy-fingered morning came forth from the first grey dawn`,
	`Well, back in Troy, Odysseus and I always agreed in councils, with one mind. We gave the Argives all the best advice.`,
	`With that, the owl-eyed goddess flew away like a bird, up through the smoke.`,
	`Translation is the art of listening. In one ear is the sound of the original text, and in the other is a rhythm, wordless, waiting to find its voice. Somehow, eventually, the right words rise into the rhythm and become it, as if the listening created what one wanted to hear.`,
	`They made these improving remarks to one another, but Apollo leaned aside to say to Hermes:   “Son of Zeus, beneficent Wayfinder, would you accept a coverlet of chain, if only you lay by Aphrodite’s golden side?”   To this the Wayfinder replied, shining:   “Would I not, though, Apollo of distances! Wrap me in chains three times the weight of these, come goddesses and gods to see the fun; only let me lie beside the pale-golden one!”`,
	`All right then. Here's my story. Even though it plunges me into deeper grief than I feel now. But that's the way of the world, when one has been so far from home, so long away as I, roving over many cities of men, enduring many hardships.,`,
	`i always stand near you and take care of you, in all your hardships.`,
	`Bird life aplenty is found in the sunny air, not all of it significant.`,
	`Now left to man's ingratitude he lay, Unhoused, neglected in the public way; And where on heaps the rich manure was spread, Obscene with reptiles, took his sordid bed. He knew his lord; he knew, and strove to meet; In vain he strove to crawl and kiss his feet; Yet (all he could) his tail, his tears, his eyes, Salute his master, and confess his joys. Soft pity touch'd the mighty master's soul; Adown his cheek a tear unbidden stole, Stole unperceived: he turn'd his head and dried The drop humane: then thus impassion'd cried: "What noble beast in this abandon'd state Lies here all helpless at Ulysses' gate? His bulk and beauty speak no vulgar praise: If, as he seems, he was in better days, Some care his age deserves; or was he prized For worthless beauty? therefore now despised; Such dogs and men there are, mere things of state; And always cherish'd by their friends, the great." "Not Argus so, (Eumaeus thus rejoin'd,) But served a master of a nobler kind, Who, never, never shall behold him more!`,
	`Bird life aplenty is found in the sunny air, not all of it significant.`,
	`Men are so quick to blame the gods: they say that [the gods] devise their misery. But [men] themselves- in their depravity- design grief greater than the griefs that fate assigns`,
	`Sullen Telemachus said, “Mother, no, you must not criticize the loyal bard for singing as it pleases him to sing. Poets are not to blame for how things are; Zeus is`,
	`Odysseus`,
	`they arise from over-saturation with the "Iliad.`,
		
  ];
  
  const form = document.querySelector(".lorem-form");
  const amount = document.getElementById("amount");
  const result = document.querySelector(".lorem-text");
  
  form.addEventListener("submit", function (e) {
	// A click on a form submit button – initiates its submission to the server.
  
	e.preventDefault();
  
	const value = parseInt(amount.value);
	const random = Math.floor(Math.random() * text.length);
  
	if (isNaN(value) || value <= 0 || value > 61) {
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