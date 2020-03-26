$(document).ready(function() { //The code only run when the DOM is ready.  This is detected by jQuery//
  colorCell();
  $('#sizePicker').submit(function(event) { //The function executes every time that the event is triggered//
    event.preventDefault(); //The event happens before the actual submission, so we cancel the submission calling event.preventDefault()//
    let sizeData = $(this).serializeArray(); //sizeData variable set to the value of an array. $(this) is a query object
    sizeHeight = sizeData[0]["value"];
    sizeWidth = sizeData[1]["value"];
    $("#pixelCanvas").empty();
    makeGrid(sizeHeight, sizeWidth);
  });

  function makeGrid(height, width) {
    for (let i = 1; i <= height; i++) {
      $("#pixelCanvas").append("<tr></tr>");
      for (let j = 1; j <= width; j++) {
        $("#pixelCanvas").children().last().append("<td></td>");
      }
    }
  }

  function colorCell() {
    $('#pixelCanvas').click(function(e) {
      if (e.target.nodeName == 'TD') {
        const colorSelected = $('#colorPicker').val();
        $(e.target).css("background", colorSelected);
      }
    })
  }
});
