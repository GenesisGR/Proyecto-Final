
//estoy importando la funcion de otra carpeta y en la carpeeta base debe de tener el export 
import { MostrarHTML } from "/js/CrearHTML.js"

document.addEventListener("DOMContentLoaded", ev =>{
    MostrarHTML()
    MonstrarDatosConfig()
})

function MonstrarDatosConfig() {
    //truco fetch
    let url;

    fetch('url')
    
        .then(response => response.json())
    
        .then(data => console.log(data));
    

    
}


