import { barcelona, roma, paris, londres, australia, francia } from "./ciudades.js"

//Obtener los elementos del DOM(DOCUMENT OBJECT MODEL )
let enlaces = document.querySelectorAll("a")
let tituloElemento = document.getElementById("titulo")
let subtituloElemento = document.getElementById("subtitulo")
let parrafoElemento = document.getElementById("parrafo")
let precioElemento = document.getElementById("precio")

//Agregar un evento click a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        // remover activo, remover la clase active de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove("active");
        });
        // agregar clase "active" al enlace actual 
        this.classList.add("active")

        // Obtener el contenido correspondiente segun el enlace 
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
        // mostrar el contenido en el DOM 

    });
});
// funcion para traer la inforrmacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        "Barcelona": barcelona,
        "Roma": roma,
        "París": paris,
        "Londres": londres,
        "Australia": australia,
        "Francia": francia

    };
    return contenido[enlace];
}