jQuery(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault()
    var numb =parseInt($("input#number").val());
    console.log(numb);
    countr(numb)
  });
});

var countr = function(numb) {
  for (var i = 1; i <= numb; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {

  $("outp").append("<li>ping pong<li>");

}
else if (i % 5 === 0) {
  alert("pong");
}
else if (i % 3 === 0) {
  alert("ping");
}
else {
  alert(i);
}
}
};
