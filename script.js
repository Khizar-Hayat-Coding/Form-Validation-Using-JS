const form = document.getElementById('contact-us');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const successMessage = document.getElementById('success-message');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';
    successMessage.textContent = '';

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else if (nameInput.value.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        alert('Message cannot be empty.');
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = 'Your message has been sent successfully!';

        form.reset();
    }
});

