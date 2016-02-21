module.exports = () => {
  return {
	dayMapper: {
		"0": "Sunday",
		"1": "Monday",
		"2": "Tuesday",
		"3": "Wednesday",
		"4": "Thursday",
		"5": "Friday",
		"6": "Saturday"
	},
	getFullDate: function () {
		var fullDate = new Date();
		return fullDate;
	},
	initialize: function () {
		this.getToday();
	},
	getToday: function () {
		var currDate = this.getFullDate().getDate();
		var currDay = (this.getFullDate().getDay()).toString();
		currDay = this.dayMapper[currDay];
		var currDayObj = {
			currDate: parseInt(currDate),
			currDay: currDay
		};
		this.validateCurrDay(currDayObj);
	},
	validateCurrDay: function (currDayObj) {
		console.log(this.getFullDate());
		console.log(currDayObj.currDay);
		//if (currDayObj.currDay != "Saturday") {	
		if (currDayObj.currDay === "Saturday") {
			var currWeekCount = currDayObj.currDate / 7;
			var msg = "";
			if (currWeekCount === 1) {
				msg = "Today is a Second Saturday and Bank is Closed in India";
			} else if (currWeekCount === 3) {
				msg = "Today is a Fourth Saturday and Bank is Closed in India";
			} else {
				msg = "Today is a not a Second or Fourth Saturday and Bank is in operation in India";
			}
			console.log(msg);
		} else if (currDayObj.currDay === "Sunday") {
			console.log("Today is Sunday and Bank is Closed");
		} else {
			var currDate = this.getFullDate().getDate();
			console.log("Today Bank will be in operation");
		}
	}
  };
};