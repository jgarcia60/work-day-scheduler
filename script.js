console.log("hello world");
var currentDate = moment().format(); //returns current date/time in format YYYY-MM-DD h:mm:ss a
console.log(currentDate);

console.log(moment().day()); //does same thing, but 0-6 with 0 starting on sunday

console.log(moment().isoWeekday()); //returns an integer 1-7 where 1 represents Monday

//put current day above calendar
var suffix;
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[moment().month()];
console.log(currentMonth);

var dayOfWeek = weekDays[moment().day()];
console.log("Today is: " + dayOfWeek);
console.log("Today is: " + weekDays[5]);

var currentDate =  moment().format("YYYY-MM-DD");
var todayArray = currentDate.split("-");
var dayOfMonth = todayArray[todayArray.length - 1];
dayOfMonth = parseInt(dayOfMonth);
console.log(dayOfMonth);

if (dayOfMonth >= 4  && dayOfMonth <= 20 || dayOfMonth >= 24 && dayOfMonth <= 31) {
    suffix = "th";
} else if (dayOfMonth == 2 || dayOfMonth == 22) {
    suffix = "nd";
} else if (dayOfMonth == 3 || dayOfMonth == 23) {
    suffix = "rd";
} else suffix = "st";
$("#currentDay").text(dayOfWeek + ", " + currentMonth + " " + dayOfMonth + suffix);

//insert time blocks from 8AM - 5PM, with color coding


//set up event listeners for the form save buttons and add to local storage
