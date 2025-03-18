// Authentication module

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
});

// Check if user is authenticated
function checkAuth() {
    const token = localStorage.getItem('hueAuthToken');
    if (token) {
        document.getElementById('login-panel').style.display = 'none';
        document.getElementById('dashboard-panel').style.display = 'block';
    } else {
        document.getElementById('login-panel').style.display = 'block';
        document.getElementById('dashboard-panel').style.display = 'none';
    }
}

// Login function
function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // This is a simplified authentication.
    // In a real app, you'd validate against your backend
    // This is just for demonstration - NOT for production use
    if (username === 'admin' && password === 'password') {
        // Store token in localStorage
        localStorage.setItem('hueAuthToken', 'demo-token-123');
        checkAuth();
    } else {
        document.getElementById('login-error').textContent = 'Invalid username or password';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('hueAuthToken');
    checkAuth();
}

// Get auth token for API calls
function getAuthToken() {
    return localStorage.getItem('hueAuthToken');
}