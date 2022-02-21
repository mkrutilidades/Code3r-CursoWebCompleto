// Função descrita normal
let dobro = function (a) {
  return 2 * a
}

// Função Arrow
dobro = (a) => {
  return 2 * a
}

// Função Arrow mais reduzida se ela tiver apenas um parametro
dobro = a => 2 * a // return esta implicito
console.log(dobro(Math.PI))

// Função Nomal
let ola = function () {
  return 'Óla'
}

// Função Arrow
ola = () => 'Olá'
ola = _ => 'Olá' // Possui parametro também
console.log(ola())