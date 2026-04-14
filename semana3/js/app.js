document.addEventListener("DOMContentLoaded", function() {

    const textTest = document.getElementById("text-test");

    textTest.addEventListener("click", function() {
        if (textTest.textContent === "Oprimeme") {
            textTest.textContent = "Gracias";
        } else {
            textTest.textContent = "Oprimeme";
        }
    });
});