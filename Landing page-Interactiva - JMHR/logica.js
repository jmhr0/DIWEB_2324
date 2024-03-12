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

// Función para cambiar la imagen de fondo
// Incluye elementos multimedia en al menos 3 formatos
//  diferentes (relacionado con UT06).
function changeBackgroundImage(imagePath) {
    var pictureElement = document.querySelector('.main__picture picture');
    
    var sourceElements = pictureElement.querySelectorAll('source');
    
    //cambia a la imagen en webp
    sourceElements.forEach(function(source) {
        if (source.type === 'image/webp') {
            source.srcset = imagePath + '.webp';
    //cambia a la imagen en jpg
        } else if (source.type === 'image/jpg') {
            source.srcset = imagePath + '.jpg';
        }
    });
    
    //cambia a la imagen en jpg
    var imgElement = pictureElement.querySelector('img');
    imgElement.src = imagePath + '.png';
    imgElement.srcset = imagePath + '.png';
}

// Eventos para los logos
//cambia la imagen de fondo y la opacidad dependiendo de la imagen clickeada
document.getElementById('lol-logo').addEventListener('click', function() {
    changeBackgroundImage('./imgs/Fondo-img-lol');
    adjustLogoOpacity(this);
});

document.getElementById('wow-logo').addEventListener('click', function() {
    changeBackgroundImage('./imgs/Fondo-img-wow');
    adjustLogoOpacity(this);
});
document.getElementById('valorant-logo').addEventListener('click', function() {
    changeBackgroundImage('./imgs/fondo-img-valorant');
    adjustLogoOpacity(this);
});

document.getElementById('helldivers2-logo').addEventListener('click', function() {
    changeBackgroundImage('./imgs/Fondo-img-helldivers2');
    adjustLogoOpacity(this);
});

function adjustLogoOpacity(clickedLogo) {
    document.querySelectorAll('.game-logo').forEach(function(logo) {
        logo.style.opacity = "0.5";
    });
    clickedLogo.style.opacity = "1";
}

//Transiciones facheras en el elemento interactivo
//Para el lol
document.getElementById('lol-logo').addEventListener('click', function() {
    var mainPicture = document.querySelector('.main__picture picture img');
    mainPicture.classList.add('fade-out');
    setTimeout(function() {
        mainPicture.src = "./imgs/Fondo-img-lol.png";
        mainPicture.classList.remove('fade-out');
        adjustLogoOpacity(document.getElementById('lol-logo'));
    }, 500);
});
//Para el wow
document.getElementById('wow-logo').addEventListener('click', function() {
    var mainPicture = document.querySelector('.main__picture picture img');
    mainPicture.classList.add('fade-out');
    setTimeout(function() {
        mainPicture.src = "./imgs/Fondo-img-wow.png";
        mainPicture.classList.remove('fade-out');
        adjustLogoOpacity(document.getElementById('wow-logo'));
    }, 500);
});
//Para el valo
document.getElementById('helldivers2-logo').addEventListener('click', function() {
    var mainPicture = document.querySelector('.main__picture picture img');
    mainPicture.classList.add('fade-out');
    setTimeout(function() {
        mainPicture.src = "./imgs/Fondo-img-helldivers2.png";
        mainPicture.classList.remove('fade-out');
        adjustLogoOpacity(document.getElementById('helldivers2-logo'));
    }, 500);
});
//Para el helldivers
document.getElementById('valorant-logo').addEventListener('click', function() {
    var mainPicture = document.querySelector('.main__picture picture img');
    mainPicture.classList.add('fade-out');
    setTimeout(function() {
        mainPicture.src = "./imgs/Fondo-img-valorant.png";
        mainPicture.classList.remove('fade-out');
        adjustLogoOpacity(document.getElementById('valorant-logo'));
    }, 500);
});