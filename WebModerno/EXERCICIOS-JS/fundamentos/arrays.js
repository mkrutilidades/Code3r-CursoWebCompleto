const valores = [
  7.7, 8.9, 6.3, 9.2
]

console.log(typeof valores) //retorna o tipo de um array (object)

console.log(valores[0], valores[3]) //Retorna valores do indice 0 e indice 3
console.log(valores[4]) //Retorna undefined, porque não existe este indice neste array

valores[10] = 10
console.log(valores) // Inserimos o valor 10 no indice 10. Como não há valores do idice 4 ao indice 9, estes ficam vazios

console.log(valores.length) // length ==> Retorna a quantidade de elementos dentro do array

valores.push({id:3}, false, null, 'teste') // push ==> Inseri novos itens no array
console.log(valores)

console.log(valores.pop()) // pop ==> Função que remove o último elemento do array
console.log(valores)

delete valores[0] // delete ==> Remove o elemento do indice informado
console.log(valores)