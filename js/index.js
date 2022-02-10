const userEmail = document.getElementById('user_email');
const userPassword = document.getElementById('User_password');
const loginBtn = document.getElementById('login_btn');

loginBtn.addEventListener('click', function () {
  if (userEmail.value == 'matir@bank.com' && userPassword.value == 'kazi') {
    window.location.href = 'ac.html'
  } else {
    alert('সঠিক ইনপুট দিন')
  }
})