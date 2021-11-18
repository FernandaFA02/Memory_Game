

let click = false; //booleano
//declaración de funciones
let carta1;
let id1;
let carta2;
let id2;
let turn = true;
let puntuacion1 = 0;
let puntuacion2 = 0;
let disabled;


window.memory = {
    testScope : (Personaje) => {
        console.log("click en  card: " + Personaje)
    },
    checkMatch : (cardName, cardId) => { //booleano
        //voltear cartas
        let cardFlip = document.getElementById(cardId + "_flip")
        let cardFlip1;
        let cardFlip2;     
        //console.log(cardFlip)
        //cardFlip.style.transform = "rotateY(180deg)";
        console.log(cardName, cardId)
        playFondo();
        //funcion para match de cartas
        if(click == false && disabled == undefined){ //se guardan los datos con booleano
            //primer click con una carta1 y valor1
            playFlip();
            carta1 = cardName
            id1 = cardId
            click = true;
            cardFlip1 = document.getElementById(id1 + '_flip')
            cardFlip1.style.transform = "rotateY(180deg)"
            //alert("primer click a: " + carta1 + " " + id1)
        }else if (click == true && disabled == undefined){
            //segundo click con otra carta2 y su valor2
            playFlip();
            carta2 = cardName
            id2 = cardId
            //alert("segundo click a: " + carta2 + " " + id2)
            click = false;
            cardFlip2 = document.getElementById(id2+ '_flip')
            cardFlip2.style.transform = "rotateY(180deg)"
            
            //Comparar si la carta1 == carta2 es un match
            if(carta1 == carta2 && id1 != id2){
                //alert("es un match")
                playAcierto();
                cardFlip.removeAttribute("onclick");
                cardFlip2.removeAttribute("onclick");  
                console.log(cardFlip2)  
                carta1 = null;
                carta2 = null;
                id1 = null;
                id2 = null;
                //Agregando puntaje de primer jugador
                if(turn){
                    console.log("turno player 2");
                    turn = false;
                    puntuacion1++;
                    console.log(puntuacion1);
                    document.getElementById('score-1').innerHTML = puntuacion1;
                    document.getElementById('jugador-1').style.color = "#fff";
                    document.getElementById('jugador-2').style.color = "#BF00FF";
                    winner(puntuacion1, puntuacion2);
                }else{
                    console.log("turno playe1");
                    turn = true;
                    puntuacion2++;
                    console.log(puntuacion2)
                    document.getElementById('score-2').innerHTML = puntuacion2;
                    document.getElementById('jugador-1').style.color = "#BF00FF";
                    document.getElementById('jugador-2').style.color = "#fff";
                    winner(puntuacion1, puntuacion2);
                }
            }else{
                //alert("no fue un match")
                playNomatch();
                disabled = true;
                setTimeout (() => {
                cardFlip.style.transform = ""
                let cardFlip1 = document.getElementById(id1 + '_flip')
                let cardFlip2 = document.getElementById(id2 + '_flip')
                cardFlip2.style.transform = ""
                cardFlip1.style.transform = ""
                carta1 = null;
                carta2 = null;
                id1 = null;
                id2 = null;
                disabled = undefined;
                },2000);
                if(turn){
                    console.log("turno player2");
                    turn = false;
                    document.getElementById('jugador-1').style.color = "#fff";
                    document.getElementById('jugador-2').style.color = "#f79105";
                }else{
                    console.log("turno player1");
                    turn = true;
                    document.getElementById('jugador-1').style.color = "#ea3634";
                    document.getElementById('jugador-2').style.color = "#fff";
                }
            }
        }
    }
}

//Se crean funciones para atraer desde el html el id de cada sonido y para reproducirlo dentro del juego

//Funcion para cuando una tirada no es match
function playNomatch ()  {
    const noMatchSound = document.getElementById('nomatch')
    noMatchSound.volume = 0.1;
    noMatchSound.play()
}

//Funcion para reproducir la canción de fondo
function playFondo ()  {
    const fondoSound = document.getElementById('fondo')
    fondoSound.volume = 0.2;
    fondoSound.loop = true;
    fondoSound.play()
}

//Funcion para detener la musica de fondo
function stopFondo ()  {
    const fondoSound = document.getElementById('fondo')
    fondoSound.pause()
    fondoSound.currenTime = 0;
}

//Funcion para cuando se acierta un match
function playAcierto ()  {
    const aciertoSound = document.getElementById('match')
    aciertoSound.play()
}

//Funcion para el sonido de flip al darle click a cada carta
function playFlip ()  {
    const flipSpund = document.getElementById('flip')
    flipSpund.play()
}

//Funcion para anunciar al ganador
function playwinner ()  {
    const winnerSound = document.getElementById('winner')
    winnerSound.play()
}

//Funcion para el sonido de empate
function playEmpate (){
    const empateSound = document.getElementById('empate')
    empateSound.play()
}

//Se crea una funcion para detener la música de fondo, y anunciar cual de los dos jugadores fue el ganador o si fue un empate
function winner (puntuacion1, puntuacion2) {
    //Agregamos un setTimeout para que las alertas no salgan antes de que termine el juego
    setTimeout(() => {
    if (puntuacion1 + puntuacion2 == 10){
        if(puntuacion1 > puntuacion2){
            stopFondo();
            playwinner();
            alert(`Felicidades, ${document.getElementById('input-1').value}, incluso Maléfica te aplaude!!`);
        }else{
            if(puntuacion2 > puntuacion1){
                stopFondo();
                playwinner();
                alert (`Felicidades, ${document.getElementById('input-2').value}, Eres tan increíble como Hades!!`)
            }else{
                stopFondo();
                playEmpate();
                alert("'El infierno puede ser divertido, si estás con el demonio correcto. -Hades', Felicidades, empataron")
        }
        }
    }
},200)}

export let reinicioJuego = () => {
    console.log("reinciar", puntuacion1, puntuacion2)
    puntuacion1 = 0;
    puntuacion2 = 0;
    document.getElementById('score-1').innerHTML = puntuacion1
    document.getElementById('score-2').innerHTML = puntuacion2
}