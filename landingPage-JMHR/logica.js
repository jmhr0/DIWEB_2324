// Función para cambiar la fuente
function changeFontToOpenDyslexic() {
    // Añade la fuente a los estilos importados
    var newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode("@font-face {" +
    "font-family: 'OpenDyslexicRegular'; " +
    "src: url('./fonts/OpenDyslexic-Regular.otf') format('opentype'); " +
    "url('./fonts/opendyslexic-regular-webfont.svg#opendyslexicregular') format('svg');"+
    "}")
    );
    document.head.appendChild(newStyle);

    // Aplica las fuentes a todos los elementos
    var allDomElements = document.getElementsByTagName('*');
    for (var i =   0; i < allDomElements.length; i++) {
        allDomElements[i].style.fontFamily = 'OpenDyslexicRegular, Arial, sans-serif';
    }
}
//La funcion se inicializara on load
document.addEventListener("DOMContentLoaded", function() {
// Se busca un <a> cuyo contenido de texto sea exactamente 'Activar tipo de letra accesible'
    var activateLink = Array.from(document.querySelectorAll('a')).find(function(element) {
        return element.textContent === 'Activar tipo de letra accesible';
    });

    // Agrega un event listener para el enlace previo
    activateLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la redireccion del enlace (comportamiento predeterminado)
        changeFontToOpenDyslexic(); // Llamada a la función
    });

    // Logica para el menu desplegable
    var settingsIcon = document.querySelector('.settings-icon');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    settingsIcon.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.settings-icon')) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        }
    });
});
