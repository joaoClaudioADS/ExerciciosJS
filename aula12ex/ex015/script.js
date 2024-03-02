function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'bebe-masculino.png')
            } else
            if (idade < 10) {
                //criança
                img.setAttribute('src', 'menino-jovem.png')
            } else if (idade < 18) {
                //adolecente
                img.setAttribute('src', 'homem-adolecente.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'bebe-feninino.png')
            } else
            if (idade < 10) {
                //criança
                img.setAttribute('src', 'menina-jovem.png')
            } else if (idade < 21) {
                //adolecente
                img.setAttribute('src', 'mulher-adolecente-235534.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}