let num = document.querySelector('input#numerotxt')
let n = Number(num.value)
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
let soma = 0

function adicionar() {
    if (Number(num.value) <= 0 || Number(num.value) > 100) {
        window.alert('ERRO! Por favor digite um número entre 1 e 100.')
    } else if (valores.indexOf(Number(num.value)) != -1) {
        window.alert('ERRO! Número já adicionado, por favor digite um número diferente.')
    } else {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
        
        soma += Number(num.value)
    }
    num.value = ''
    num.focus()
}

function finalizar() {

    res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
    
    res.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(Math, valores)}.</p>`
    
    res.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(Math, valores)}.</p>`
    
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    
    res.innerHTML += `<p>A média dos valores digitados é ${soma / valores.length}.</p>`
}