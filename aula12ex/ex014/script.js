function carregar() {
    var img = document.getElementById('foto')
    var msg = document.getElementById('msg')
    var data = new Date()
    hora = 17

    msg.innerHTML = `Agora são ${hora}`

    if (hora < 12) {
        img.src = 'imagens/manha.png'
    } else if (hora <= 18) {
        img.scr = 'tarde.jpg'
    }
}