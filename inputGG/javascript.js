function Send() {
  var text = document.getElementById("Text").value;
  
  var result = text.replace(/a/gi,"!");
  var result1 = result.replace(/e/gi,"@");
  var result2 = result1.replace(/o/gi,"#");
  var result3 = result2.replace(/u/gi,"$");
  var result4 = result3.replace(/i/gi,"%");
  document.getElementById("Text").innerHTML = result4;
}
