const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
  const funcionarios = response.data
  // console.log(funcionarios)
})

const chinesas = (pais, genero, salario) => pais == 'China' && genero == 'M'
console.log(chinesas.map())

// const todosBolsistas = (resultado, bolsista) => resultado && bolsista
// console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))