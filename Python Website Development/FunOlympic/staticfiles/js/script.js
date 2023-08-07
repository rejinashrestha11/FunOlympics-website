const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye');

  eyeIcon.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
    }
  });

  const cpasswordInput = document.getElementById('cpassword');
  const ceyeIcon = document.getElementById('ceye');

  ceyeIcon.addEventListener('click', function() {
    if (cpasswordInput.type === 'password') {
      cpasswordInput.type = 'text';
      ceyeIcon.classList.remove('fa-eye');
      ceyeIcon.classList.add('fa-eye-slash');
    } else {
     cpasswordInput.type = 'password';
      ceyeIcon.classList.remove('fa-eye-slash');
      ceyeIcon.classList.add('fa-eye');
    }
  });
  document.getElementById("login-btn").addEventListener("click", function() {
    alert("Redirect to login page");
  });
  
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email= document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Perform login authentication here
    // You can use AJAX or fetch to send a request to the server
    
    alert("Logged in successfully!");

  });

 
  