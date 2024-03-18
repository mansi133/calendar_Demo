let date = new Date();

const Render_code = () => {
	date.setDate(1);//set date start from 1
	let day = date.getDay();// get current day of week

	//array list to store month instead of index 
    let curr_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let today = new Date();// object gives current date 
	document.getElementById("date_mon_yr").innerHTML = today.toDateString(); 
	document.getElementById("month_name").innerHTML = curr_months[date.getMonth()];

	let cells = "";
	let end_date = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDate(); // it can be 28 ,29, 30, 31 

	let prevMonthEndDate = new Date(
		date.getFullYear(),
		date.getMonth(),
		0
	).getDate();// to fill blank space and put prev 5  days of prev month  in week 

	for (let x = (day === 0 ? 6 : day); x > 0; x--) {
		cells += "<div class='disable'>" + (prevMonthEndDate - x + 1) + "</div>";
	} // if current day is sun start counting from sat otherwise dayitself

	for (let i = 1; i <= end_date; i++) {
		if (i == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear()) {
			cells += "<div class='today'>" + i + "</div>";
		} else {
			cells += "<div>" + i + "</div>";
		}
	}// if its today month day and year add style of today class
	document.getElementsByClassName("days")[0].innerHTML = cells;
}

const move_Month = (para) => {
	if (para == 'prev') {
		date.setMonth(date.getMonth() - 1);
	} else if (para == 'next') {
		date.setMonth(date.getMonth() + 1);
	}// adjust month acc to prev and next 
	Render_code();
}