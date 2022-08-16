import Countdown from "./countdown.js";
const gowRagnarok = new Countdown('09 November 2022 00:00:00 GMT-0300')

const elementTime = document.querySelectorAll('span');

setInterval(() => {
    elementTime[0].innerText = gowRagnarok.total.days;
    elementTime[1].innerText = gowRagnarok.total.hours;
    elementTime[2].innerText = gowRagnarok.total.minutes;
    elementTime[3].innerText = gowRagnarok.total.seconds;
}, 1000)