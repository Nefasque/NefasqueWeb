export const createTableNote = nota => {
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

export const updateTableNote = nota => {
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


