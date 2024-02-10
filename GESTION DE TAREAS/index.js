




let dat = [];
function agregar(prioridad) {
    let datos = {};

    datos = {
        nombre: document.getElementById("text").value,
        prioridad: prioridad,
        fecha: document.getElementById("Fec").value
    } 

  if (datos.nombre === "" && datos.fecha === "") {
    prioridad="";
    alert("ingrese los datos");
  }
    document.getElementById("text").value = "",
        prioridad = "",
        document.getElementById("Fec").value = ""

    console.log(datos)
    dat.push(datos)
    console.log(dat) 
 
  
    }

function ordenarDatos() {
    let opcion = document.getElementById("op").value;

    if (opcion === "Alto al mas Bajo") {
        dat.sort((a, b) => {
            if (a.prioridad === "Alta" && b.prioridad === "Baja") {
                return -1;
            }
        } );
    } else{
        dat.sort((a, b) => {
            if (a.prioridad === "Baja" && b.prioridad === "Alta") {
                return -1;
            }
        });
    }
 
  
    pintar();
}

function pintar() {
    let tableBody = document.getElementById("lista");
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    dat.forEach((item, i) => {
        let tr = document.createElement("tr");
        if (item.nombre !== "" && item.fecha !== "") {
        let nombre = document.createElement("td");
        nombre.textContent = item.nombre;
        tr.appendChild(nombre);
        }

        if (item.nombre !== "" && item.fecha !== "") {
            let prioridad = document.createElement("td");
            prioridad.textContent = item.prioridad;
            tr.appendChild(prioridad);
        }
        
        if (item.nombre !== "" && item.fecha !== "") {
        let fecha = document.createElement("td");
        fecha.textContent = item.fecha;
        tr.appendChild(fecha);
        }
        document.getElementById("lista").appendChild(tr);

    });
}
