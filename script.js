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
console.log(hour);
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
    if (hour === 9) {
        nine.addClass('present').removeClass('future past');
    }
    if (hour === 10) {
        nine.addClass('present').removeClass('future past');
    }
    if (hour === 11) {
        nine.addClass('present').removeClass('future past');
    }
    if (hour === 12) {
        nine.addClass('present').removeClass('future past');
    }
    if (hour === 13) {
        nine.addClass('present').removeClass('future past');
    }
    if (hour === 14) {
        nine.addClass('present').removeClass('future past');
    }
    if (hour === 15) {
        three.addClass('present').removeClass('future past');
    }
    if (hour === 16) {
        nine.addClass('present').removeClass('future past');
    }
    if (hour === 17) {
        nine.addClass('present').removeClass('future past');
    }
    // Sets past class
    if (9 < hour) {
        nine.addClass('past').removeClass('future present');
    }
    if (10 < hour) {
        ten.addClass('past').removeClass('future present');
    }
    if (11 < hour) {
        eleven.addClass('past').removeClass('future present');
    }
    if (12 < hour) {
        twelve.addClass('past').removeClass('future present');
    }
    if (13 < hour) {
        one.addClass('past').removeClass('future present');
    }
    if (14 < hour) {
        two.addClass('past').removeClass('future present');
    }
    if (15 < hour) {
        three.addClass('past').removeClass('future present');
    }
    if (16 < hour) {
        four.addClass('past').removeClass('future present');
    }
    if (17 < hour) {
        five.addClass('past').removeClass('future present');
    }

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
}, 1);