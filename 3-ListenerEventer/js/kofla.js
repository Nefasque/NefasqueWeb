const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const materia = document.getElementById("materia")
const button = document.getElementById("button")
const rel = document.getElementById("resultado")

const validarCampos = () => {
  let error = [false];

  if (nombre.value.length < 5 || nombre.value.length > 32) {
    error[0] = true;
    error[1] = "el nombre debe tener entre 5 y 32 carateres "
    return error
  }

  if (!(email.value.includes("@")) ||
    !(email.value.endsWith(".com"))) {
    error[0] = true;
    error[1] = "ingrese un email valido"
    return error
  }

  if (materia.value.length < 5 || materia.value.length > 32) {
    error[0] = true;
    error[1] = "Materias invalidad"
    return error
  }

  return error
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  let error = validarCampos();
  if (error[0]) {
    rel.innerHTML = error[1];
    rel.classList.toggle("text-green", false);
    rel.classList.add("text-red");
  }
  else {
    rel.innerHTML = "solicitu envidad conrretamente";
    rel.classList.toggle("text-red", false);
    rel.classList.add("text-green");
  }
})

