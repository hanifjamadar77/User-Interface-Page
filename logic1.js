function instagram(){
    window.open("https://www.instagram.com/accounts/login/")
}

function facebook(){
    window.open("https://www.facebook.com/login/")
}
function twitter(){
    window.open("https://twitter.com/login")
}
function whatsapp(){
    window.open("https://web.whatsapp.com/")
}

function darkMode(){
        var element = document.body;
        var border = document.getElementById("img")
        var navbar = document.getElementById("home")

        element.classList.toggle("dark-mode");

        border.classList.toggle("image-border"); 
        border.src="elon.png"; 
        navbar.classList.toggle("navbar-border")
        
}