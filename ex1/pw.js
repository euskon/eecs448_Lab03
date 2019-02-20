function hideError(){
  let msg1 = document.getElementById("pwMatchError");
  msg1.style.visibility = "hidden";
  let msg2 = document.getElementById("pwLengthError");
  msg2.style.visibility = "hidden";
}
function isValidPW(){
  if(isMatch() && tooShort()){
    let msg1 = document.getElementById("pwMatchError");
    msg1.style.visibility = "hidden";
    let msg2 = document.getElementById("pwLengthError");
    msg2.style.visibility = "hidden";
    return true;
  } else{
    //return valid error message
    let pwMatchMsg = document.getElementById("pwMatchError");
    let tooShortMsg = document.getElementById("pwLengthError");
    if(!isMatch()){

      pwMatchMsg.style.visibility = "visible";
    } else {
      pwMatchMsg.style.visibility = "hidden";
    }
    if(!tooShort()){      
      tooShortMsg.style.visibility = "visible";
    } else {
      tooShortMsg.style.visibility = "hidden";
    }

  }
}
function isMatch(){
  let lhs = document.getElementById("pwField1").value;
  let rhs = document.getElementById("pwField2").value;
  if(lhs == rhs){
    return true;
  }
  return false;
}
//does it pass the length test?
function tooShort(){
  let lhs = document.getElementById("pwField1").value;
  let rhs = document.getElementById("pwField2").value;
  if(lhs.length < 8){
    return false;
  }
  return true;
}
//want list:
//make function that calls css changes when passwords dont match
//make text
