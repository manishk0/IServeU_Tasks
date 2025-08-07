document.querySelector('form').addEventListener('submit', function(e) {

        e.preventDefault();
        const username=document.getElementById('username').value;
        const mobile=document.getElementById('mobile').value;
        const password=document.getElementById('password').value;
        let users = []
        try{
            let storedUsers = JSON.parse(localStorage.getItem('users'));
            
        if (Array.isArray(storedUsers)) {
            users = storedUsers;
        } else if (storedUsers) {
            // Convert single object to array if needed
            users = [storedUsers];
        }
        }catch(error){
            console.error("Error parsing users from localStorage:", error);
        }
        // 
        console.log(users);
        if (!username || !mobile || !password) {
        alert("Please fill all fields");
        return;
    }

        
    const userexist=users.find(user=>user.username===username && user.mobile===mobile && user.password===password);

        if(userexist){
            alert("user already exists");
            return;
        }
        users.push({username, mobile, password});
        localStorage.setItem('users', JSON.stringify(users));

        alert("Registration successful!");
        window.location.href = "../login/login.html";
    
    })