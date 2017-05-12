
function Seturl() {
  var number = document.getElementById('number').value;

    var url =  'https://webservices-demo-finewebdev.c9users.io/api-countries.php?output=xml&id=';


  var urlset = url+number;

  var data = getResponse(urlset);
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(data,"text/xml");
  var LandNaam = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
  document.getElementById('content').innerHTML = LandNaam;
}
function getResponse(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  //show(xhr.responseText);
  return xhr.responseText;
}
function show(data) {

}
