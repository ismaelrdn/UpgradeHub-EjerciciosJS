// En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. 
// Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name} = car
const {itv} = car

console.log(name)
console.log(itv)

const [a2015, a2011, a2020] = itv

console.log(a2015);
console.log(a2011)
console.log(a2020)