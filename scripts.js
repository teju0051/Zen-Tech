
    const hamburger = document.getElementById('hamburger');
    const dropdownMenu = document.getElementById('dropdown-menu');

    hamburger.addEventListener('click', () => {
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block'; // Toggle dropdown visibility
    });

    // Select all FAQ items
const faqItems = document.querySelectorAll('.faq-item');

// Add click event listener to each FAQ item
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Toggle the active class on the current item
        item.classList.toggle('active');
        
        // Change the toggle icon based on the active state
        const toggle = item.querySelector('.faq-toggle');
        toggle.textContent = item.classList.contains('active') ? '−' : '+';
    });
});

