// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Spinner fade out effect on page load
window.addEventListener('load', function() {
    setTimeout(function() {
        const spinner = document.querySelector('.spinner');
        spinner.style.opacity = '0';
        spinner.style.transition = 'opacity 1s ease';
        setTimeout(function() {
            spinner.style.display = 'none';
        }, 1000); // 1 second transition
    }, 1000); // 2 seconds delay
});

// Toggle navbar and social media icons on menu button click
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.social-media').classList.toggle('active');
    document.querySelector('.menu-btn').classList.toggle('active');
    document.querySelector('body').classList.toggle('menu-open');
});
