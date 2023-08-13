const conteiner = document.querySelector(".conteiner")
const button = document.querySelector("#ConfimarMesa")
const alumnos = [
  {
    nombre: "kofla",
    email: "kofla@gmail.com",
    materias: ["fisica", "ciensa"]
  },
  {
    nombre: "pedro",
    email: "pedro@gmail.com",
    materias: ["fisica"]
  },
  {
    nombre: "jose",
    email: "jose@gmail.com",
    materias: ["programacion"]
  },
  {
    nombre: "maria",
    email: "maria@gmail.com",
    materias: ["quimica"]
  },
  {
    nombre: "jose",
    email: "jose@gmail.com",
    materias: ["programacion"]
  },
]


let htmlCode = "";

for (i of alumnos) {
  let nombre = i.nombre;
  let email = i.email;
  let materia = i.materias;
  htmlCode += `
  <div class="row">
    <div class="nombre item">
      <p>${nombre}</p>
    </div>
    <div class="email item">
      <p>
       ${email} 
      </p>
    </div>
    <div class="materia item">
      <p>${materia}</p>
    </div>
    <form action="redir" class="form item semana">
      <select name="semana" class="semana-elegida">
        <option value="semana1">semana 1</option>
        <option value="semana2">semana 2</option>
      </select>
    </form>
  </div>`

}

conteiner.innerHTML = htmlCode;

let row = document.getElementsByClassName("row")
for (let i = 0; i < row.length; i++) {
  if ((i % 2) == 0) {
    row[i].classList.add("bg-1")
  }
  else {
    row[i].classList.add("bg-2")
  }
}

button.addEventListener("click", confirmar)

function confirmar(e) {
  if (!(confirm("Seguro que quieres confirmar"))) return;


  let elemento = document.querySelectorAll(".semana")
  let semanaElegidas = document.querySelectorAll(".semana-elegida");
  for (let Elemento in elemento) {
    semana = elemento[Elemento];
    semana.innerHTML = semanaElegidas[Elemento].value
  }

  e.target.innerHTML = `<b>CONFIMADO </b>`

  button.removeEventListener("click", confirmar)
}
