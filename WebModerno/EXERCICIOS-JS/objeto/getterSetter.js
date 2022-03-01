const sequencia = {
  _valor: 1, // Se convencionou colocar anderlayne em variáveis que são restritas aos objetos
  get valor() { return this._valor++ }, // Irá retornar o valor + 1
  set valor(valor) {
     if(valor > this.valor) {
       this._valor = valor
     }
    }
}

console.log(sequencia.valor)
console.log(sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)