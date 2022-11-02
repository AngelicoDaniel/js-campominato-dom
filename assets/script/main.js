const griglia = document.getElementById('griglia')
let button = document.getElementById('button')
let difficulty = document.getElementById('difficulty')
button.addEventListener('click', play) 
let bombs = []

for ( i = 0; i < 16; i++){
    let bomb = Math.floor(Math.random() * parseInt(difficulty.value * difficulty.value)) + 1;
    bombs.push(bomb)
}
console.log(bombs)

function play() {
    griglia.innerHTML = ''
    for ( let i = 1; i <= difficulty.value * difficulty.value; i++) {
    const eleCell = document.createElement('div')
    eleCell.classList.add('square')
    eleCell.style.width = "calc(100% / "+difficulty.value+")"
    eleCell.innerHTML = `${i}`
    griglia.append(eleCell)
    

    eleCell.addEventListener('click', function () {
        this.classList.toggle('active')  
    }) 
}
}



