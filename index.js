const burger = document.querySelector('.social-media .burger');
const nav = document.querySelector('.sidebar ul');

// console.log("this is burger: ", burger);
// console.log("nav: ", nav);

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});