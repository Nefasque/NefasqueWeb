
const button = document.querySelector("#button")
const contenedor2 = document.querySelector(".contenedor-2")
const contenedor1 = document.querySelector(".contenedor-1")
const input = document.querySelector("#input")
const img = document.querySelector(".img-pruba")
const h3 = document.getElementById("h3")
/*
 *button.addEventListener("click", () => {
 *  alert("hola")
 *})
 */

//button.addEventListener("click", saludar)

//function saludar() {
//alert("hola");
//button.removeEventListener("click", saludar)
//}

/*
 *button.addEventListener("click", (e) => {
 *  console.log(e.target)
 *})
 */

/*
 *contenedor1.addEventListener("click", (e) => {
 *  alert("click al contenedor-1")
 *  e.stopPropagation();
 *})
 *
 *
 *contenedor2.addEventListener("click", (e) => {
 *  alert("click al contenedor-2")
 *  e.stopPropagation();
 *})
 *
 */

//button.addEventListener("click", (e) => {
//alert("click al button")
//e.stopPropagation();
//})

// typo de Eventos 
//
// por maouse 
//


//dblclick = doble Click
/*
 *button.addEventListener("dblclick", (e) => {
 *  alert("click al button")
 *  e.stopPropagation();
 *})
 */

//mouseover = debajo del maouse
/*
 *contenedor2.addEventListener("mouseover", () => {
 *  alert("lalala");
 *})
 *
 */

//mouseout = el puntero sobre el elemento 
/*
 *contenedor1.addEventListener("mouseout", (e) => {
 *  alert("asas")
 *  e.stopPropagation()
 *})
 *
 */

//mouseout = el menu secudario
//contenedor1.addEventListener("contextmenu", (e) => {
//alert("asas")
//e.stopPropagation()
//})


//mouseout = el puntero se mueve sobre un 
//elemento
/*
 *contenedor1.addEventListener("mousemove", (e) => {
 *  alert("asas")
 *  e.stopPropagation()
 *})
 */

//mouseleave = el sale de un elemento
/*
 *contenedor1.addEventListener("mouseleave", (e) => {
 *  alert("asas")
 *  e.stopPropagation()
 *})
 */

//
//---------------------------------------
//Eventos del teclado - ----------
//---------------------------------------
//

//keydown = si una tecla se preciono en el elemento 
input.addEventListener("keydown", (e) => {
  console.log("una tecla fue precionada")
  e.stopPropagation()
})

//keypress = si una tecla se preciono y se suelta en el elemento 
input.addEventListener("keypress", (e) => {
  console.log("un usuario preciono una tecla")
  e.stopPropagation()
})
//keyup = si una tecla se suelta en el elemento 
input.addEventListener("keyup", (e) => {
  console.log("una tecla fue soltada")
  e.stopPropagation()
})

//
//---------------------------------------
//Eventos de la interfaz ---------------
//---------------------------------------
//

//
//error = para cargar una imgagen 
img.addEventListener("error", () => {
  console.log("erro img")
})

//load = cuando la pagina cargo corretamente
addEventListener("load", () => {
  console.log("ha cargado corretamente")
})

//beforeunload = cuando la pagina esta a punto de cerrace
addEventListener("beforeunload", () => {
  alert("lalala");
})

//unload = cuando la pagina esta cerrace
addEventListener("unload", () => {
  alert("lalala");
})

//unload = cuando la pagina es redimecionada 
addEventListener("resize", () => {
  console.log("resize")
})

//scroll = cuando el elemento es scroll
addEventListener("scroll", () => {
  console.log("scroll")
})

// selec se cumple cuado el text de input es selecionado 
input.addEventListener("select", (e) => {
  let start = e.target.selectionStart;
  let end = e.target.selectionEnd;
  let text = e.target.value;
  h3.innerHTML = text.substring(start, end);
})

// selec se cumple cuado el text de input es selecionado 
input.addEventListener("keyup", (e) => {
  let key = e.key;
  h3.innerHTML = key;

})

