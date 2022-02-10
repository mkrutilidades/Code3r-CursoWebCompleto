/*
  Até pode ser declarada duas ou mais variaveis com o mesmo nome, desde que elas
  não estejam dentro do mesmo escopo.
*/

var numero = 1
{
  var numero = 2
  console.log('dentro =', numero)
}
console.log('fora =', numero)