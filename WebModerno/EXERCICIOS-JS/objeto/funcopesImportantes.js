const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.values(pessoa))
console.log(Object.keys(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]}: ${e[1]}`)
  })

// Destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// OBJECT.ASSIGN (ECMAScript 2015)
const objetoDestino = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3, a: 4 }
const obj = Object.assign(objetoDestino, obj1, obj2)

console.log(objetoDestino)
console.log(obj1)
console.log(obj2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)