function borderEdit(){
  let rgbArr = []
  let width = 1;
  rgbArr.push(document.getElementById("rBorder").value);
  rgbArr.push(document.getElementById("gBorder").value);
  rgbArr.push(document.getElementById("bBorder").value);
  width = document.getElementById("widthBorder").value;
  document.getElementById("para").style.border = (""+ width + "px solid "+ rgb(...rgbArr));
}
function backgroundEdit(){
  let rgbArr = [];
  rgbArr.push(document.getElementById("rBackground").value);
  rgbArr.push(document.getElementById("gBackground").value);
  rgbArr.push(document.getElementById("bBackground").value);
  document.getElementById("para").style.backgroundColor = rgb(...rgbArr);
}
//Only returns 2 digits of hex
function valueToHex(baseTen){
  let hexValue = Number(baseTen).toString(16);
  if(hexValue.length < 2){hexValue = "0" + hexValue;}
  return hexValue;
}
//if calling with array: rgb(...arr) other wise rgb(#, #, #)
function rgb(r, g, b){
  return("#"+valueToHex(r)+valueToHex(g)+valueToHex(b));
}
