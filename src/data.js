//Se trae la data del JSON con un fetch
fetch("../Data/memory.json")
.then((response) => response.json())
.then((data) => iterarTarjetas(data))
.catch((error) => console.log(error))

//Juego
let memorama = document.getElementById("juego");
//Se iteran el JSON de los personajes
let iterarTarjetas = (data) => {
    console.log(data.Memorama)
    for (const tarjeta of data.Memorama) {
        console.log(tarjeta.Personaje)
        memorama.innerHTML += `<div class="memory-container">
        <div class="memory-portrait" id="memory-card">
        <div class="memory-cover" id='${tarjeta.Logo}'></div>
        <div class="memory-back"> <img src='${tarjeta.Imagen}'> 
        </div>
        </div>
        </div>`;
    }
}


