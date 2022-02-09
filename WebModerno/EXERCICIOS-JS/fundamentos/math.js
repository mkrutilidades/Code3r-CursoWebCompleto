const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(area.toFixed(2))
console.log(area.toExponential(6))
console.log(area.toLocaleString(1))
console.log(typeof Math) // typeof => Traz o tipo da sentença solicitada. Neste caso, Math é um objeto do JS

/*
  Conforme vimos logo a cima, Math é um objeto de dentro do JS,
  cujo o qual dentro dele temos algumas funcionalidades como as do código a cima:
  ** Math.PI ===> é uma constante que guarda o valor de PI;
  ** Math.pow ===> Que é uma função que calcula a raiz
*/