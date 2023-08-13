let toggloData = false;

const getData = async () => {
  const resquest = await fetch("info.json");
  const data = await resquest.json();
  return data
}

const btnGetData = document.querySelector(".getData")
btnGetData.addEventListener("click", async () => {
  const conteinerFlex = document.querySelector(".conteiner-flex");

  if (!toggloData) {
    const data = await getData();
    const aprebados = createDIVdata(`aprebados ${data.aprebados}`);
    const reprobados = createDIVdata(`reprobados ${data.reprobados}`);

    const framento = document.createDocumentFragment();
    framento.appendChild(aprebados);
    framento.appendChild(reprobados);
    conteinerFlex.appendChild(framento);


    btnGetData.textContent = "Ocultar Datos"
    toggloData = true;
  }
  else {
    const aprebados = document.querySelector("div.data:nth-child(2)")
    const reprobados = document.querySelector("div.data:nth-child(3)")

    conteinerFlex.removeChild(aprebados);
    conteinerFlex.removeChild(reprobados);

    toggloData = false
    btnGetData.textContent = "Obtener Datos"

  }


})


const createDIVdata = data => {
  const div = document.createElement("DIV");
  div.classList.add("data");
  div.textContent = data;
  return div;
}


