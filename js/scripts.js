//Back End
var countUp = function(target,increment){
  var resultArray = [];
  for (var counter = increment ; counter <= target ; counter += increment){
    resultArray.push(counter);
  }
  return resultArray;
}



// Front End
$(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    //input
    var target = parseInt($("#target").val());
    var increment = parseInt($("#increment").val());
    //output
    $("#output").text(countUp(target,increment));
  });
});
