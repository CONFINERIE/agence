const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
});
