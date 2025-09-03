// Get the current date
const today = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dayOfWeekIndex = today.getDay();
const monthIndex = today.getMonth();

let date = today.getDate();

if (date === 1) {
    date += "st";
} else if (date === 2) {
    date += "nd";
} else if (date === 3) {
    date += "rd";
} else {
    date += "th";
}

const formattedDate = `${days[dayOfWeekIndex]}, ${date} ${months[monthIndex]} ${today.getFullYear()}`;

// Display the date in the HTML element
document.getElementById('current-date').textContent = formattedDate;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form input[type="text"]').focus();
});
