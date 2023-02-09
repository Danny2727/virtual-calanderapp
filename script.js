
$(function () {

  //Displays the current day
  var today = dayjs().format('MMM DD, YYYY');
  $('#currentDay').text(today)



  //
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

  $('.saveBtn').click(function() {
    var userInput = $(this).siblings('.description').val();
    let id = $(this).parent().attr('id');
    localStorage.setItem(id, userInput);

  })

  $('description').localStorage.getItem(userInput)
});



