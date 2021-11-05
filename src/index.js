//Se importan modulos
import { getCards } from "./data.js";
let player1 = document.getElementById('jugador-1');
let player2 = document.getElementById('jugador-2');
let score1 = document.getElementById('score-1');
let score2 = document.getElementById('score-2');
player2.style.color = "#fff"
player1.style.color = "#BF00FF"
score1.innerHTML = "0"
score2.innerHTML = "0"

let click = false; //booleano
//declaración de funciones
let carta1;
let id1;
let carta2;
let id2;
let turn = true;
let puntuacion1 = 0;
let puntuacion2 = 0;

window.memory = {
    testScope : (Personaje) => {
        console.log("click en  card: " + Personaje)
    },
    checkMatch : (cardName, cardId) => { //booleano
        //voltear cartas
        let cardFlip = document.getElementById(cardId + "_flip")
        let cardFlip2 = document.getElementById(id1 + '_flip')
        console.log(cardFlip)
        cardFlip.style.transform = "rotateY(180deg)";
        console.log(cardName, cardId)
        //funcion para match de cartas
        if(click == false){ //se guardan los datos con booleano
            //primer click con una carta1 y valor1
            carta1 = cardName
            id1 = cardId
            click = true;
            //alert("primer click a: " + carta1 + " " + id1)
        }else{
            //segundo click con otra carta2 y su valor2
            carta2 = cardName
            id2 = cardId
            //alert("segundo click a: " + carta2 + " " + id2)
            click = false;
            
            //Comparar si la carta1 == carta2 es un match
            if(carta1 == carta2 && id1 != id2){
                //alert("es un match")
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
                }else{
                    console.log("turno playe1");
                    turn = true;
                    puntuacion2++;
                    console.log(puntuacion2)
                    document.getElementById('score-2').innerHTML = puntuacion2;
                    document.getElementById('jugador-1').style.color = "#BF00FF";
                    document.getElementById('jugador-2').style.color = "#fff"
                }
                //Aquí se puede hacer una funcion para agregar el sonido
            }else{
                //alert("no fue un match")
                setTimeout (() => {
                cardFlip.style.transform = ""
                let cardFlip2 = document.getElementById(id1 + '_flip')
                cardFlip2.style.transform = ""
                carta1 = null;
                carta2 = null;
                id1 = null;
                id2 = null;
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
                    document.getElementById('jugador-2').style.color = "#fff"
                }
            }
        }
    }

}




