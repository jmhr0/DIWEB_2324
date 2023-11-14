const onWindowResize = () => {
    if (window.innerWidth <= 600) {
        cambiarDisenio();
    } else {
        cambiarDisenio2();
    }
}

const cambiarDisenio = () => {
    const navNormal = document.querySelector('header .header__zonaNavegacion');
    const navHamburguer = document.querySelector('header .header__zonaNavegacionHamb');
 
    if (!navNormal.classList.contains('hidden')) {
        console.log("Mostrar nav hamburguer");
        navNormal.classList.add('hidden');
        navHamburguer.classList.remove('hidden');
    }
 }
 
 const cambiarDisenio2 = () => {
    const navNormal = document.querySelector('header .header__zonaNavegacion');
    const navHamburguer = document.querySelector('header .header__zonaNavegacionHamb');
 
    if (!navHamburguer.classList.contains('hidden')) {
        console.log("Mostrar nav normal");
        navHamburguer.classList.add('hidden');
        navNormal.classList.remove('hidden');
    }
 }

window.onresize = onWindowResize;