function toggleLike(button) {
    var unlikeButton = button.parentNode.querySelector('.unlike-button');
    button.classList.toggle('liked');
    unlikeButton.classList.remove('unliked');
  }
  
  function toggleUnlike(button) {
    var likeButton = button.parentNode.querySelector('.like-button');
    button.classList.toggle('unliked');
    likeButton.classList.remove('liked');
  }
  
  function toggleCommentBox(button) {
    var commentBox = button.parentNode.nextElementSibling;
    commentBox.style.display = commentBox.style.display === 'none' ? 'block' : 'none';
  }
  
  function toggleShareDialog() {
    var dialog = document.querySelector('.share-dialog');
  
    if (dialog.style.display === 'none') {
      dialog.style.display = 'block';
    } else {
      dialog.style.display = 'none';
    }
  }
  
  
  function addToWishlist(button) {
    button.classList.toggle('added-to-wishlist');
    if (button.classList.contains('added-to-wishlist')) {
      button.style.color = 'blue';
      showWishlistDialog();
    } else {
      button.style.color = '';
    }
  }
  
  function showWishlistDialog() {
    var wishlistDialog = document.querySelector('.wishlist-dialog');
    wishlistDialog.style.display = 'block';
  }
  
  function closeWishlistDialog() {
    var wishlistDialog = document.querySelector('.wishlist-dialog');
    wishlistDialog.style.display = 'none';
  }
  
  
  // Get the necessary elements
const commentBox = document.querySelector('.comment-box');
const commentsContainer = commentBox.querySelector('.comments');
const textarea = commentBox.querySelector('textarea');
const submitButton = commentBox.querySelector('.submit-comment-button');

// Function to handle comment submission
function submitComment() {
  const commentText = textarea.value;

  // Show loading state
  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';

  // Simulate sending comment to the server (replace with actual server-side code)
  setTimeout(() => {
    // Create the new comment element
    const newComment = document.createElement('div');
    newComment.className = 'comment';

    const profileImage = document.createElement('div');
    profileImage.className = 'profile-image';
    profileImage.innerHTML = '<img src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="Profile Image">';

    const commentContent = document.createElement('div');
    commentContent.className = 'comment-content';
    commentContent.innerHTML = '<span class="username">You:</span><span class="text">' + commentText + '</span>';

    newComment.appendChild(profileImage);
    newComment.appendChild(commentContent);

    // Append the new comment to the comments container
    commentsContainer.appendChild(newComment);

    // Clear the textarea
    textarea.value = '';

    // Reset submit button state
    submitButton.disabled = false;
    submitButton.innerHTML = 'Comment <i class="fa fa-paper-plane-o" aria-hidden="true"></i>';
  }, 1500); // Simulating delay for sending comment to the server
}

// Attach event listener to the submit button
submitButton.addEventListener('click', submitComment);
