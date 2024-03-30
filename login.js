 // Get the modal
 var login = document.getElementById('login-button');
 var signup = document.getElementById('signup-button');
 
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == login) {
         modal.style.display = "none";
     }
     if (event.target == signup) {
         modal.style.display = "none";
     }
 }