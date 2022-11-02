const griglia = document.getElementById('griglia')
let button = document.getElementById('button')
let difficulty = document.getElementById('difficulty')
button.addEventListener('click', game)

let arrBombs = []

function randomBombs (maxSquares){
    for( let x = 0; x < 16; x++){
        let randomBombs = Math.floor(Math.random() * maxSquares)
        if (arrBombs.includes(randomBombs)){
            x--;
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

        let element = creazioneBox();
        console.log(element)
        element.innerHTML += `${i}`
        element.addEventListener('click', function() {
        console.log(this)
        this.classList.toggle('active')

    })
    
    
    griglia.append (element)
}
}




