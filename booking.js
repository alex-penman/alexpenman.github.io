// booking.js
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var lesson = document.getElementById('lesson').value;
    var date = document.getElementById('date').value;

    console.log('Name: ' + name);
    console.log('Lesson: ' + lesson);
    console.log('Date: ' + date);
});