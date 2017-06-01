function Seturl() {
  var number = document.getElementById('number').value;

    var url =  'http://localhost/webservices/api-countries.php?output=xml&id=';


  var urlset = url+number;

  var data = getResponse(urlset);
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(data,"text/xml");
  MakeTable(xmlDoc);

}
function MakeTable(xmlDoc) {
    var i;
    var table="<table><tr><th>id</th><th>country</th></tr>";
    var x = xmlDoc.getElementsByTagName("countries");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
        x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    table += "</table>";
    document.getElementById("content").innerHTML = table;
}
function getResponse(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
    return xhr.responseText;
}
function Gourl() {
  var url =  'http://localhost/webservices/api-employees.php?output=json';

  var data = getResponse(url);
  console.log(jsonTable(data));
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(data,"text/xml");





}



function jsonTable(responseText) {
  var json = JSON.parse(responseText);
  var jsonKeys = Object.keys(json);
  var jsonValues = Object.values(json);
  var table= "<table><tr><th>Name</th><th>Company</th></tr>";
  for(var i = 0; i < jsonValues.length; i++) {
    for(var key in jsonValues[i]) {
      table +=
        "<tr><td>" +
          jsonValues[i][key]['name']
        + "</td><td>" +
        jsonValues[i][key]['company']
       + "</td></tr>";
    }
  }
  table += "</table>";
  document.getElementById("content").innerHTML =  table;
}
