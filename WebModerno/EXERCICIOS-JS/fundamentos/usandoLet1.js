/*
  Como dito antes, variaveis com o mesmo nome em escopos diferentes serão aceitas
  porém, se usarmos let a variavel irá manter o valor atribuido. Se utilizarmos
  var, e ele assumirá todos os valores atribuidos.
*/
/*
  A preferência de utilização de variaveis é de dentro para fora entre escopos,
  quando tratada em blocos.
*/

var numero = 1
{
  let numero = 2
  console.log('dentro =', numero)
}
console.log('fora =', numero)