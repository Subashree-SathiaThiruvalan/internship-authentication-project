// SIGNUP

const signupForm = document.getElementById("signupForm");

if(signupForm)
{
    signupForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Signup Successful");

        window.location.href = "login.html";

    });
}


// LOGIN

const loginForm = document.getElementById("loginForm");

if(loginForm)
{
    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if(email === storedEmail && password === storedPassword)
        {
            alert("Login Successful");

            window.location.href = "profile.html";
        }
        else
        {
            alert("Invalid Credentials");
        }

    });
}