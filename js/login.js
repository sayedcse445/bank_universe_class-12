document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField=document.getElementById('user-mail')
    const email=emailField.value
    console.log(email);

    const pasField=document.getElementById('user-pass')
    const pass=pasField.value
    console.log(pass);

    if(email ==='abc@gmail.com' && pass ==='123456'){
      window.location.href='bank.html'
        console.log('Login Successfully');
    }else{
        console.log('Login Faild');
    }
    
})


