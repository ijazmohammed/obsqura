/*// Our countdown plugin takes a callback, a duration, and an optional message
$.fn.countdown = function (duration, message) {
    // If no message is provided, we use an empty string
    message = message || "";
    // Get reference to container, and set initial content
    var container = $(this[0]).html(duration + message);
    // Get reference to the interval doing the countdown
    var countdown = setInterval(function () {
        // If seconds remain
        if (--duration) {
            // Update our container's message
            container.html(duration + message);
        // Otherwise
        } else {
            // Clear the countdown interval
            clearInterval(countdown);
            // And fire the callback passing our container as `this`
            callback.call(container);   
        }
    // Run interval every 1000ms (1 second)
    }, 1000);

};

// Use p.countdown as container, pass redirect, duration, and optional message
$(".countdown").countdown(10, " seconds remaining");

*/

// COUNT v2
// set the date we're counting down to
var currentYear = new Date().getFullYear();
var target_date = new Date("Feb 22, " + currentYear).getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById("countdown");
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";  
 
}, 1000);

// SHINE
var shine = new Shine(document.getElementById('shine'));

      function handleMouseMove(event) {
        shine.light.position.x = event.clientX;
        shine.light.position.y = event.clientY;
        shine.draw();
      }


      window.addEventListener('mousemove', handleMouseMove, false);