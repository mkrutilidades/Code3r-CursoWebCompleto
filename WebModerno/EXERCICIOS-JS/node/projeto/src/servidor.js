const porta = 3005

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos()) //Converte para JSON
})

//EXIBE DADOS
app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

//SALVA DADOS
app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // Gera um JSON
})

//ALTERA DADOS
app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // Gera um JSON
})

//EXLCUIR DADOS
app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto) // Gera um JSON
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`)
})