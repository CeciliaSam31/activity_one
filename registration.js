// Get the registration form and message div
const registrationForm = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

// Add a submit event listener to the form
registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the user input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a user object
    const user = {
        username,
        email,
        password
    };

    // Store the user data in local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Display a success message
    messageDiv.innerHTML = 'Registration successful. Data stored in local storage.';
});
