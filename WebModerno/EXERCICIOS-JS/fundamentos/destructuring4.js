function rand([ min=0, max=1000 ]) {
  if(min > max) [min, max] = [max, min] //Aqui usamos operador destructuring para inverter os dados das variaveis
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
// console.log(rand()) - Nesta caso também gera problema por estar vazio