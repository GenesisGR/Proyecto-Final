//Modularizar Exportar e importar

///0-
export function MostrarHTML() {
  //
  // let navbar = document.getElementById("Navbar").innerHTML= CrearNavbar();
  // let footer= document.getElementById("Footer").innerHTML= CrearFooter();
  // let Noticias = document.getElementById("Noticias").innerHTML= CrearTarjetaNoticias();
  let Banner1 = document.getElementById("Banner1").innerHTML = CrearBanner1();
  let Banner2 = document.getElementById("Banner2").innerHTML = CrearBanner2();
  let tabla = document.getElementById("Tabla").innerHTML = CrearTabla();
  
}

//1-Navbar



//Main -Secciones 1 Noticias 


const CrearBanner1 = () => {
  let html = `
      <div class="spaced-div">
        
          <div class="container">
            <h2>Lorem ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui laudantium id quam magni accusantium,
              veritatis, ipsam labore, reprehenderit dolore repudiandae nemo sint deserunt! Suscipit facilis qui
              inventore
              consequatur fugit.</p>
            <a href="#" class="boton">Más información <i class="fas fa-chevron-right"></i></a>
        
      </div>

  `
  return html
}

const CrearBanner2 = () =>{
  let html = `
      <div class="spaced-div">
        
          <div class="container">
            <h2>Lorem ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui laudantium id quam magni accusantium,
              veritatis, ipsam labore, reprehenderit dolore repudiandae nemo sint deserunt! Suscipit facilis qui
              inventore
              consequatur fugit.</p>
            <a href="#" class="boton">Más información <i class="fas fa-chevron-right"></i></a>
        
      </div>

  `
  return html
}

const CrearTabla = () => {
  let html = `
  <!-- Tabla-->
      <div class="spaced-div">
        <section class="banner banner-tarjetas-dos ">
          <div class="container">

            <!-- b4-form-inline
        b4-form-group -->
            <h2>Tabla Datos</h2>
            


        <thead class="thead-inverse">
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>asas</td>
                  <td>asas</td>
                 
                </tr>
                 
              </tbody>




            </table>
        </section>

  `
  return html
}


