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