const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const main = document.getElementById('main'); 

signUpBtn.addEventListener('click',()=>{
    main.classList.add('right-panel-active');
    
});


signInBtn.addEventListener('click',()=>{
    main.classList.remove('right-panel-active');
    
});
