
$(function () {

  //Displays the current day
  var today = dayjs().format('MMM DD, YYYY');
  $('#currentDay').text(today)



  //Checks to see if the time-clock mathces up wih the current hour of the day
  $('.time-block').each(function () {
    var realTime = dayjs().hour()
    let id = parseInt($(this).attr("id").split("-")[1]);


    
    // Add class past, present, or future depending on the time.
    if (id < realTime) {
      $(this).addClass('past');
    } else if (id == realTime) {
      $(this).addClass('present');
    } else if (id > realTime) {
      $(this).addClass('future');
    }
  });
// Saves the users Input
  $('.saveBtn').click(function() {
    var userInput = $(this).siblings('.description').val();
    let id = $(this).parent().attr('id');
    localStorage.setItem(id, userInput);

  })
// Grabs the local storage key and gives a value to teh text area 
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));
  
});



