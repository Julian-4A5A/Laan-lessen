
window.addEventListener("click", move);
var arr = [];

function positionMouse(Event) {

  var position = {
    x : Event.pageX,
    y : Event.pageY
  }

  arr.push(position);
  console.log(arr);



}
function move() {
  window.addEventListener("mousemove", positionMouse);
  window.addEventListener("click", show);
}
function show() {
  var y ='';
  var x = '';
  window.removeEventListener("mousemove", positionMouse);
  for (var i = 0; i < arr.length; i++) {
    x += arr[i].x ;
    y += arr[i].y;
  }
document.getElementById("circle").style.left = x +'px'
document.getElementById("circle").style.top = y +'px'
}
