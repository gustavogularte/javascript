function carregar() {
    var img = document.getElementById('foto')
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=4 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = '<img src="tarde.jpg">' 
        document.body.style.background = '#b9846f'
    } else {
        img.innerHTML = '<img src="noite.jpg">'
        document.body.style.background = '#000C14'
    }
}