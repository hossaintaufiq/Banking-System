document.getElementById('buttonSubmit').addEventListener('click', function(){
    // console.log('submit button clicked');

     const email_field = document.getElementById('user-email');
     const email=email_field.value;

    //  always use .value to get text from an input field 
    const password_field = document.getElementById('user-password');
    const password=password_field.value;

    //  console.log(email_field.value);
    //  console.log(password_field.value);

    //  verify email and password
    if(email==='hossaintaufiq@gmail.com' && password==='12345'){
        // console.log('valid user ');
        window.location.href = 'bank.html';

    }
    else if(email ==='hossaintaufiq@gmail.com' && password!='12345'){
        alert('Invalid password');
    }
    else if(email !='hossaintaufiq@gmail.com' && password==='12345'){
        alert('Invalid Email');
    }
    
    else {
        alert('invalid password');
    }
})