const getData = async () => {
  const peticion = await fetch("../info.json");
  const data = await peticion.json();
  return data;
}

getData()

const btnObtnerNombre = document.querySelector(".btn-getData");
btnObtnerNombre.addEventListener("click", async () => {
  let data = await getData();
  console.log(data);
  document.querySelector(".nombre").textContent = data.nombre;
  document.querySelector(".edad").textContent = data.edad;
})
