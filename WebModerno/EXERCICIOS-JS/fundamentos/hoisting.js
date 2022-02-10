/*
  A palavra hoisting significa içar, jogar para Cisa
  No Java Script quando declaramos uma variavel com var, ela sofre o efeito
  hoisting. Ou seja, podemos declarar a variavel onde quizermos que o js irá jogar
  ela para top
 */

 console.log('a =', a)
 var a = 2
 console.log('a =', a)

 function teste() {
  console.log('a =', a)
  var a = 2
  console.log('a =', a)
 }

 teste()

//  ****************************************************************************
// Com let não há o hoisting
console.log('a =', b)
 let b = 2
 console.log('a =', b)