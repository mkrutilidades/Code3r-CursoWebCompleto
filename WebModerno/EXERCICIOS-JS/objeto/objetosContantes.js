// Pessoa aponta ==> para um endereço de memómira 123 = {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)