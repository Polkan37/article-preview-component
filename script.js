const button = document.querySelector('.share__button');
const container = document.querySelector('.share__container');

if (!button || !container) {
    console.warn('Share UI not initialized: missing .share__button or .share__container');
} else {
    button.addEventListener('click', () => {
        container.classList.toggle('active');
        button.classList.toggle('active');
    });
}
