$(document).ready(function() { //The code only run when the DOM is ready.  This is detected by jQuery//
  colorCell(); //Select color input//
  $('#sizePicker').submit(function(event) { //The function executes every time that the event is triggered//
    event.preventDefault(); //The event happens before the actual submission, so we cancel the submission calling event.preventDefault()//
    let sizeData = $(this).serializeArray(); //(let) is used to declare local variables.  sizeData variable set to the value of an array.// 
    //$(this) ends up in the part of the jQuery constructor that takes care of a supplied DOMElement.//
    //Used to create a JavaScript array of objects that is ready to be encoded as a JSON string.//
    sizeHeight = sizeData[0]["value"]; //Place Height in the first position of the array (data entered by the user//
    sizeWidth = sizeData[1]["value"];  //Place Width in the second position of the array (data entered by the user//
    $("#pixelCanvas").empty(); //removes all child nodes and content from the selected elements.//
    makeGrid(sizeHeight, sizeWidth); //function makeGrid that takes as argument, the parameters sizeHeight and sizeWidth.//
  });

  function makeGrid(height, width) {
    for (let i = 1; i <= height; i++) {
      $("#pixelCanvas").append("<tr></tr>"); //Adds rows to the grid//
      for (let j = 1; j <= width; j++) {
        $("#pixelCanvas").children().last().append("<td></td>"); //Adds columns to the grid//
      }
    }
  }

  function colorCell() {
    $('#pixelCanvas').click(function(e) { //evenHandler clik//
      if (e.target.nodeName == 'TD') { //Selects a cell//
        const colorSelected = $('#colorPicker').val();
        $(e.target).css("background", colorSelected); //Colors the cell with the selected color//
      }
    })
  }
});
