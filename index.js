const burger = document.querySelector('.social-media .burger');
const nav = document.querySelector('.sidebar ul');
const navLinks = document.querySelectorAll(".sidebar ul li");
// console.log("this is burger: ", burger);
// console.log("nav: ", nav);

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

