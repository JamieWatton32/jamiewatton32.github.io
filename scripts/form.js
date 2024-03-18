// Get the form element
const form = document.getElementById('contact-form"');

// Function to handle form submission
function handleSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Check if all fields are filled
    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    // If all fields are filled, submit the form
    form.submit();
}

// Attach form submission handler
form.addEventListener('submit', handleSubmit);