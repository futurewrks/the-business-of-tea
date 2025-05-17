// Form submission handling
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (Connect to your backend for real functionality.)');
    });
});