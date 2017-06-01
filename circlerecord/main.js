var circle = document.getElementById('circle');
var arrY= [];
var arrX= [];
var counter = 0;
var i;
window.addEventListener('click',start);
window.addEventListener('dbclick',stop);
function start() {
    window.addEventListener("mousemove", savemove);
}

function stop() {
    window.removeEventListener("mousemove", savemove);
    window.removeEventListener("click", move);
    circle.style.display = "none";
    empty();
}

function savemove(event) {

  var x = Event.pageX;
  var  y = Event.pageY;

console.log(x);
console.log(y);
  arrX.push(x);
  arrY.push(y);
  document.addEventListener("click", move);
}

function move(event) {

    i = setInterval(function(){
        counter += 1;
        circle.style.left = arrX[counter] + "px";
        circle.style.top = arrY[counter] + "px";

        if (arr.length <= counter) {
            empty();
        }
    }, 10);
}

function empty() {
  var arrY= [];
  var arrX= [];
    counter = 0;
    clearInterval(i);
}
