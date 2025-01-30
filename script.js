document.addEventListener('DOMContentLoaded', () => {
    // Handle login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if ((username === 'Mhok' && password === '12345') || 
                (username === 'Ink' && password === '12345')) {
                window.location.href = 'home.html';
            } else {
                document.getElementById('errorMessage').textContent = 'Invalid username or password';
            }
        });
    }

    // Handle menu toggle
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menu');
    if (menuIcon && menu) {
        menuIcon.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Logout alert
    const logoutLink = document.getElementById('logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', () => {
            alert('You have been logged out!');
        });
    }
});
