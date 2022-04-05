function val(){
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

if(username.value.trim()=="")
{
  alert("please enter a valid user name");
  
  document.getElementById("lbluser").style.visibility="visible";
  return false;
}
else if(email.value.trim()==""){
  alert("please enter a valid email");
  
  document.getElementById("lblemail").style.visibility="visible";
  return false;
}
else if(password.value.trim()==""){
  alert("please enter a valid Password");
  
  document.getElementById("lblpass").style.visibility="visible";
  return false;
}
else if(password2.value.trim()==""){
  alert("please enter a valid password confirmation");
  
  document.getElementById("lblpass2").style.visibility="visible";
  return false;
}
else if(password.value.trim().length<8){
  alert("password should be of  atleast 8 character");
  document.getElementById("lblpass").style.visibility="visible";
  return false;

}
else if(password.value.trim()!=password2.value.trim()){
  alert("password should match with the confirmation password");
  document.getElementById("lblpass").style.visibility="visible";
  document.getElementById("lblpass2").style.visibility="visible";
  return false;

}
else

{
  return true;
}
}