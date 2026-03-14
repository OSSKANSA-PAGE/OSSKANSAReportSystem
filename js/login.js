function login(){

let user = document.getElementById("username").value
let pass = document.getElementById("password").value

if(user === "BAWA PERUBAHAN" && pass === "11172000"){

localStorage.setItem("adminLogin", "true")

window.location.href = "./admin.html"

}else{

alert("Username atau password salah")

}

}