const griglia = document.getElementById('griglia')
let button = document.getElementById('button')
let difficulty = document.getElementById('difficulty')
button.addEventListener('click', game)
let array = []



function creazioneBox(){
    div = document.createElement('div');
    div.classList.add('square');
    div.style.width = "calc(100%/"+difficulty.value+")";
    return div;
    //var aggettivo = "forte";
    //var frase = "goku è " + aggettivo + "!";
}
console.log( creazioneBox() )

function bombs(array){
    let arrBombs = []
    for (let i = 0; i <= 16; i++){
    arrBombs.push(array[i])
    }
    return arrBombs
}

function game(){

    griglia.innerHTML = ''
    let squareToCreate = difficulty.value*difficulty.value;
    
    for (let i = 1; i <= squareToCreate; i++){

        let element = creazioneBox();
        console.log(element)

        element.addEventListener('click', function() {
        console.log(this)
        this.classList.toggle('active')

    })
    
    element.innerHTML += `${i}`
    griglia.append (element)
}
}




