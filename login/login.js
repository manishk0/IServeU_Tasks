// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
 
    const togglePassword = document.getElementById('togglePassword'); 
    const passwordInput = document.getElementById('password');
    

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
    

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
  
        if (!username.trim()) {
            alert('Please enter a username');
            return;
        }
        
        if (!password.trim()) {
            alert('Please enter a password');
            return;
        }
        

        let users = JSON.parse(localStorage.getItem('users')) || [];
        

        const foundUser = users.find(user => 
            user.username === username && user.password === password
        );
        
        if (foundUser) {
            alert('Login successful');
            
            localStorage.setItem('currentUser', JSON.stringify(foundUser));

            window.location.href = '../home/Home.html';
        } else {
            alert('Invalid username or password');
            
            document.getElementById('password').value = '';
        }
    });
    
});