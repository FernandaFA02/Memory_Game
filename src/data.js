//Se exportan los modulos
export let getCards = () => {}

//Se trae la data del JSON con un fetch
fetch("../Data/memory.json")
.then((response) => response.json()) //se atrae al JSON
.then((data) => iterarTarjetas(data))// se trae data
.catch((error) => console.log(error))//para verificar si hay errores

//Se crea una variable para el juego
let memorama = document.getElementById("juego");
//Se iteran el JSON de los personajes
let iterarTarjetas = (data) => {
    //console.log(data.Memorama)

    //Se agrega el metodo sort() para revolver las cartas
   // data.Memorama.sort(() => Math.random() - 0.5)
    //se utilia un for of para iterar las tarjetas 
    for (const tarjeta of data.Memorama) {
        //console.log(tarjeta.Personaje)
        memorama.innerHTML += `<div class="memory-container">
        <div class="memory-portrait" id='${tarjeta.Id}_flip' onclick="checkClick('${tarjeta.Personaje}', '${tarjeta.Id}')">
        <div class="memory-cover" id='${tarjeta.Logo}'></div>
        <div class="memory-back" id= '${tarjeta.Id}'> <img src='${tarjeta.Imagen}'> 
        </div>
        </div>
        </div>`;
    }
    }


