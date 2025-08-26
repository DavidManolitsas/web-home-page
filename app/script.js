// Get the current date
const today = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dayOfWeekIndex = today.getDay();
const monthIndex = today.getMonth();

const formattedDate = `${days[dayOfWeekIndex]}, ${today.getDate()} ${months[monthIndex]} ${today.getFullYear()}`;

// Display the date in the HTML element
document.getElementById('current-date').textContent = formattedDate;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form input[type="text"]').focus();
});
