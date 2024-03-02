
const agora = new Date()
const hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 0){
    console.log('numero inválido!!!')
}else if (hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if(hora < 18) {
    console.log('Boa Tarde!')
} else if(hora <= 24){
    console.log("Boa Noite!")
} else if(hora > 24){
    console.log('Numero inválido')
}
