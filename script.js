// var currentDate = moment().format(); //returns current date/time in format YYYY-MM-DD h:mm:ss a
// console.log(moment().hour());
// console.log(moment().day()); //does same thing, but 0-6 with 0 starting on sunday
// console.log(moment().isoWeekday()); //returns an integer 1-7 where 1 represents Monday
//put current day above calendar
var suffix;
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[moment().month()];
// console.log(currentMonth);

var dayOfWeek = weekDays[moment().day()];
// console.log("Today is: " + dayOfWeek);
// console.log("Today is: " + weekDays[5]);

var currentDate =  moment().format("YYYY-MM-DD");
var todayArray = currentDate.split("-");
var dayOfMonth = todayArray[todayArray.length - 1];
dayOfMonth = parseInt(dayOfMonth);
// console.log(dayOfMonth);
// var events = JSON.parse(localStorage.getItem("events"));

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
                    var pEl = $("<p>");
                    pEl.addClass("p");
                    pEl.text(hourBlock + pmOrAM);
                    timeColumn.append(pEl);
                    newRow.append(timeColumn);
    
                    var eventColumn = $("<div>");
                    if (hour > i + 8) {
                        pastOrPresent = "past";
                    } else if (hour < i + 8) {
                        pastOrPresent = "future";
                    } else pastOrPresent = "present";
                    eventColumn.addClass("col-md-8 middle");
                    // eventColumn.attr("id", hourBlock);
    
                    var inputDiv = $("<textarea>");
                    inputDiv.addClass("form-control " + "hour " + pastOrPresent);
                    inputDiv.attr("id", hourBlock);
                    // inputDiv.val(input);
                    inputDiv.attr("rows", 3);
                    
                    
                    eventColumn.append(inputDiv);
                    newRow.append(eventColumn);
                    if (JSON.parse(localStorage.getItem(hourBlock)) !== null) {
                        var input = JSON.parse(localStorage.getItem(hourBlock));
                        console.log(input);
                        var tempString = "#" + hourBlock;
                        console.log("hourBlock: " + hourBlock);
                        inputDiv.val(input);
                        // $(tempString).val(input);
                    }
                    // inputDiv.val(JSON.localStorage.getItem(hourBlock));
    
                    var saveCol = $("<div>");
                    saveCol.addClass("col-md-2 right");
                    var saveBtn = $("<button>");
                    saveBtn.addClass("saveBtn i:hover");
                    saveBtn.attr("id", hourBlock * 10);
                    // saveBtn.attr("rows", 4);
                    var imgEl = $("<img>");
                    imgEl.attr("src", "https://img.icons8.com/small/2x/save.png"); //https://img.icons8.com/small/2x/save.png
                    saveBtn.append(imgEl);
                    saveCol.append(saveBtn);
                    newRow.append(saveCol);
                    $(".container").append(newRow);
                
            }

            $(".saveBtn").on("click", function(){
                var id = $(this).attr("id") / 10;
                console.log(id);
                var stringID = "#" + id;
                // $(stringID).text("testing");
                // var test = $(stringID).text();
                // console.log(test);
                localStorage.setItem(id, JSON.stringify($(stringID).val()));
            })
    
        //add local storage functionality for save buttons
});
    

//set up event listeners for the form save buttons and add to local storage
