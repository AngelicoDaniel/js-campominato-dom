const griglia = document.getElementById('griglia')
let button = document.getElementById('button')
let difficulty = document.getElementById('difficulty')
button.addEventListener('click', play) 
let score = 0;

function bombe(){
    let bombs = []
    for ( let i = 0; i < 16; i++){
        let bomb;
        let controlloBombe = false
        while(!controlloBombe){
            bomb = Math.floor(Math.random() * difficulty.value * difficulty.value);
            if (!bombs.includes(bomb)){
                controlloBombe = true
            }
        }
        bombs.push(bomb)
    }
    console.log(bombs)
    return bombs
}



function play() {
    griglia.innerHTML = ''
    let bombs = bombe();
    for ( let i = 1; i <= difficulty.value * difficulty.value; i++) {
    const box = document.createElement('div')
    box.classList.add('square')
    box.style.width = "calc(100% / "+difficulty.value+")"
    box.innerHTML = `${i}`
    griglia.append(box)
    box.addEventListener('click', function () {
        if (bombs.includes(i)){
            i++
            this.classList.toggle('error')
            alert('hai perso. il tuo punteggio è '+score)
        }   else {
            this.classList.toggle('active')
            score++
            
        }

    }) 
}   
}


