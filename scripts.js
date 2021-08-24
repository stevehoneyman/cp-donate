// Check js is running
var dateTime = new Date();
console.log('loading from scripts.js in cp-donate on : ' + dateTime);

$(document).ready(function() {
  $('.amount li').on('click', function() {
     $(this).next().toggleClass('show-data');
     // console.log('clicked');
  }); // end on click
}); // close doc ready
