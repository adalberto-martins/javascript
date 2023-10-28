let nun = [5, 8, 2, 9, 3]
nun.sort()
nun.push(1)
console.log(nun)
console.log(`O vetor tem ${nun.length} posições`)
console.log(`O primeiro valor do vetor é ${nun[0]}`)
let pos = nun.indexOf(1)
if(pos == -1) {
    console.log('Posição não encontrada')
} else {
    console.log(`O valor 1 está na posição ${pos}`)
}
    
