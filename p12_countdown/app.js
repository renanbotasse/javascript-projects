const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
  ];
  const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
  ];

  const giveaway = document.querySelector(".giveaway");
  const deadline = document.querySelector(".deadline");
  const items = document.querySelectorAll(".deadline-format h4");
  
//   let tempDate = new Date();  
//   let tempYear = tempDate.getFullYear;
//   let tempMonth = tempDate.getMonth;
//   let tempDay = tempDate.getDay;
//   const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

  let futureDate = new Date(2023, 3, 4,23,59,59);
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours(); 
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth();
  month = months[month];

  const date = futureDate.getDate();

  const weekday = weekdays[futureDate.getDay()];
  
  giveaway.textContent = `Will Lunch on ${month} ${date} (${weekday}) ${hours}:${minutes}:${minutes}`;

 
 const futureTime = futureDate.getTime();

 
 function getRemaningTime() {
	const today = new Date().getTime();
	const t = futureTime -  today;
	console.log(t);
	
	//1s = 1000ms
	//1m = 60s
	//1hr = 60min
	//1d = 24h

	//calculate all values in MS
	const oneDay = 24*60*60*1000;
	const oneHour = 60*60*1000;
	const oneMin = 60*1000;

	//calculate all VALUES
	let days = t / oneDay;
	days = Math.floor(days);

	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMin);
	let seconds = Math.floor((t % oneMin) / 1000);

	//set values ARRAY
	const values = [days, hours, minutes, seconds];

	function format(item) {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	}

	items.forEach(function (item, index) {
		item.innerHTML = format(values[index]);
	});

	if (t < 0) {
		clearInterval(countdown);
		deadline.innerHTML = `<h4 class="exprired"> ALREADY RELEASE </h4>`
	};
 	}

	//countdown

	let countdown = setInterval(getRemaningTime, 1000);

 getRemaningTime();