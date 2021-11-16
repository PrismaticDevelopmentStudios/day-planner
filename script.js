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

    // Sets Past Class
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
    } // Sets Future Class
    if (9 > hour) {
        five.addClass('future').removeClass('past present');
    }
    if (10 > hour) {
        nine.addClass('future').removeClass('past present');
    }
    if (11 > hour) {
        ten.addClass('future').removeClass('past present');
    }
    if (12 > hour) {
        eleven.addClass('future').removeClass('past present');
    }
    if (13 > hour) {
        one.addClass('future').removeClass('past present');
    }
    if (14 > hour) {
        two.addClass('future').removeClass('past present');
    }
    if (15 > hour) {
        three.addClass('future').removeClass('past present');
    }
    if (16 > hour) {
        four.addClass('future').removeClass('past present');
    }
    if (17 > hour) {
        five.addClass('future').removeClass('past present');
    }
    // Sets Present Class
    if (hour === 9) {
        five.addClass('present').removeClass('past future');
    }
    if (hour === 10) {
        nine.addClass('present').removeClass('past future');
    }
    if (hour === 11) {
        ten.addClass('present').removeClass('past future');
    }
    if (hour === 12) {
        eleven.addClass('present').removeClass('past future');
    }
    if (hour === 13) {
        one.addClass('present').removeClass('past future');
    }
    if (hour === 14) {
        two.addClass('present').removeClass('past future');
    }
    if (hour === 15) {
        three.addClass('present').removeClass('past future');
    }
    if (hour === 16) {
        four.addClass('present').removeClass('past future');
    }
    if (hour === 17) {
        five.addClass('present').removeClass('past future');
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