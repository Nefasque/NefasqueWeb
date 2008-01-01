/*
 * ----
 * Simulacion de 
 * servidor. 
 * ----
 */

const ListMateria = [
  {
    nombre: "fisica",
    nota: "18.4"
  },
  {
    nombre: "matematica",
    nota: "17.1"
  },
  {
    nombre: "programacion",
    nota: "16"
  },
  {
    nombre: "algorimica",
    nota: "14.9"
  },
  {
    nombre: "leyes",
    nota: "11.4"
  },
  {
    nombre: "geografia",
    nota: "8.1"
  },
  {
    nombre: "ingles",
    nota: "14.9"
  },
  {
    nombre: "nado sincronidaso",
    nota: "18"
  },
  {
    nombre: "Minecraft",
    nota: "20"
  },
]

const obtenerMateria = i => {
  return new Promise((rels, rej) => {
    if (ListMateria[i] == undefined)
      rej(null)
    else
      setTimeout(() => rels(ListMateria[i]), Math.random() * 400)
  })
}


/*
 * frontend
 */

const createNewTableNotas = () => {
  const tableNotas = document.createElement("TABLE")
  tableNotas.classList.add("tableNotas")
  tableNotas.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Materia</th>
        <th>Notas</th>
      </tr>
    </thead>
    <tbody> 
    </tbody>
  </table>
`
  return tableNotas;
}

const createNewRowTableNotas = (materia, nota) => {
  const rowTableNotas = document.createElement("TR");
  rowTableNotas.innerHTML = `
    <tr>
      <th>${materia}</th>
      <th>${nota}</th>
    </tr>
  `
  return rowTableNotas;
}

/*
 *const framentoRowTableNota = async () => {
 *  const framento = document.createDocumentFragment();
 *
 *  for (let i = 0; i != null; i++) {
 *    const materia = await obtenerMateria(i)
 *      .catch(() => i = null);
 *    if (i == null) break
 *
 *    framento.appendChild(
 *      createNewRowTableNotas(materia.nombre, materia.nota))
 *  }
 *  return framento;
 *}
 *
 */

const addRowTableNota = async (tbody) => {
  for (let i = 0; i != null; i++) {
    const materia = await obtenerMateria(i)
      .catch(() => i = null);
    if (i == null) break

    tbody.appendChild(
      createNewRowTableNotas(materia.nombre, materia.nota))
  }
}


const table = async () => {
  const framento = document.createDocumentFragment();
  framento.appendChild(createNewTableNotas());
  //framento.querySelector("tbody").
  //appendChild(await framentoRowTableNota());

  document.querySelector("body").appendChild(framento);
}

table();
addRowTableNota(document.querySelector("table tbody"));
