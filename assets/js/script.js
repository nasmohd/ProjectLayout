const togglePassword = document.querySelector('#togglePassword');
const togglePassword2 = document.querySelector('#togglePassword2');

const password = document.querySelector('#id_password')
const password2 = document.querySelector('#id_password2')

togglePassword.addEventListener ('click', function(e){
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
    
    console.log ('Ok');
})

togglePassword2.addEventListener ('click', function(e){
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
    
    console.log ('Ok');
})

