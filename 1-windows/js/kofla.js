
let pantallaX = window.screen.availWidth;
let pantallaY = window.screen.availHeight;

//let comprar = confirm(`desea comprar la pantalla de ${pantallaY}px X ${pantallaX}`);

//if (comprar) {
//alert("Pantalla comprada")
//} else {
//alert("hola mundo");
//}

let href = window.location.href;
let pathName = window.location.pathname;
let hostName = window.location.hostname;
let protocol = window.location.protocol;

document.write(href + "<br>");
document.write(pathName + "<br>");
document.write(hostName + "<br>");
document.write(protocol + "<br>");
