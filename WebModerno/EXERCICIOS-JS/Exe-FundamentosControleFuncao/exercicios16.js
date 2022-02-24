function calculadora (numero1, operacao, numero2) {
  switch (operacao) {
    case '+':
      return numero1 + numero2
    case '-':
      return numero1 - numero2
    case '*':
      return numero1 * numero2
    case '/':
      return numero1 / numero2
    default:
      return 'Operacao inválida!'
  }
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));