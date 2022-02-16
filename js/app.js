// Login Page 
document.getElementById('submit-btn').addEventListener('click', function () {
    const inputEmail = document.getElementById('inputEmail');
     const emailValue = inputEmail.value;

     const inputPassword = document.getElementById('inputPassword');
     const passwordValue = inputPassword.value;

     if (emailValue == 'khelafate@islam.com' && passwordValue == 'islamia') {
         window.location.href = 'bank.html'
     }
})

document.getElementById('diposit-btn').addEventListener('click', function () {
    
})