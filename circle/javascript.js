window.addEventListener("dblclick", chancheColor);
window.addEventListener("mousemove", positionMouse);
var arr = [];
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

  arr.push(x,y);
  console.log(arr);

    document.getElementById("circle").style.left = x + 'px' ;
    document.getElementById("circle").style.top = y + 'px';


}
