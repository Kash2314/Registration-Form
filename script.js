const username = document.getElementById("username");
const email = document.getElementById("email");
const form = document.getElementById("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
const usernameValue = username.value.trim();
const emailValue = email.value.trim();

    if(usernameValue ==="" || emailValue ===""){
        alert("Fill all the given area first!");
    }
    else{
        alert(`Welcome ${usernameValue}`);
    }
})
