// Login Page 
console.log(document.getElementById('submit-btn'))
document.getElementById('submit-btn').addEventListener('click', function () {
    const inputEmail = document.getElementById('inputEmail');
     const emailValue = inputEmail.value;

     const inputPassword = document.getElementById('inputPassword');
     const passwordValue = inputPassword.value;

     if (emailValue == 'khelafate@islam.com' && passwordValue == 'islamia') {
         window.location.href = 'bank.html'
     }
})



// const diposit = document.getElementById('diposit-btn');
// diposit.addEventListener('click', function () {
//     console.log("first")
// })

// const submit = document.getElementById('submit-btn');

// submit.addEventListener('click', function () {
//     console.log("submit")
// })