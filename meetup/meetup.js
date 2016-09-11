//month 0-11 index
//expect(meetupDay(2013, 4, 'Monday', 'teenth')).toEqual(new Date(2013, 4, 13));
var meetupDay = function(yearInt, monthInt, dayStr, occurence) {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayInt = weekdays.indexOf(dayStr);   

    var firstTeenth = 13;
    if(occurence == "teenth") {
        var startingDate = new Date(yearInt, monthInt, firstTeenth);
        var startingWeekday = startingDate.getDay(); //0-6 starting w/ Sunday
        if(dayInt >= startingWeekday) {
            return new Date(yearInt, monthInt, firstTeenth + (dayInt - startingWeekday));
        } else {
            return new Date(yearInt, monthInt, firstTeenth + (7 - (startingWeekday - dayInt)));
        }
    } else if(occurence == "last") {
        var lastDay = new Date(yearInt, monthInt + 1, 0);
        var lastWeekday = lastDay.getDay();
        if(dayInt <= lastWeekday) {
            return new Date(yearInt, monthInt, lastDay.getDate() - (lastWeekday - dayInt));
        } else {
            return new Date(yearInt, monthInt, lastDay.getDate() - (7 - (dayInt - lastWeekday)));
        }
    } else {
        var firstDate = new Date(yearInt, monthInt, ordinalLookup[occurence]);
        var firstWeekday = firstDate.getDay();
        var targetDayInt;
        if(dayInt >= firstWeekday) {
            targetDayInt = firstDate.getDate() + (dayInt - firstWeekday);
        } else {
            targetDayInt = firstDate.getDate() + (7 - (firstWeekday - dayInt));
        }
        var targetDate = new Date(yearInt, monthInt, targetDayInt);
        if(firstDate.getMonth() != targetDate.getMonth()) {
            throw "OOPS";
        } else {
            return targetDate;
        }
    }
};

var ordinalLookup = {
    "1st": 1,
    "2nd": 8,
    "3rd": 15,
    "4th": 22,
    "5th": 28
};

module.exports = meetupDay;