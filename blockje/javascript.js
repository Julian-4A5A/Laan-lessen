

function Veranderblok() {
  var Hoogte = document.getElementById("Hoogte").value;
  var Breedte = document.getElementById("Breedte").value;
  var e = document.getElementById("Kleur");
  var Kleur = e.options[e.selectedIndex].value;

  var Hoogte2 = Hoogte / 2;
  var Breedte2 = Breedte / 2;

  function Veranderblok() {

  }


  height(Hoogte, Hoogte2);
  width(Breedte, Breedte2);
  color(Kleur, "white");


}
document.addEventListener("keyup", function() {
  Veranderblok();

});
document.addEventListener("change", function() {
  Veranderblok();

});

function height(veranderHoogte, veranderHoogte2) {
  document.getElementById("Blokje").style.height = veranderHoogte + "px";
  document.getElementById("Blokje2").style.height = veranderHoogte2 + "px";
}
function width(veranderBreedte, veranderBreedte2) {
  document.getElementById("Blokje").style.width = veranderBreedte + "px";
  document.getElementById("Blokje2").style.width = veranderBreedte2 + "px";
}
function color(veranderKleur, veranderKleur2) {
  document.getElementById("Blokje").style.backgroundColor = veranderKleur;
  document.getElementById("Blokje2").style.backgroundColor = veranderKleur2;
}
