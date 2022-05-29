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

function saveWork() {
    // TODO: Update time key with proper time input
    var sched = {
        time: 9,
        work: textEl.val()
    }

    var work = JSON.parse(localStorage.getItem('schedule')) || [];
    
    // TODO: Overwrite existing storage with matching time
    work.push(sched);
    
    localStorage.setItem('schedule', JSON.stringify(work));
    displayWork();
}

function displayWork() {
    var work = JSON.parse(localStorage.getItem('schedule')) || [];
    console.log(work[0].time);
    textEl.text('just checking');
}

function init() {
    displayWork();
}

saveBtnEl.on('click', saveWork);

init();