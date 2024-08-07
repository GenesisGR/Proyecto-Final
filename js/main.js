
//estoy importando la funcion de otra carpeta y en la carpeeta base debe de tener el export 
import { MostrarHTML } from "/js/Global.js"
import { ObtenerDatosConfiguracion, ObtenerDatosApiRick } from "/js/Servicios_Config.js"



document.addEventListener("DOMContentLoaded", ev =>{
    MostrarHTML()
    ObtenerDatosApiRick()
    // MonstrarDatosConfig()
    // ObtenerDatosConfiguracion();
})
