let valor1 // Não inicializada (vai retornar undefined)
console.log(valor1) //undefined

//console.log(valor2) //ins not defined (Nem declarado esta variavel foi)

valor = null // ausência de valor
console.log(valor) // nulo
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço definido
console.log(!!produto.preco)
console.log(produto)