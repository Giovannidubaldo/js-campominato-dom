// Punto 3 readme.md
// Funzione in cui determiniamo un array vuoto
function createBombs(number_of_bombs,cells){
    let array = [];

    // Punto 7 readme.md
    // Inserisco all'interno dell'array i numeri che ho generato casualmente
    for(let i=0; i<number_of_bombs; i++){
        array.push(createRandomNumbers(array,cells));
    }
    
    return array;
}

// Punto 4 readme.md
// Funzione che mi genera numeri random
function createRandomNumbers(arrayNumbers,cells){
    let flag = false;
    let number;
    
    // Punto 5 readme.md
    while(flag == false){
        number = Math.floor(Math.random() * cells + 1);

        // Punto 6 readme.md
        if(arrayNumbers.includes(number) == false){
            flag = true;
        }
    }
   
    return number;
}

// Funzione che mi crea la singola cella della griglia
function createCells(num, cell_row){

    // Creo un elemento 'div' con la classe 'square' e attribuisco un numero ad ogni singola casella
    let cell = document.createElement('div');
    cell.classList.add('square')

    // Determino la grandezza delle celle
    cell.style.width = `calc(100% / ${cell_row})`;
    cell.style.height = cell.style.width;

    cell.innerHTML = num;

    return cell;
}


// Funzione che mi crea la griglia
function createGrid(){
    
    // Recupero l'elemento 'grid'
    let grid = document.getElementById('grid');
    grid.innerHTML = '';

    // Recupero l'elemento select
    let select = document.getElementById('modality');
    const level = parseInt(select.value);

    // Dichiaro le variabili per determinare la grandezza della griglia
    let column;
    let row;

    // Determino il numero di bombe presenti all'interno del gioco
    const NUMBER_OF_BOMBS = 16;

    // Punto 8 readme.md
    // Determino la grandezza della griglia a seconda della modalità di gioco
    switch(level){
        case 1:
            column = 100;
            break;
        case 2:
            column = 81;
            break;
        case 3:
            column = 49;
            break;
        default:
            alert('Inserisci una modalità di gioco!');
    }

    row = Math.sqrt(column);

    // Richiamo la funzione per la creazione delle bombe
    const bombs = createBombs(NUMBER_OF_BOMBS,column);

    for (let i=1; i<=column; i++){
        let square = createCells(i,row);
        
        // Punto 10 readme.md
        // Cambio colore alla casella a seconda del gioco
        square.addEventListener('click', function(){

            // Punto 11 readme.md
            // La casella non contiene la bomba quindi continuo il gioco
            if(bombs.includes(i) == false){
                this.classList.add('square-blue');

            }

            // La casella contiene la bomba quindi il gioco termina
            else{
                this.classList.add('bg-danger');
            }
        })        
        
        grid.appendChild(square);
    }
}

// Attribuisco al button 'gioca' la creazione della griglia
document.getElementById('button').addEventListener('click', function(){
    createGrid();
})