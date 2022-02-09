function imprimirSoma(a, b){
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //Retorna NaN (Not a Number), por faltar o segundo elemento da função
imprimirSoma(10, 3, 4, 5, 6, 7, 8) //Vai somar apenas os dois primeiros elementos e ignorar os demais
imprimirSoma() // Retorna NaN (Not a Number), por faltar o segundo elemento da função

// Função com Retorno
function soma(a, b = 1) {
  return a + b
}
console.log(soma(2, 3))
console.log(soma(2)) //Retorna o valor 3, por entender que o segundo elemento tem como valor padrão 1
console.log(soma()) // Retorna NaN (Not a Number), por faltar o primeiro elemento da função