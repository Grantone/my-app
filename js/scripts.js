jQuery(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault()
    var numb = parseInt($("input#number").val());
    countr(numb)
  });
});

var countr = function(numb) {
  var output = []
  for (var i = 1; i <= numb; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      output.push("ping pong")
    } else if (i % 5 === 0) {
      output.push(", pong")
    } else if (i % 3 === 0) {
      output.push(", ping")
    } else {
      output.push(i)
    }
  }
  alert(output);
  $("#waaa").append("<li>" + output +"</li>");
};
