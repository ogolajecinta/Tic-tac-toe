window.addEventListener('DOMContentLoaded',() =>{
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player'); 
    const resetButton = document.querySelector('#reset'); 
    const resetBoard = document.querySelector('.announcer'); 

    let board = ['','','','','','','','',''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX WON';
    const PLAYERO_WON = 'PLAYERO WON';
    const TIE = 'TIE';

    /*INDEXES WITHIN THE BOARD
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */
    
    const possibleWins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    const announce = (type) => {
        
    }

    const changePlayer = () => {
        playerDisplay.classList.remove('player${currentPlayer}');
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add('player${currentPlayer}');
    }

    const userAction = (tile,index) => {
        if (isValidAction(tile) && isGameActive){
            tile.innerText = currentPlayer;
            tile.classList.add('player${currentPlayer}');
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click',() => userAction(tile, index));
    }); 

    

    resetButton.addEventListener('click', resetBoard);
});