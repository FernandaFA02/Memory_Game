/*//Se trae la data del JSON con un fetch
fetch("../Data/memory.json")
.then((response) => response.json())
.then((data) => iterarPersonajes(data))
.catch((error) => console.log(error))

//Juego
let memorama = document.getElementById("juego");
//Se iteran el JSON de los personajes
let iterarPersonajes = (data) => {
    console.log(data.Memorama)
    for (const tarjeta of data.Memorama) {
        console.log(tarjeta.Personaje)
        memorama.innerHTML += `<div class="memory-container">
        <div class="memory-portrait">
        <div class="memory-cover" id='${tarjeta.Personaje}'></div>
        <div class="memory-back">
            <h6>${tarjeta.Personaje}</h6>
        </div>
        </div>
        </div>`;
    
        let tarjetasLogo = document.getElementById(`${tarjeta.Personaje}`)
                tarjetasLogo.style.backgroundImage = "url(" + `${tarjeta.Logo}` + ")"
                tarjetasLogo.style.backgroundSize = "cover"

    }
}
*/