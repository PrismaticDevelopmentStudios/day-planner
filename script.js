// DOM Elms
const container = $('.container');
const currentDay = $('#currentDay');
const nine = $('#nine');
const nineTd = $('#nineTd');
const ten = $('#ten');
const tenTd = $('#tenTd');
const eleven = $('#eleven');
const elevenTd = $('#elevenTd');
const twelve = $('#twelve');
const twelveTd = $('#twelveTd');
const one = $('#one');
const oneTd = $('#oneTd');
const two = $('#two');
const twoTd = $('#twoTd');
const three = $('#three');
const threeTd = $('#threeTd');
const four = $('#four');
const fourTd = $('#fourTd');
const five = $('#five');
const fiveTd = $('#fiveTd');
// const saveBtn = $('.icon');

// Current Date & Time
//Date
let date = moment().format('MMMM DD, YYYY');
//Time
let hour = moment().get('hour');
if (hour > 12) {
    hour = hour - 12;
}
let minute = moment().get('minute');
if (minute < 10) {
    minute = '0' + minute
}
let time = hour + ':' + minute;
currentDay.text(`It's ` + time + ' on ' + date);
setInterval(function() {
    //Date
    date = moment().format('MMMM DD, YYYY');
    //Time
    currentDay.text(`It's ` + time + ' on ' + date);
    hour = moment().get('hour');
    // Sets Present Class
    $('.time-row').each(function() {
        let row = parseInt($(this).attr('id'));
        if (hour === row) {
            $(this).addClass('present').removeClass('past future');
        } else if (row < hour) {
            $(this).addClass('past').removeClass('present future');
        } else if (row > hour) {
            $(this).addClass('future').removeClass('past present');
        }
    });

    // Sets time to 12 hour time
    if (hour > 12) {
        hour = hour - 12;
    }
    // Gets Minutes
    minute = moment().get('minute');
    if (minute < 10) {
        minute = '0' + minute
    }
    time = hour + ':' + minute;
}, 1000);