// const editProfile = document.getElementById('edit-profile');
// const changePassword = document.getElementById('change-password');
// const editButton = document.getElementById('edit');
// const changeButton = document.getElementById('change');

// editButton.addEventListener('click', () => {
//   editProfile.classList.add('show');
//   changePassword.classList.remove('show');
// });

// changeButton.addEventListener('click', () => {
//   changePassword.classList.add('show');
//   editProfile.classList.remove('show');
// });
const editProfile = document.getElementById('edit-profile');
const changePassword = document.getElementById('change-password');
const editButton = document.getElementById('edit');
const changeButton = document.getElementById('change');

editButton.addEventListener('click', () => {
  if (editProfile.classList.contains('show')) {
    editProfile.classList.remove('show');
  } else {
    editProfile.classList.add('show');
    changePassword.classList.remove('show');
  }
});

changeButton.addEventListener('click', () => {
  if (changePassword.classList.contains('show')) {
    changePassword.classList.remove('show');
  } else {
    changePassword.classList.add('show');
    editProfile.classList.remove('show');
  }
});
