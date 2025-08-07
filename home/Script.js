
    
document.addEventListener("DOMContentLoaded", function () {

    

    const currentUserData = localStorage.getItem("users");

    
    if (currentUserData) {
        const currentUser = JSON.parse(currentUserData);
        
        console.log(currentUser);
        
        document.getElementById("username").textContent = currentUser.username;
        document.getElementById("mobile").textContent = currentUser.mobile;
    } else {
    document.getElementById("username").textContent = "Not found";
    document.getElementById("mobile").textContent = "Not found";
}
});