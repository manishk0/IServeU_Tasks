
    
    document.addEventListener("DOMContentLoaded", function () {

    

    const currentUserData = localStorage.getItem("users");

    
    if (currentUserData) {
        const currentUser = JSON.parse(currentUserData);
        
        
        document.getElementById("username").textContent = currentUser[0].username;
        document.getElementById("mobile").textContent = currentUser[0].mobile;
    } else {
    document.getElementById("username").textContent = "Not found";
    document.getElementById("mobile").textContent = "Not found";
}
});