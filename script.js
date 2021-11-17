// DOM Elms
const container = $('.container');
const currentDay = $('#currentDay');
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
    let HOUR = hour;
    if (hour > 12) {
        hour = hour - 12;
    }
    if (HOUR >= 12) {
        time = hour + ':' + minute + ' pm';
    } else if (HOUR <= 12) {
        time = hour + ':' + minute + ' am';
    }
    // Gets Minutes
    minute = moment().get('minute');
    if (minute < 10) {
        minute = '0' + minute
    }

}, 1000);

$('.btn').click(function() {
    localStorage.setItem($(this).parent('.time-row').attr('id'), $(this).siblings('.fullWidth').children().val());
});

$(document).ready(function() {
    for (let i = 9; i < 18; i++) {
        $(`#${i}`).children('.fullWidth').children('.event').text(localStorage.getItem(i));
    }
});