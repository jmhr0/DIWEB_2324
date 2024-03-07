function onIniciar() {
  console.log("Hola Mundo");

  var acc = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

  const botonesTab = document.querySelectorAll(".listaBotones__botonTab");
  const bloquesTexto = document.querySelectorAll(".contenedorTexto__bloque");


  botonesTab.forEach((boton, i) => {
    console.log(boton)

    boton.addEventListener("click", () => {
      botonesTab.forEach((botonF, j) => {
        botonF.className = botonF.className.replace(/\bactivo\b/g, '');
        bloquesTexto[j].classList.remove("activo")
      });
      boton.className += " activo"; 
      bloquesTexto[i].classList.add("activo")
    });
  });

}

window.onload = onIniciar;
