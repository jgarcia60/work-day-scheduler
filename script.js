console.log("hello world");
var currentDate = moment().format(); //returns current date/time in format YYY-MM-DD h:mm:ss a
console.log(currentDate);

console.log(moment().day()); //does same thing, but 0-6 with 0 starting on sunday

console.log(moment().isoWeekday()); //returns an integer 1-7 where 1 represents Monday

//put current day above calendar

//insert time blocks from 8AM - 5PM, with color coding

//set up event listeners for the form save buttons and add to local storage
