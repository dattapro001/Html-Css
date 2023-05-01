const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnlog = document.querySelector('.btnLogin');
const iconclose = document.querySelector('.icon-closed');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});


btnlog.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

aboutus.addEventListener('click',()=>{
    wrapper.classList.add('active-about');
});


