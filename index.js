function buscador(personas, tipo, dato, parrafo) {

  let acumulador = 0;
  let mensaje = "";
  
  personas.forEach(function(persona) {
    if (persona[tipo] == dato || persona[tipo].toString().toUpperCase() == dato.toString().toUpperCase()) {
      acumulador = acumulador + 1;
      mensaje = mensaje + persona.nombre + " de " + persona.edad + " años, DNI " + persona.dni + ", sexo " + persona.sexo + "<br>";
    }
  }) 
  if (acumulador!= 0) {
    parrafo.innerHTML = `Hay ${acumulador} coincidencias: <br> ${mensaje}`;
  }
  else {
    parrafo.textContent = "Lo sentimos, no hay coincidencias. Revise los campos o asuma que la persona no existe."
  }
  };

  function buscar() {

    const busqueda = document.getElementById('inputBusqueda').value;
    const opciones = document.getElementsByName('opcion');
    let seleccion = '';

    opciones.forEach(opcion => {
      if (opcion.checked && busqueda != "") {
        seleccion = opcion.value;
        buscador(personas, seleccion, busqueda, parrafo);
      }
    });
    if (seleccion === '' || busqueda == "") {
      parrafo.textContent = "Por favor, seleccione una opción de búsqueda y complete el campo solicitado."
      return;
    }
  }

function Persona(nombre, edad, dni, sexo) {
  this.nombre = nombre;
  this.edad = edad;
  this.dni = dni;
  this.sexo = sexo;
}

const contenedor = document.getElementById("miElemento");
const parrafo = document.createElement("p");
const registro = localStorage.getItem("registro");
const personas = JSON.parse(localStorage.getItem("registro"));
const enCasoVacio = [{"nombre":"Brayan Ramírez","edad":25,"dni":32145678,"sexo":"masculino"},{"nombre":"Andrés Brunero","edad":35,"dni":14523672,"sexo":"masculino"},{"nombre":"Rita Hernández","edad":44,"dni":22334656,"sexo":"femenino"},{"nombre":"Carolina Daher","edad":28,"dni":45235678,"sexo":"femenino"},{"nombre":"Valentín Pelossi","edad":19,"dni":36999453,"sexo":"masculino"},{"nombre":"Fernando Beñatena","edad":51,"dni":44966781,"sexo":"masculino"},{"nombre":"Perla López","edad":47,"dni":23964231,"sexo":"femenino"},{"nombre":"Cristian Sica","edad":40,"dni":36994322,"sexo":"masculino"}];
//Estas son personas por defecto para la primera vez que se abre la página, están directamente en JSON para ocupar menos memoria.

contenedor.appendChild(parrafo);



if (registro == null) {
  localStorage.setItem("registro", JSON.stringify(enCasoVacio));
}

