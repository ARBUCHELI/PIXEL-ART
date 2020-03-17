$(document).ready(function() {
  colorCell();
  $('#sizePicker').submit(function(event) {
    event.preventDefault();
    let sizeData = $(this).serializeArray();
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