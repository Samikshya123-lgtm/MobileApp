document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("clickBtn");
    let message = document.getElementById("message");

    button.addEventListener("click", function() {
        message.textContent = "You clicked the button!";
        message.style.color = "green";
    });
});
