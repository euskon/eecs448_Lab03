function isValidPW(){
  if(isMatch() && lengthCheck()){
    return true;
  }
  else{
    //
    alert("");
  }
}
function isMatch(){
  let lhs = document.getElementById("pwField1").value;
  let rhs = document.getElementById("pwField2").value;
  if(lhs === rhs){
    return true;
  }
  return false;
}
function lengthCheck(){
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
