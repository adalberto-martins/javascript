function tabuada() {
    let nun = document.getElementById('txtn')
    let tab = document.getElementById('Seltab')
    if (nun.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(nun.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

    }

}