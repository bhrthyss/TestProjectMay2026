// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Clear previous messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    errorMessage.textContent = '';
    successMessage.textContent = '';

    // Validation
    if (!email) {
        errorMessage.textContent = 'Please enter your email address.';
        errorMessage.style.display = 'block';
        return;
    }

    if (!isValidEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
    }

    if (!password) {
        errorMessage.textContent = 'Please enter your password.';
        errorMessage.style.display = 'block';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        errorMessage.style.display = 'block';
        return;
    }

    // If validation passes, show success message
    successMessage.textContent = `Login successful! Welcome ${email}`;
    successMessage.style.display = 'block';

    // Optional: Reset form after successful login
    setTimeout(() => {
        document.getElementById('loginForm').reset();
        successMessage.style.display = 'none';
        // Here you would typically redirect to dashboard or make API call
        // window.location.href = '/dashboard';
    }, 2000);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
