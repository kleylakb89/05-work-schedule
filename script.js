// TODO: Display current day at top of calendar
// TODO: Style timeblocks
// TODO: Color code timeblocks
// TODO: Save input textarea into local storage
// TODO: Keep input display on refresh

// TODO: Init function that fetches input data from local storage
// TODO: Convert times to military
// TODO: Click events for saving inputs
// TODO: Update HTML with proper tags and classes

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

schedIndex = 0;

function saveWork() {
    // TODO: Update time key with proper time input
    var schedNine = nineEl.val();
    var schedTen = tenEl.val();
    var schedEleven = elevenEl.val();
    var schedTwelve = twelveEl.val();
    var schedThirteen = thirteenEl.val();
    var schedFourteen = fourteenEl.val();
    var schedFifteen = fifteenEl.val();
    var schedSixteen = sixteenEl.val();
    var schedSeventeen = seventeenEl.val();

    var nine = JSON.parse(localStorage.getItem('hour-9')) || [];
    var ten = JSON.parse(localStorage.getItem('hour-10')) || [];
    var eleven = JSON.parse(localStorage.getItem('hour-11')) || [];
    var twelve = JSON.parse(localStorage.getItem('hour-12')) || [];
    var thirteen = JSON.parse(localStorage.getItem('hour-13')) || [];
    var fourteen = JSON.parse(localStorage.getItem('hour-14')) || [];
    var fifteen = JSON.parse(localStorage.getItem('hour-15')) || [];
    var sixteen = JSON.parse(localStorage.getItem('hour-16')) || [];
    var seventeen = JSON.parse(localStorage.getItem('hour-17')) || [];
    
    // TODO: Overwrite existing storage with matching time

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
    
    localStorage.setItem('hour-9', JSON.stringify(nine));
    localStorage.setItem('hour-10', JSON.stringify(ten));
    localStorage.setItem('hour-11', JSON.stringify(eleven));
    localStorage.setItem('hour-12', JSON.stringify(twelve));
    localStorage.setItem('hour-13', JSON.stringify(thirteen));
    localStorage.setItem('hour-14', JSON.stringify(fourteen));
    localStorage.setItem('hour-15', JSON.stringify(fifteen));
    localStorage.setItem('hour-16', JSON.stringify(sixteen));
    localStorage.setItem('hour-17', JSON.stringify(seventeen));

    displayWork();
}

function displayWork() {
    var nine = JSON.parse(localStorage.getItem('hour-9')) || [];
    var ten = JSON.parse(localStorage.getItem('hour-10')) || [];
    var eleven = JSON.parse(localStorage.getItem('hour-11')) || [];
    var twelve = JSON.parse(localStorage.getItem('hour-12')) || [];
    var thirteen = JSON.parse(localStorage.getItem('hour-13')) || [];
    var fourteen = JSON.parse(localStorage.getItem('hour-14')) || [];
    var fifteen = JSON.parse(localStorage.getItem('hour-15')) || [];
    var sixteen = JSON.parse(localStorage.getItem('hour-16')) || [];
    var seventeen = JSON.parse(localStorage.getItem('hour-17')) || [];

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

function displayDate() {
    dayEl.text(moment().format('dddd, MMMM Do'));
}

function currentTime() {
    var now = moment();
    var nineAm = moment('09:00:00', 'hh:mm:ss');
    var tenAm = moment('10:00:00', 'hh:mm:ss');
    console.log(now);
    console.log(nineAm);
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
    }
}

function init() {
    displayWork();
    displayDate();
    currentTime();
}


saveBtnEl.on('click', saveWork);

init();