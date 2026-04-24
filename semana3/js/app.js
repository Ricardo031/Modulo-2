document.addEventListener("DOMContentLoaded", function () {

    const textTest = document.getElementById("text-test");
    const boton = document.getElementById("toggle-btn");
    const texto = document.getElementById("hidden-content");

    textTest.addEventListener("click", function () {
        if (textTest.textContent === "Oprimeme") {
            textTest.textContent = "Gracias";
        } else {
            textTest.textContent = "Oprimeme";
        }
    });

    boton.addEventListener("click", function () {
        texto.classList.toggle('oculto')
        console.log("hola")
    })
});