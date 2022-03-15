// Uma factory retorna um novo objeto
module.exports = () => {
  return {
    valor: 1,
    incrementa() {
      this.valor++
    }
  }
}