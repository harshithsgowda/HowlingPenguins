function Show(id)
{
  if (document.getElementById(id).style.display == 'none') {
       document.getElementById(id).style.display = 'block';
  }
  else {
       document.getElementById(id).style.display = 'none';
  }
  var userRef = "bob";
  var passRef = "12bob";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef || pass == passRef) {
  alert("Connection")
  
  window.location("a.html");
  }
  else {
    alert("Wrong username or password");
    }
    };
  