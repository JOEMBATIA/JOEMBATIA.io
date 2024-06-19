// Smooth scrolling using native JavaScript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Read more functionality
document.querySelectorAll('.read-more-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
        const content = this.previousElementSibling;
        content.classList.toggle('read-more-content');
        if (content.classList.contains('read-more-content')) {
            this.textContent = 'Read Less';
        } else {
            this.textContent = 'Read More';
        }
    });
});
