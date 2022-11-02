const griglia = document.getElementById('griglia')
let button = document.getElementById('button')
let difficulty = document.getElementById('difficulty')
button.addEventListener('click', play) 
let bombs = []
let numbers = []

function bombe(){
    for ( i = 0; i < 16; i++){
    let bomb = Math.floor(Math.random() * parseInt(difficulty.value * difficulty.value)) + 1;
    bombs.push(bomb)
    }
}




function play() {
    griglia.innerHTML = ''
    let bombElement = bombe();
    console.log(bombs)
    for ( let i = 1; i <= difficulty.value * difficulty.value; i++) {
    const eleCell = document.createElement('div')
    eleCell.classList.add('square')
    eleCell.style.width = "calc(100% / "+difficulty.value+")"
    eleCell.innerHTML = `${i}`
    griglia.append(eleCell)
    numbers.push(i)
    eleCell.addEventListener('click', function () {
        if (numbers.includes(bombs[i])){
            i++
            this.classList.toggle('error')
        }   else {
            this.classList.toggle('active')
        }

    }) 
}   console.log(numbers)
}



