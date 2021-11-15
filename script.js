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
const date = moment().format('MMMM DD, YY');
const d = new Date();
let minutes = d.getMinutes();
let hour = d.getHours();
let originalHour = hour;
if (hour > 12) {
    hour = hour - 12;
}
if (minutes < 10) {
    minutes = '0' + minutes;
}
let time = hour + ':' + minutes;
currentDay.text(`It's now ` + time + ' on ' + date);
// END Current Date & Time END


// Changes Class of Present
if (nine === parseInt(nineTd.text())) {
    nine.addClass('present');
}
if (ten === parseInt(tenTd.text())) {
    ten.addClass('present');
}
if (eleven === parseInt(elevenTd.text())) {
    eleven.addClass('present');
}
if (twelve === parseInt(twelveTd.text())) {
    twelve.addClass('present');
}
if (one === parseInt(oneTd.text())) {
    one.addClass('present');
}
if (two === parseInt(twoTd.text())) {
    two.addClass('present');
}
if (three === parseInt(threeTd.text())) {
    three.addClass('present');
}
if (hour === parseInt(fourTd.text())) {
    four.addClass('present');
}
if (hour === parseInt(fiveTd.text())) {
    five.addClass('present');
}

if (17 > Math.floor(originalHour) < 9) {
    console.log('future ' + originalHour);
}

if (17 > Math.floor(originalHour) > 9) {
    console.log('past ' + Math.floor(originalHour));
}