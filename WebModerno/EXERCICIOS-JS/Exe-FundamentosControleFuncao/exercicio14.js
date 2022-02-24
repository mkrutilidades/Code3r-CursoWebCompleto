function venderFruta(fruta) {
  switch(fruta) {
    case 'Maçã':
      console.log('Não vendemos esta fruta aqui.')
      break
    case 'Kiwi':
      console.log('Estamos com escassez de Kiwi.')
      break
    case 'Melância':
      console.log('Aqui está, custa R$3,00 o quilo.')
      break
    default:
      console.log('Erro, fruta inválida.')
  }
}

venderFruta('Maçã')
venderFruta('Kiwi')
venderFruta('Melancia')
venderFruta('Melância')
venderFruta('alcatra')