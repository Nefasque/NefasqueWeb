/*
 *const temporizador = setTimeout(() => {
 *  console.log("hola");
 *}, 2000)
 *
 *clearTimeout(temporizador)
 */


const saludar = setInterval(() => {
  console.log("hola");
}, 1000)

setTimeout(() => {
  clearInterval(saludar);
}, 5000)
