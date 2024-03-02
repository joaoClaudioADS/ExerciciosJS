
function carregar() {
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        alert('BOM DIA!')
        document.body.style.background = '#eddab5'
        img.src = 'manha.png'
    } else if (hora >= 12 && hora < 18) {
        alert('BOA TARDE!')
        img.src = 'tarde.png'
        document.body.style.background = '#af6047'
    } else {
        alert('BOA NOITE!')
        img.src = 'noite.png'
        document.body.style.background = '#000a2b' 
    }
}