// Punto 3 readme.md
// Funzione in cui determiniamo un array vuoto
function createBombs(){
    let array = [];

    // Inserisco all'interno dell'array i numeri che ho generato casualmente
    for(let i=0; i<100; i++){
        array.push(createRandomNumbers(array));
    }
    
    return array;
}

// Punto 4 readme.md
// Funzione che mi genera numeri random
function createRandomNumbers(arrayNumbers){
    let flag = false;
    let number;
    
    while(flag == false){
        number = Math.floor(Math.random() * 100 + 1);

        if(arrayNumbers.includes(number) == false){
            flag = true;
        }
    }
   
    return number;
}

// Funzione che mi crea la singola cella della griglia
function createCells(num){

    // Creo un elemento 'div' con la classe 'square' e attribuisco un numero ad ogni singola casella
    let cell = document.createElement('div');
    cell.classList.add('square')

    cell.innerHTML = num;

    return cell;
}

// Recupero l'elemento 'grid'
let grid = document.getElementById('grid');

// Funzione che mi crea la griglia
function createGrid(){

    for (let i=0; i<100; i++){
        let square = createCells(i+1);
        
        
        square.addEventListener('click', function(){
            this.classList.toggle('square-blue');
            console.log(this.innerText);
        })        
        
        grid.appendChild(square);
    }
}

// Attribuisco al button 'gioca' la creazione della griglia
document.getElementById('button').addEventListener('click', function(){
    grid.innerHTML = '';
    createGrid();
})