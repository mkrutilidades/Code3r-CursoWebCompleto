function tratarErroElancar(erro) {
	throw new Error('...')
  // throw 10 //Retornar um number
  // throw true //Retornar um boelano
  // throw 'mensagem' //Retornar uma string
  // throw {
	//   nome: erro.name,
	//   msg: erro.message,
	//   date: New Date
  // } //Retornar um objeto
}

function imprimirNomeGritado(obj) {
	try {
		console.log(obj.name.toUpperCase() + '!!!')
	}
  catch (e) {
		tratarErroElancar(e)
	}
  finally {
    console.log('final')
  }
}

const obj = { nome: 'Rodrigo'}
imprimirNomeGritado(obj)