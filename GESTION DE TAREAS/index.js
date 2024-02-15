




let dat = [];
function agregar(prioridad) {
    let datos = {};

    datos = {
        nombre: document.getElementById("text").value,
        prioridad: prioridad,
        fecha: document.getElementById("Fec").value
    }
if (datos.nombre === "" || datos.fecha === "") {
        // prioridad = "";
        alert("ingrese los datos")
        limpiar()
        
    }

  

    console.log(datos)
    dat.push(datos)
    console.log(dat)
    document.getElementById("lista").textContent = "";
    limpiar( )

}
function limpiar(){
      document.getElementById("text").value = "",
        prioridad = "",
        document.getElementById("Fec").value = ""
}


function ordenarDatos() {
    let opcion = document.getElementById("op").value;

    if (opcion === "Alto al mas Bajo") {
        dat.sort((a, b) => {
            if (a.prioridad === "Alta" && b.prioridad === "Baja") {
                return -1;
            }
        });
    } else {
        dat.sort((a, b) => {
            if (a.prioridad === "Baja" && b.prioridad === "Alta") {
                return -1;
            }
        });
    }
    document.getElementById("lista").textContent="";

    pintar();
}

function pintar() {
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

        if (item.nombre !== "" && item.fecha !== "" ) {
            let fecha = document.createElement("td");
            fecha.textContent = item.fecha;
            tr.appendChild(fecha);
        }
        if (item.nombre !== "" && item.fecha !== "") {
            let elimina = document.createElement("button")
            elimina.textContent = "❌"
      
            tr.appendChild(elimina)
            elimina.addEventListener("click", () => {
                lista.removeChild(tr);
                dat.splice(i, 1); // Eliminar el elemento correspondiente del array dat
            });

        }
        document.getElementById("lista").appendChild(tr);

    });
}

