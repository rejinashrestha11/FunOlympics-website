function showDialog() {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "block";
  }
  
  function closeDialog() {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "none";
    document.getElementById("contactForm").reset();
  }
  