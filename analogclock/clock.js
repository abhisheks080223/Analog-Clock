setInterval(()=>{
    let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let second = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let hh=document.getElementById('hh');
let mm=document.getElementById('mm');
let ss=document.getElementById('ss');

let hr_dot=document.querySelector('hr_dot');
let min_dot=document.querySelector('min_dot');
let sec_dot=document.querySelector('sec_dot');


let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ampmValue = h >= 12 ? "PM" : "AM";

let am=h => 12 ? "pm" : "am";

// Convert 24-hour format to 12-hour format
if (h > 12) {
    h = h - 12;
}

// Add leading zero to single-digit hours, minutes, and seconds
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;


// Display the time and AM/PM on the webpage
hours.innerHTML = h +"<br> <spna>Hours</span>";
minutes.innerHTML = m +"<br> <spna>Minute</span>";
seconds.innerHTML = s +"<br> <spna>Seconds</span>";
ampm.innerHTML = ampmValue;

    hh.style.strokeDashoffset=440-(440*h)/12;   
    mm.style.strokeDashoffset=440-(440*m)/60;   
    ss.style.strokeDashoffset=440-(440*s)/60;   

    hr_dot.style.transform=`rotate(${h*30}deg)`;
    min_dot.style.transform=`rotate(${m*6}deg)`;
    sec_dot.style.transform=`rotate(${s*6}deg)`;
})