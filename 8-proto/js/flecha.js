"use strict";

const sumar = (a, b) => {
  console.log(a + b);
};

let arr = [3, 5];

sumar(...arr);

// let valor1 = "valor 1 ";
// let valor2 = "valor 2 ";
// let valor3 = "valor 3 ";

// let arr = ["valor 1 ", "valor 2 ", "valor 3 "];
// let arr2 = ["valor 4 ", "valor 5 ", "valor 6 "];

// let arr3 = [...arr, ...arr2];
// console.log(arr3);

// let edad = 25;

// edad >= 18 ? console.log("nice") : console.log("noe");

// const sumar = (frase, ...num) => {
//   let res = 0;
//   for (let Num of num) res += Num;
//   console.log(`${frase} : ${res}`);
// };

// sumar("pedor", 10, 10, 10);

// const cambiarTamanio = (tamanio) => {
//   return () => {
//     document.querySelector(".text").style.fontSize = `${tamanio}px`;
//   };
// };

// const px12 = cambiarTamanio(12);
// const px14 = cambiarTamanio(14);
// const px16 = cambiarTamanio(16);

// document.querySelector(".t12").addEventListener("click", px12);
// document.querySelector(".t14").addEventListener("click", px14);
// document.querySelector(".t16").addEventListener("click", px16);
