class persona {
  constructor(nombre, instragram) {
    this.nombre = nombre
    this.instragram = instragram
  }
}

const data = [
  ["Pedro ", "@pedro"],
  ["jose ",],
  ["mario ", "@maio"],
  ["ramirez ", "@ramirez"]
]


let personas = [];

for (let i = 0; i < data.length; i++) {
  personas[i] = new persona(data[i][0], data[i][1]);
}

const getPersona = (id) => {
  return new Promise((resolve, reject) => {
    if (personas[id] == undefined)
      reject("ID equivocado");
    else resolve(personas[id]);
  })
}

const getInstragram = (id) => {
  return new Promise((resolve, reject) => {
    if (personas[id].instragram == undefined)
      reject("Instragram ERRO");
    else
      resolve(personas[id].instragram);
  })
}

let id = 1;

getPersona(id).then((persona) => {
  console.log(persona.nombre);
  return getInstragram(id)
}).then((instragram) => {
  console.log(instragram);
}).catch(e => console.log(e))




/*
 *
 *let nombre = "pedo";
 *
 *const promesa = new Promise((resolve, reject) => {
 *  if (nombre !== "pedro") reject("el nombre no es pedro");
 *  else resolve(nombre);
 *})
 *
 *promesa.then((resultado) => {
 *  console.log(resultado);
 *}).catch((e) => {
 *  console.log(e);
 *})
 *
 */


















