const griglia = document.getElementById('griglia')
let button = document.getElementById('button')
let difficulty = document.getElementById('difficulty')
button.addEventListener('click', game)

let arrBombs = []

function randomBombs (maxSquares){
    for( let i = 0; i < 16; i++){
        let randomBombs = Math.floor(Math.random() * maxSquares)
        if (arrBombs.includes(randomBombs)){
            i--;
        }   else{
            arrBombs.push(randomBombs)
        }
    }
}


function creazioneBox(){
    div = document.createElement('div');
    div.classList.add('square');
    div.style.width = "calc(100%/"+difficulty.value+")";
    return div;
    //var aggettivo = "forte";
    //var frase = "goku è " + aggettivo + "!";
}
console.log( creazioneBox() )


function game(){

    griglia.innerHTML = ''
    let maxSquares = difficulty.value*difficulty.value;
    
    for (let i = 1; i <= maxSquares; i++){
        // let bombs = randomBombs();
        let element = creazioneBox();
        console.log(element)
        element.innerHTML += `${i}`
        element.addEventListener('click', function() {
        console.log(this)
        if ( this == arrBombs[i]){
            this.classList.toggle('error')
        }   else {
            this.classList.toggle('active')
        }


    })

    griglia.append (element)
    }
}




