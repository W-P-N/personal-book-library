(function() {
    const ratingPreview = document.getElementById('rating-preview');
    const ratingRange = document.getElementById('rating');
    const form = document.getElementById('entry-form');

    document.addEventListener('DOMContentLoaded', () => {
        ratingPreview.textContent = ratingRange.value;
        // Load all books from local storage
    });
    ratingRange.addEventListener('input', () => {
        ratingPreview.textContent = ratingRange.value;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Validation
        // Add book data to local storage
        console.log('submitted');
    });
    
})();
