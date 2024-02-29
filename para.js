document.addEventListener('DOMContentLoaded', function() {
    const seeMoreButtons = document.querySelectorAll('.see-more');

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fullDescription = this.previousElementSibling;
            fullDescription.classList.toggle('full-description');
            if (fullDescription.classList.contains('full-description')) {
                this.textContent = 'See less';
            } else {
                this.textContent = 'See more';
            }
        });
    });
});
