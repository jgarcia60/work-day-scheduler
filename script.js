// var currentDate = moment().format(); //returns current date/time in format YYYY-MM-DD h:mm:ss a
console.log(moment().hour());
// console.log(moment().day()); //does same thing, but 0-6 with 0 starting on sunday
// console.log(moment().isoWeekday()); //returns an integer 1-7 where 1 represents Monday
//put current day above calendar
var suffix;
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[moment().month()];
// console.log(currentMonth);

var dayOfWeek = weekDays[moment().day()];
console.log("Today is: " + dayOfWeek);
console.log("Today is: " + weekDays[5]);

var currentDate =  moment().format("YYYY-MM-DD");
var todayArray = currentDate.split("-");
var dayOfMonth = todayArray[todayArray.length - 1];
dayOfMonth = parseInt(dayOfMonth);
// console.log(dayOfMonth);

$(document).ready(function() {
    if (dayOfMonth >= 4  && dayOfMonth <= 20 || dayOfMonth >= 24 && dayOfMonth < 31) {
        suffix = "th";
    } else if (dayOfMonth == 2 || dayOfMonth == 22) {
        suffix = "nd";
    } else if (dayOfMonth == 3 || dayOfMonth == 23) {
        suffix = "rd";
    } else suffix = "st";
    $("#currentDay").text(dayOfWeek + ", " + currentMonth + " " + dayOfMonth + suffix);
    
    //insert time blocks from 8AM - 5PM, with color coding
        //add new div with class row, make the row  expand 75% width of screen
        //make 3 columns, one for each time (width 2), one for the events (width 10) and one for save button (width 2)
            // for loop from i = 0 to 9 (8 hour day with 1 hour lunch) to create elements
            var hour = moment().hour();
            var pastOrPresent;
            var hourBlock;
            var pmOrAM = "AM";
            for (var i = 0; i < 10; i++) {
                if (i < 5) {
                    hourBlock = i + 8;
                    if (hourBlock == 12) {
                        pmOrAM = "PM";
                    }
                } else {
                    hourBlock = i - 4;
                    pmOrAM = "PM";
                }
                
                var newRow = $("<div>");
                newRow.addClass("row");
                    var timeColumn = $("<div>");
                    timeColumn.addClass("col-md-2" + " time-block");
                    timeColumn.text(hourBlock + pmOrAM);
                    newRow.append(timeColumn);
    
                    var eventColumn = $("<div>");
                    if (hour > i + 8) {
                        pastOrPresent = "past";
                    } else if (hour < i + 8) {
                        pastOrPresent = "future";
                    } else pastOrPresent = "present";
                    eventColumn.addClass("col-md-8");
                    eventColumn.attr("id", hourBlock);
    
                    var inputDiv = $("<textarea>");
                    inputDiv.addClass("form-control " + "hour " + pastOrPresent);
                    inputDiv.attr("id", "exampleFormControTextarea1");
                    inputDiv.attr("rows", 2);
                    eventColumn.append(inputDiv);
                    newRow.append(eventColumn);
    
                    var saveCol = $("<div>");
                    saveCol.addClass("col-md-2");
                    var saveBtn = $("<button>");
                    saveBtn.addClass("saveBtn i:hover");
                    saveBtn.attr("id", hourBlock * 10);
                    saveCol.append(saveBtn);
                    newRow.append(saveCol);
                    $(".container").append(newRow);
                
            }
            //text content for time block starts at 8 and resets to 1 after noon (PM status change at noon) 
            //add class or attribute for color code status.
            //add form in center column for user entry
            //add buttons to last column for save functionality
    
        //add local storage functionality for save buttons
});
    

//set up event listeners for the form save buttons and add to local storage
