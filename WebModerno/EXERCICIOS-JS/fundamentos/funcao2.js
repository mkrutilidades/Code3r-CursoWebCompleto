// Armazenando uma função na variavel
const imprimirSoma = function (a, b){
  console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => { //A seta substitui a palavra function da função
  return a + b
}
console.log(soma(2, 3))

// Retorno implicito
const subtracao = (a, b) => a - b //Quando a função tem apenas uma linha, não precisa das chaves {}
console.log(subtracao(2, 3))

// Função com apenas um parametro, pode ser ainda mais reduzida
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')