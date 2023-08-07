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

function showForgotPasswordForm() {
  document.getElementById("forgot-password-dialog").style.display = "block";
}

function closeForgotPasswordForm() {
  document.getElementById("forgot-password-dialog").style.display = "none";
}

function showEmailSentDialog() {
  var sendButton = document.getElementById("send-button");
  sendButton.disabled = true;
  sendButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Verifying your email....';

  // Simulate a delay to mimic email verification process
  setTimeout(function() {
    sendButton.innerHTML = '<i class="fa fa-check"></i> Verified!';
    // openChangePasswordDialog();
    setTimeout(function() {
      sendButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Redirecting....';
      // openChangePasswordDialog();
    }, 2000);
    setTimeout(function() {
      openChangePasswordDialog();
    }, 4000);
  }, 3000);
  
}

function openChangePasswordDialog() {
  document.getElementById("forgot-password-dialog").style.display = "none";
  document.getElementById("email-sent-dialog").style.display = "block";
}

function closeEmailSentDialog() {
  document.getElementById("email-sent-dialog").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var forgotPasswordForm = document.getElementById("forgot-password-form");
  forgotPasswordForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Perform any necessary form validation here

    // Show the email sent dialog box
    showEmailSentDialog();
  });
});

function showPasswordChangedDialog() {
  document.getElementById("reset-password-form").style.display = "none";
  document.getElementById("password-changed-dialog").style.display = "block";
  
}

function closePasswordChangedDialog() {
  document.getElementById("reset-password-form").style.display = "block";
  document.getElementById("password-changed-dialog").style.display = "none";
}
