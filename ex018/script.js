let nun = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if(isNumero(nun.value) && !inLista(nun.value, valores)) {
        valores.push(Number(nun.value))
        let item = document.createElement('option')
        item.text = `Valor ${nun.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    nun.value = ''
    nun.focus()

}

function finalizar() {
    if (valores.length == 0) {
        window.alert ('Adicionar valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]

        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</P>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<P>O maior valor informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media.toFixed(2)}</strong>.</P>`

    }

}