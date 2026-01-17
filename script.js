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

    // Helper function to validate form data
    function validateFormData(formData) {
        return true;
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formDataObj = new FormData(form);
        const formObject = Object.fromEntries(formDataObj.entries());
        const formData = JSON.stringify(formObject, null, 2);
        // Validation
        // Add book data to local storage
        if(!validateFormData(formData)) {
            console.log('Validated');
        };
        console.log('submitted:', formData);
    });
    
})();
