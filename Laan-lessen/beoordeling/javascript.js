function set(zin) {
  var getal = document.getElementById("getal").value;

  if (getal >= 1 && getal <= 49) {
      show(getal, 'onvoldoende', 'red', zin);

  }else if (getal >= 50 && getal <= 59) {
    show(getal, 'matig', 'orange', zin);
  }else if (getal >= 60 && getal <= 74) {
    show(getal, 'voldoende', 'yellow', zin);
  }else if (getal >= 75 && getal <= 100) {
    show(getal, 'goed', 'green', zin);
  }else {
    document.getElementById("uitkomst").innerHTML = "toets is niet gemaakt";
  }


}

function show(Cijfer,Beoordeling,Color,zin) {
  var li = document.createElement("li");
  if (zin == 1) {
    var inputValue = "Het cijfer is " +  Cijfer  + " en is dus " + Beoordeling ;
  }else {
    var inputValue = "De Beoordeling is " +  Beoordeling  + ", want je cijfer is " + Cijfer ;
  }

  document.getElementById("uitkomstDeel").style.color = Color;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
}
