function onIniciar() {
  console.log("Hola Mundo");


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
