var count = 0;
function setcount() {
  var setcount = count++
  document.getElementById("count").innerHTML = setcount;

}
if(count === 100){
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "black";
  document.getElementById("count").style.color ="white";
  clearInterval(Timer);
}


var Timer = setInterval(setcount, 70);
