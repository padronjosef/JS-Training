const limpiar = (veces, cardinal) => {
  console.log(`me mama el webo jhonny de ${veces} y ${cardinal}`);
};

var numeros = [
  { numero: 1, cardinal: "primero" },
  { numero: 2, cardinal: "segundo" },
  { numero: 3, cardinal: "tercero" },
  { numero: 4, cardinal: "cuarto" },
  { numero: 5, cardinal: "quinto" }
];

const par = []
const inpar = []

const contar = () => {
  for (let i = 0; i < numeros.length; i++) {
    // (numeros[i].numero %2 == 0)? par.push(`${numeros[i].numero} es par`) : inpar.push(`${numeros[i].numero} es inpar`)
    // console.log(`${numeros[i].cardinal} es el cardinal de ${numeros[i].numero}`)
    limpiar(numeros[i].numero, numeros[i].cardinal)
  }
}

contar()

// console.log(par)
// console.log(inpar)