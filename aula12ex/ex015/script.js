function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var tano = document.getElementById('txtano')
    var nasc =  Number(tano.value)
    var res = document.getElementById('res')
    
    if (nasc <= 0 || nasc > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - nasc
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            sexo = 'Homem'
            if (idade <= 13) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade <= 21) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            sexo = 'Mulher'
            if (idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }  
}

