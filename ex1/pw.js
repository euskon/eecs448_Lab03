function isValidPW(){
  let input = document.getElementById("pwField1").value;
  console.log(input);
}
function isMatch(){
  let lhs = document.getElementById("pwField1");
  let rhs = document.getElementById("pwField2");
  if(lhs === rhs){
    return true;
  }
  return false;
}
