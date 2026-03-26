const button = document.querySelector('.share__button');
const container = document.querySelector('.share__container');

button && button.addEventListener('click', () => {
    container.classList.toggle('active');
    button.classList.toggle('active');
});
