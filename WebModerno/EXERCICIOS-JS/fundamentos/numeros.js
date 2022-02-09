const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // isInteger => Serve para verificar se o número da variavel é inteiro

const avalaliacao1 = 9.871
const avalaliacao2 = 6.871

const total = avalaliacao1 * peso1 + avalaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) //toFixed => Serve para definir o número de casas decimais a retornar

console.log(media.toString()) //toString() => Transaforma o número em um texto
