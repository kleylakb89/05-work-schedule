// TODO: Display current day at top of calendar
// TODO: Style timeblocks
// TODO: Color code timeblocks
// TODO: Save input textarea into local storage
// TODO: Keep input display on refresh

// TODO: Init function that fetches input data from local storage
// TODO: Convert times to military
// TODO: Click events for saving inputs

var saveBtnEl = $('.saveBtn');
var textEl = $('.description');

function saveWork() {
    var sched = {
        time: 9,
        work: textEl.val()
    }

    var work = JSON.parse(localStorage.getItem('schedule')) || [];

    work.push(sched);
    console.log(work);

    localStorage.setItem('schedule', JSON.stringify(work));
}

saveBtnEl.on('click', saveWork);