
function showMessage() {
    alert("Hello! Thanks for visiting my portfolio.");
}
let btn = document.getElementById("themebtn");

btn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ Light Mode";
    } 
    else {
        btn.innerHTML = "🌙 Dark Mode";
    }

});
