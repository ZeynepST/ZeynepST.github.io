document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for all animations
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements with the 'animate' class
    document.querySelectorAll('.animate').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for hero scroll-down arrow
    const scrollArrow = document.querySelector('.hero-scroll');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        });
    }
});