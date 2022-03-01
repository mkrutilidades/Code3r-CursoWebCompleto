// ANOTAÇÃO LITERAL DE OBJETOS - ES2015
const a = 1
const b = 2
const c = 3

/* ************************************ */
// Antigamente era assim
const obj1 = {a: a, b: b, c: c}
// Agora
const obj2 = {a, b, c}
console.log(obj1, obj2)
/* ************************************ */

/* ************************************ */
// Antes era assim
const nomeAtributo = 'nota'
const valorAtributo = 7.87
const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

//Agora é assim
const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)
/* ************************************ */

/* ************************************ */
// Definindo funções dentro do objeto (Antes)
const obj5 = {
  funcao1: function() {

  },
  // // Definindo funções dentro do objeto (Agora)
  funcao2() {

  }
}
console.log(obj5)
/* ************************************ */