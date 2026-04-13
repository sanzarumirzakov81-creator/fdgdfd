const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.style.opacity = "0.5");
        card.style.opacity = "1";
    });
});