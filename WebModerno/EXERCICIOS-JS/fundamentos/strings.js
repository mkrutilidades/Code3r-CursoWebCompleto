const escola = "cod3r"

console.log(escola.charAt(4)) // charAt ==> Retorna o caracter na posição informada entre ()
console.log(escola.charAt(5)) // Quando tentamos retornar um caracter fora de posição, retorna vazio
console.log(escola.charCodeAt(3)) // charCodeAt ==> Traz o número do caracter na tabela Uni-code
console.log(escola.indexOf('3')) // Retorna em qual indice esta o caracter sendo buscado
console.log(escola.substring(1)) // Irá retornar o texto a partir do indice solicitado
console.log(escola.substring(0, 3)) // Nesta caso irá retorna do indice 0 até o indice 3 (sem incluir o indice 3)

console.log('Escola '.concat(escola).concat("!")) // Concat ==> Concatena strings
console.log('Escola ' + escola + "!") // Concat ==> Concatena strings

console.log(escola.replace(3, 'e')) // replace ==> Substitui o caracter pelo segundo indice informado

console.log('Ana,Maria,Pedro'.split(',')) // split ==> Separa uma string pelo divisor informado e coloca dentro de um array
console.log('Ana,Maria,Pedro'.split(/,/)) // split ==> Separa uma string pelo divisor informado e coloca dentro de um array