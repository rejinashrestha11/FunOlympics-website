
    window.addEventListener("DOMContentLoaded", function() {
        // Get the current URL path
        var currentPath = window.location.pathname;

        // Get all the navigation links
        var navLinks = document.querySelectorAll(".navbar nav ul li a");

        // Loop through each navigation link
        for (var i = 0; i < navLinks.length; i++) {
            var link = navLinks[i];

            // Check if the link's href matches the current URL path
            if (link.getAttribute("href") === currentPath) {
                // Add the 'active' class to the parent li element
                link.parentNode.classList.add("active");
                break; // Stop the loop if a match is found
            }
        }
    });

