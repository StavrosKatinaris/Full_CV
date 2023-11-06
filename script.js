// Function to reveal elements on scroll with a delay
function revealOnScroll() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
            setTimeout(() => {
                section.classList.add('reveal');
            }, index * 300); // divided by 1000-second delay for each section
        }
    });
}

// Add a scroll event listener to trigger the revealOnScroll function
window.addEventListener('scroll', revealOnScroll);

// Initial call to reveal elements that are already in view on page load
revealOnScroll();

// Function to toggle content visibility
function toggleContent(sectionId) {
    const content = document.getElementById(sectionId + '-content');
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

// ... rest of your existing revealOnScroll function ...
