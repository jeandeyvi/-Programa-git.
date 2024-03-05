function aleatorio (min,max){
    return Math.floor(Math.random()*(max - min + 1)+ min)
}
function eleccion(jugada){
    if(jugada == 1){
        resultado = "Elegiste Piedra "
    } else if(jugada == 2){
        resultado = "Elegiste Papel "
    } else if(jugada == 3){
        resultado = "Elegiste Tijera "
    } else{
        resultado = "Elegiste Perder"
    }
    return resultado
}
// 1 es piedra, 2 es papel y 3 es tijera
let jugador = 0
let pc = 0
triunfos = 0
derrotas = 0

while (triunfos < 3 && derrotas < 3){
    pc = aleatorio(1,3)
    jugador = prompt("Elije: 1 para piedra, 2 para papel y 3 para tijera")
    
    alert("PC elige: "+ eleccion(pc))
    alert("Jugador elige: "+ eleccion(jugador))

        // DISPUTA
    if(pc == jugador){
        alert("Empate")
    } else if(jugador == 1 && pc == 3){
        alert("Ganaste")
        triunfos = triunfos + 1
    } else if(jugador == 2 && pc == 1){
        alert("Ganaste")
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2){
        alert("Ganaste")
        triunfos = triunfos + 1
    } else {
        alert("Perdiste")
        derrotas = derrotas + 1
    }
}   alert ("Ganaste " + triunfos + " veces. Perdiste " + derrotas + "veces")
  