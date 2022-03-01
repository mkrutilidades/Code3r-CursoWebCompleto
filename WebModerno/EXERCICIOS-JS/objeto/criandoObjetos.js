// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Usando a função Object como construtura
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Através de Funções Construtoras
function Produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Noteboock', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Usando uma Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Usando Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Utilizando uma Função que retorna um Objeto
const formJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(formJSON.info)