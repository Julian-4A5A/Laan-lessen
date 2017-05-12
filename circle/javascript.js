window.addEventListener("dblclick", chancheColor);
window.addEventListener("mousemove", positionMouse);
function chancheColor() {

  if (circle.className === '') {
    circle.className = 'extra';

  }else {
    circle.className = '';
  }
}
function positionMouse(Event) {
  var x = Event.pageX;
  var y = Event.pageY;

  document.getElementById("circle").style.left = x + 'px' ;
  document.getElementById("circle").style.top = y + 'px';
}
