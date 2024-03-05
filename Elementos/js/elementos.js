function iniciarjuego(){
    let botonMascotaJugador = document.getElementById('Boton-Seleccionar')
botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
}
function seleccionarMascotaJugador(){
    alert("seleccionaste mascota")
}

window.addEventListener('load',iniciarjuego)