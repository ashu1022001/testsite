function validate(){
  var uname=document.getElementById("uname");
  var pass =document.getElementById("password");
   //checking valid user name
  if (uname.value.trim()=="")
  {
    alert("Blank username");
    uname.style.border="solid 3px red";
    document.getElementById("lbluser").style.visibility="visible";
    return false;
  }
  //checking valid password
  else if(pass.value.trim()=="")
  {
    alert("blank password");
    document.getElementById("lblpass").style.visibility="visible";
    return false;
  }
  else if(pass.value.trim().length<8){
    alert("password should be of  atleast 8 character");
    document.getElementById("lblpass").style.visibility="visible";
    return false;

  }
  else{
    return true;
  }


  
}