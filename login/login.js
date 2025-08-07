
document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username'); // Added this line
    let actualUsername = ''; // Track the actual username value
    

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                togglePassword.classList.remove('fa-eye');
                togglePassword.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                togglePassword.classList.remove('fa-eye-slash');
                togglePassword.classList.add('fa-eye');
            }
        });
    }
    

    if (usernameInput) {
        usernameInput.addEventListener('input', function (e) {
            const input = e.target;
            const value = input.value;
            
        
            actualUsername = value;
            
            
            if (value.length > 2 && document.activeElement !== input) {
                const firstChar = value.charAt(0);
                const lastChar = value.charAt(value.length - 1);
                const maskedMiddle = '*'.repeat(value.length - 2);
                input.value = firstChar + maskedMiddle + lastChar;
            }
        });
        
        // On focus, show the real username
        usernameInput.addEventListener('focus', function () {
            this.value = actualUsername;
        });
        
        // On blur, show the masked version
        usernameInput.addEventListener('blur', function () {
            const value = actualUsername;
            if (value.length > 2) {
                const firstChar = value.charAt(0);
                const lastChar = value.charAt(value.length - 1);
                const maskedMiddle = '*'.repeat(value.length - 2);
                this.value = firstChar + maskedMiddle + lastChar;
            }
        });
    }
    
    // Form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Use actualUsername instead of input value for validation
            const username = actualUsername || document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!username.trim()) {
                alert('Please enter a username');
                return;
            }
            
            if (!password.trim()) {
                alert('Please enter a password');
                return;
            }
            
        
            let usersFromlogin = JSON.parse(localStorage.getItem('users')) || [];
            console.log(usersFromlogin);
            
            
            const foundUser = usersFromlogin.find(user => 
                user.username === username && user.password === password
                
            );
            
            if (foundUser) {
                alert('Login successful');
                localStorage.setItem('users', JSON.stringify(foundUser));
                window.location.href = '../home/Home.html';
            } else {
                alert('Invalid username or password');
                document.getElementById('password').value = '';
            }
        });
    }
});