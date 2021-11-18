//Se importan modulos
import { getCards } from "./data.js";
getCards();
//import { reinicio } from "./data.js";

//Se crean variables para atraer desde el html los jugadores y los puntajes
let player1 = document.getElementById('jugador-1');
let player2 = document.getElementById('jugador-2');
let score1 = document.getElementById('score-1');
let score2 = document.getElementById('score-2');
player2.style.color = "#fff"
player1.style.color = "#BF00FF"
score1.innerHTML = "0"
score2.innerHTML = "0"

//Se crea una funcion para atraer desde el html la primera pantalla y activar el boton de jugar y realizar el cambio de pantallas
let botonJugar = document.getElementById('start')
botonJugar.addEventListener('click', () => {
    //Se atren las pantallas desde el html
    document.getElementById('pantalla1').hidden = true;
    document.getElementById('pantalla2').hidden = false;
    //registro de jugadores
    player1.innerHTML = document.getElementById('input-1').value + ": "
    player2.innerHTML = document.getElementById('input-2').value + ": "
    document.getElementById('score-1').innerHTML = 0
    document.getElementById('score-2').innerHTML = 0
})

//creamos una funcion para que el boton de reinicio del juego funcione
let botonReinicio = document.getElementById('reset')
botonReinicio.addEventListener('click', getCards);

let botonMenu = document.getElementById('inicio')
botonMenu.addEventListener('click', () => {
    location.reload();
})