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

  document.getElementById("register-btn").addEventListener("click", function() {
    alert("Redirect to registration page");
  });
  
  document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Perform login authentication here
    // You can use AJAX or fetch to send a request to the server
    
    alert("Logged in successfully!");

  });