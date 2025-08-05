document.querySelector('form').addEventListener('submit', function(e) {

        e.preventDefault();
        const username=document.getElementById('username').value;
        const mobile=document.getElementById('mobile').value;
        const password=document.getElementById('password').value;
        let users=JSON.parse(localStorage.getItem('users')) || [];
    const userexist=users.find(user=>user.username===username && user.mobile===mobile && user.password===password);
        if(!username || !mobile || !password){
            alert("Please fill all fields");
            return;
        }
        if(userexist){
            alert("user already exists");
            return;
        }
        users.push({username, mobile, password});
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registration successful!");
        window.location.href = "login.html";

    })