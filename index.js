const form      = document.getElementById('form');
const username  = document.getElementById('username');
const email     = document.getElementById('email');
const password  = document.getElementById('password');
const password2 = document.getElementById('password2');
const showPassword = document.getElementById('showPassword');

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    validateInputs();
})

function validateInputs()
{
    const usernameValue = username.value.trim();
    const emailValue     = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
   
    if(usernameValue ==='')
    {
        setError(username,'Username is required')
    }
    else
    {
        setSuccess(username)
    }

    if(emailValue ==='')
    {
        setError(email,'Email is required')
    }
    else if (!isEmail(emailValue))
    {
        setError(email,'Plaese enter a valid email')
    }    
    else 
    {
        setSuccess(email);
    }

    if(passwordValue ==='')
    {
        setError(password,'Password is required')
    }
    else if(passwordValue == usernameValue)
    {
        setError(password,'Password is not same as username')
    }
    else
    {
        setSuccess(password)
    }

    if(password2Value ==='')
    {
        setError(password2,'Password is required')
    }
    else if (passwordValue !== password2Value)
    {
         setError(password2,'Password does not match')
    }
    else
    {
        setSuccess(password2)
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
};

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

function toggle(){
    if(password.type==='password')
    {
        password.type='text';
        showPassword.classList.remove('fa-eye-slash');
        showPassword.classList.add('fa-eye')
    }
    else{
        password.type='password';
        showPassword.classList.remove('fa-eye');
        showPassword.classList.add('fa-eye-slash')
    }
}