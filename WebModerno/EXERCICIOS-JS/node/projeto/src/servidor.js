const porta = 3005

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
  res.send({nome: 'Noteboock', preco: 12.345}) //Converte para JSON
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`)
})