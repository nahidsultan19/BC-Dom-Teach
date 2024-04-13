document.getElementById('login').addEventListener('click', function () {
    const inputEmail = document.getElementById('email');
    const emailField = inputEmail.value;
    
    const inputPassword = document.getElementById('password');
    const passwordField = inputPassword.value;

    if (emailField !== 'nahid@gmail.com' || passwordField !== '123456') {
        alert('Please enter your correct email and password');
    } else {
        window.location.href = 'index.html';
    }
 });