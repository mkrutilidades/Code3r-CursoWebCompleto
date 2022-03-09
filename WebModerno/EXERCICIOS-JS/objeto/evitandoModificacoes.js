// Object.preventExtensions
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensivel?', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar Branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado?:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = Selado + Valores Constante
const carro = { marca: 'Fiat', modelo: 'Palio', ano: 2020 }
Object.freeze(carro)
console.log('Congelado?:', Object.isFrozen(carro))

carro.marca = 'Ferrari'
delete carro.ano
console.log(carro)