const getnota = document.getElementById("nota")
const btnNota = document.getElementById("btn-Notas")
let listNotas = []

btnNota.addEventListener("click", IngresarNotas)

function IngresarNotas(e) {
  e.preventDefault()
  let nota = parseFloat(getnota.value);

  if ((nota <= 0) || (nota > 10)) {
    alert("solo se asepta notas entre 1 y el 10");
    return
  }

  (listNotas.length == 0)
    ? createTableNote(nota)
    : updateTableNote(nota);

  listNotas.push(nota)
}

const createTableNote = nota => {
  let htmlCode = `
      <table class="listado-Notas">
    <thead>
      <th>
        Materia
      </th>
      <th>
        Nota
      </th>
    </thead>
    <tr>
      <td>
        Materia ${listNotas.length + 1} 
      </td>
      <td>
        ${nota}
      </td>
    </tr>
  </table>
  `
  const table = document.getElementById('table')
  table.innerHTML = htmlCode
}

const updateTableNote = nota => {
  const table = document.querySelector(".listado-Notas").lastElementChild;
  const htmlCode = document.createElement("TR")
  htmlCode.innerHTML = `
  <tr>
    <td>
      Materia ${listNotas.length + 1} 
    </td>
    <td>
      ${nota}
    </td>
  </tr>
  `
  htmlCode.classList.add("newNotas")
  table.appendChild(htmlCode)
}

const mostroPromedio = promedio => {
  const table = document.querySelector(".listado-Notas");
  const htmlCode = document.createElement("TFOOT")
  htmlCode.innerHTML = `
  <tr>
    <td>
      PROMEDIO
    </td>
    <td>
      ${promedio}
    </td>
  </tr>
  `
  htmlCode.classList.add("newNotas")
  table.appendChild(htmlCode)
}

const sacarPromedio = (listNotas) => {
  let acumlNotas = 0;
  for (let i of listNotas) {
    acumlNotas += i;
  }
  return (acumlNotas / listNotas.length)
}

const obtenerMensaje = (promedio) => {
  if (promedio == 10) return "es como si hisiste el curso de PROGRAMACIONATS"
  else if (promedio >= 9) return "Muy bien felicitaciones";
  else if (promedio >= 8) return "Bien";
  else if (promedio >= 7) return "se que puede hacerlo mejor";
  else if (promedio >= 6) return "regular";
  else if (promedio >= 5) return "!!¿acaso esta estudiando Turismo?!! >:(";
  else if (promedio >= 4) return "Estudia mas!! ";
  else if (promedio >= 3) return "muy mal";
  else if (promedio >= 2) return "peor que miedar";
  else return "Samir";

}

const obtenerTitulo = (promedio) => {
  const titulo = document.createElement("b");
  if (promedio >= 7) {
    titulo.innerHTML = "APROBADO"
    titulo.classList.add("text-green")
  }
  else {
    titulo.innerHTML = "REPROBADO"
    titulo.classList.add("text-red")
  }

  return titulo;
}


const BGmodal = document.querySelector(".backgroup-modal")


const btnCalificar = document.getElementById("btn-Calificar")
btnCalificar.addEventListener("click", Calificar)

function Calificar(e) {
  e.preventDefault();

  if (listNotas.length == 0) {
    alert("Ingrese Notas ante de Calificar")
    return;
  }


  const promedio = sacarPromedio(listNotas);
  const mesanje = obtenerMensaje(promedio);
  const titulo = obtenerTitulo(promedio);
  const boxModal = BGmodal.firstElementChild;

  console.log(boxModal);
  boxModal.firstElementChild.appendChild(titulo)
  boxModal.lastElementChild.innerHTML = mesanje

  toggleModal();
  mostroPromedio(promedio);

  btnNota.removeEventListener("click", IngresarNotas)
  btnCalificar.removeEventListener("click", Calificar)
  btnNota.innerHTML = "actualiza"
  btnCalificar.innerHTML = "actualiza"
}

BGmodal.addEventListener("click", toggleModal);
function toggleModal() {
  if (BGmodal.classList.contains("modalActive", "true"))
    BGmodal.classList.replace("modalActive", "modalDesativo")
  else
    BGmodal.classList.replace("modalDesativo", "modalActive")
}
