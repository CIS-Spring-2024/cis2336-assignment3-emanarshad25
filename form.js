// script.js
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    let valid = true;
    let feedback = '';

    // Check each input field
    ['espresso', 'latte'].forEach(function(item) {
        const quantity = document.getElementById(item).value;
        if (quantity < 1 || quantity > 10 || isNaN(quantity)) {
            valid = false;
            feedback += `Please enter a valid quantity (1-10) for ${item}.\n`;
        }
    });

    // Display feedback or submit the form
    if (valid) {
        alert('Thank you for your order!');
        // Here you could also submit the form data via AJAX or similar method
    } else {
        document.getElementById('feedback').textContent = feedback;
    }
});
