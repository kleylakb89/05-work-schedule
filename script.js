// Query relevant selectors - save buttons, textareas, time blocks
var saveBtnEl = $('.saveBtn');
var textEl = $('.description');
var dayEl = $('#currentDay');

var nineEl = $('.nine');
var tenEl = $('.ten');
var elevenEl = $('.eleven');
var twelveEl = $('.twelve');
var thirteenEl = $('.thirteen');
var fourteenEl = $('.fourteen');
var fifteenEl = $('.fifteen');
var sixteenEl = $('.sixteen');
var seventeenEl = $('.seventeen');

// Function to accept input in textareas and save them to local storage
function saveWork() {
    // Fetches different textareas input values
    var schedNine = nineEl.val();
    var schedTen = tenEl.val();
    var schedEleven = elevenEl.val();
    var schedTwelve = twelveEl.val();
    var schedThirteen = thirteenEl.val();
    var schedFourteen = fourteenEl.val();
    var schedFifteen = fifteenEl.val();
    var schedSixteen = sixteenEl.val();
    var schedSeventeen = seventeenEl.val();

    // Parses from local storage
    var nine = JSON.parse(localStorage.getItem('hour-9')) || [];
    var ten = JSON.parse(localStorage.getItem('hour-10')) || [];
    var eleven = JSON.parse(localStorage.getItem('hour-11')) || [];
    var twelve = JSON.parse(localStorage.getItem('hour-12')) || [];
    var thirteen = JSON.parse(localStorage.getItem('hour-13')) || [];
    var fourteen = JSON.parse(localStorage.getItem('hour-14')) || [];
    var fifteen = JSON.parse(localStorage.getItem('hour-15')) || [];
    var sixteen = JSON.parse(localStorage.getItem('hour-16')) || [];
    var seventeen = JSON.parse(localStorage.getItem('hour-17')) || [];
    
    // Overwrites existing storage with matching time when textarea is updated

    nine.pop();
    nine.push(schedNine);
    ten.pop();
    ten.push(schedTen);
    eleven.pop();
    eleven.push(schedEleven);
    twelve.pop();
    twelve.push(schedTwelve);
    thirteen.pop();
    thirteen.push(schedThirteen);
    fourteen.pop();
    fourteen.push(schedFourteen);
    fifteen.pop();
    fifteen.push(schedFifteen);
    sixteen.pop();
    sixteen.push(schedSixteen);
    seventeen.pop();
    seventeen.push(schedSeventeen);
    
    // saves to local storage
    localStorage.setItem('hour-9', JSON.stringify(nine));
    localStorage.setItem('hour-10', JSON.stringify(ten));
    localStorage.setItem('hour-11', JSON.stringify(eleven));
    localStorage.setItem('hour-12', JSON.stringify(twelve));
    localStorage.setItem('hour-13', JSON.stringify(thirteen));
    localStorage.setItem('hour-14', JSON.stringify(fourteen));
    localStorage.setItem('hour-15', JSON.stringify(fifteen));
    localStorage.setItem('hour-16', JSON.stringify(sixteen));
    localStorage.setItem('hour-17', JSON.stringify(seventeen));

    // runs displayWork function so schedule is displayed
    displayWork();
}

// Function to display what's saved in local storage on page
function displayWork() {
    // Parsing values from local storage
    var nine = JSON.parse(localStorage.getItem('hour-9')) || [];
    var ten = JSON.parse(localStorage.getItem('hour-10')) || [];
    var eleven = JSON.parse(localStorage.getItem('hour-11')) || [];
    var twelve = JSON.parse(localStorage.getItem('hour-12')) || [];
    var thirteen = JSON.parse(localStorage.getItem('hour-13')) || [];
    var fourteen = JSON.parse(localStorage.getItem('hour-14')) || [];
    var fifteen = JSON.parse(localStorage.getItem('hour-15')) || [];
    var sixteen = JSON.parse(localStorage.getItem('hour-16')) || [];
    var seventeen = JSON.parse(localStorage.getItem('hour-17')) || [];

    // displaying text from parsed values in relevant time slots
    nineEl.text(nine);
    tenEl.text(ten);
    elevenEl.text(eleven);
    twelveEl.text(twelve);
    thirteenEl.text(thirteen);
    fourteenEl.text(fourteen);
    fifteenEl.text(fifteen);
    sixteenEl.text(sixteen);
    seventeenEl.text(seventeen);
    
}

// Function to display the current date from moment.js
function displayDate() {
    dayEl.text(moment().format('dddd, MMMM Do, h:mm a'));
}

// Function to determine the current time and adjust the classes of those time slots so they are color coded correctly
function currentTime() {
    // Looks at the current time when page loads and compares that time with other hour moments
    var now = moment();
    var nineAm = moment('09:00:00', 'hh:mm:ss');
    var tenAm = moment('10:00:00', 'hh:mm:ss');
    var elevenAm = moment('11:00:00', 'hh:mm:ss');
    var twelvePm = moment('12:00:00', 'hh:mm:ss');
    var onePm = moment('13:00:00', 'hh:mm:ss');
    var twoPm = moment('14:00:00', 'hh:mm:ss');
    var threePm = moment('15:00:00', 'hh:mm:ss');
    var fourPm = moment('16:00:00', 'hh:mm:ss');
    var fivePm = moment('17:00:00', 'hh:mm:ss');
    var sixPm = moment('18:00:00', 'hh:mm:ss');

    // Adds a class for .css styling based on the current time
    if (moment(now).isBefore(nineAm)) {
        textEl.addClass('future');
    } else if (moment(now).isBetween(nineAm, tenAm)) {
        nineEl.addClass('present');
        tenEl.addClass('future');
        elevenEl.addClass('future');
        twelveEl.addClass('future');
        thirteenEl.addClass('future');
        fourteenEl.addClass('future');
        fifteenEl.addClass('future');
        sixteenEl.addClass('future');
        seventeenEl.addClass('future');
    } else if (moment(now).isBetween(tenAm, elevenAm)) {
        nineEl.addClass('past');
        tenEl.addClass('present');
        elevenEl.addClass('future');
        twelveEl.addClass('future');
        thirteenEl.addClass('future');
        fourteenEl.addClass('future');
        fifteenEl.addClass('future');
        sixteenEl.addClass('future');
        seventeenEl.addClass('future');
    } else if (moment(now).isBetween(elevenAm, twelvePm)) {
        nineEl.addClass('past');
        tenEl.addClass('past');
        elevenEl.addClass('present');
        twelveEl.addClass('future');
        thirteenEl.addClass('future');
        fourteenEl.addClass('future');
        fifteenEl.addClass('future');
        sixteenEl.addClass('future');
        seventeenEl.addClass('future');
    } else if (moment(now).isBetween(twelvePm, onePm)) {
        nineEl.addClass('past');
        tenEl.addClass('past');
        elevenEl.addClass('past');
        twelveEl.addClass('present');
        thirteenEl.addClass('future');
        fourteenEl.addClass('future');
        fifteenEl.addClass('future');
        sixteenEl.addClass('future');
        seventeenEl.addClass('future');
    } else if (moment(now).isBetween(onePm, twoPm)) {
        nineEl.addClass('past');
        tenEl.addClass('past');
        elevenEl.addClass('past');
        twelveEl.addClass('past');
        thirteenEl.addClass('present');
        fourteenEl.addClass('future');
        fifteenEl.addClass('future');
        sixteenEl.addClass('future');
        seventeenEl.addClass('future');
    } else if (moment(now).isBetween(twoPm, threePm)) {
        nineEl.addClass('past');
        tenEl.addClass('past');
        elevenEl.addClass('past');
        twelveEl.addClass('past');
        thirteenEl.addClass('past');
        fourteenEl.addClass('present');
        fifteenEl.addClass('future');
        sixteenEl.addClass('future');
        seventeenEl.addClass('future');
    } else if (moment(now).isBetween(threePm, fourPm)) {
        nineEl.addClass('past');
        tenEl.addClass('past');
        elevenEl.addClass('past');
        twelveEl.addClass('past');
        thirteenEl.addClass('past');
        fourteenEl.addClass('past');
        fifteenEl.addClass('present');
        sixteenEl.addClass('future');
        seventeenEl.addClass('future');
    } else if (moment(now).isBetween(fourPm, fivePm)) {
        nineEl.addClass('past');
        tenEl.addClass('past');
        elevenEl.addClass('past');
        twelveEl.addClass('past');
        thirteenEl.addClass('past');
        fourteenEl.addClass('past');
        fifteenEl.addClass('past');
        sixteenEl.addClass('present');
        seventeenEl.addClass('future');
    }  else if (moment(now).isBetween(fivePm, sixPm)) {
        nineEl.addClass('past');
        tenEl.addClass('past');
        elevenEl.addClass('past');
        twelveEl.addClass('past');
        thirteenEl.addClass('past');
        fourteenEl.addClass('past');
        fifteenEl.addClass('past');
        sixteenEl.addClass('past');
        seventeenEl.addClass('present');
    } else if (moment(now).isAfter(sixPm)) {
        textEl.addClass('past');
    }
}

// Initializing function to display the items saved in local storage, today's date, and the color coding for the sections
function init() {
    displayWork();
    displayDate();
    currentTime();
}

// event listener for the save buttons
saveBtnEl.on('click', saveWork);

// starts the page with the init function
init();

// refreshes init function every one minute
setInterval(function(){
    init();
}, 60000);