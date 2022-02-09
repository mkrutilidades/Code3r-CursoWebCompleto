const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
console.log(concatenacao)

// Com templateString
let template = `Olá ${nome}!`
console.log(template)

template = `
Olá ${nome}!
`
console.log(template)

template = `
Olá
${nome}
!
`
console.log(template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

/*
*** Nesta função, o sistema vai pegar a palavra cuidado e colocar dentro da variavel up, que por sua
*** vez irá pegar este texto e converter para letras maiúsculas e concatenar na tela com o resto da expressão
*/
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)