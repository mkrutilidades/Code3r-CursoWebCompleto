// novo recurso do ES2015
const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000
  }
}

// Vamos pedir para tirar de dentro do objeto pessoa, as propriedades nome e idade
// sem a utilizar o ponto como referência, vamos usar o operador destructuring para isso
const { nome, idade } = pessoa 
console.log(nome, idade)

const { nome:n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa //Para forçar não retornar undefynid
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num} } = pessoa
console.log(ag, num)