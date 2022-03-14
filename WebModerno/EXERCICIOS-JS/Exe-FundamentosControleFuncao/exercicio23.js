//Página 1
const cumprimentar = function(nome) {
  return console.log(`Olá ${nome}!`)
}
cumprimentar('Rodrigo')

const converteAno = function(idade) {
  const dias = 365
  return console.log(idade * 365)
}
converteAno(40)

const salario = function(vlHora, horasTrabalhadas) {
  const salarioBruto = vlHora * horasTrabalhadas
  const salarioLiquido = salarioBruto - salarioBruto * 30/100
return console.log(`Seu salário este Mês foi de: ${salarioLiquido}`)
}
salario(40, 220)