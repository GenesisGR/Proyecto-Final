export const ObtenerDatosConfiguracion = async () => {

    const url = "/js/Configuraciones.json"
    try {

        const response = await fetch(url);
        if (response.status == "200") {
        const data = await response.json();
        
        console.table(data);
        return data
        }
        

       else{console.log("Error al consultar el API");} 

    } catch (error) {

        console.log("error en la red" + error);

    }

};


export const ObtenerDatosApiRick = async () => {

    const url = "https://rickandmortyapi.com/api/character"
    try {

        const response = await fetch(url);
        if (response.status == "200") {
        const data = await response.json();
        
        console.table(data);
        return data
        }
        

       else{console.log("Error al consultar el API");} 

    } catch (error) {

        console.log("error en la red" + error);

    }

};

