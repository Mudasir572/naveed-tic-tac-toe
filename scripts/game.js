let gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let turnNumber = 1;
function startTheGame(){

    if(players[0].name !== '' & players[1].name !== ''){
      gameBoardElement.style.display = 'flex';
      currentPlayerNameElement.textContent = players[0].name;
    }else{
        alert("Please name the players first to start a game.")
      // return;
    }
  }
  
  function changeActivePlayer(){
    if(activePlayer === 0){
      activePlayer = 1
    }else{
      activePlayer = 0
    }
  }
  
  function selectGameListElement(event){
    if(event.target.tagName !== "LI"){
      return;
    }


  const selectedListElement = event.target;
if(selectedListElement.textContent !== ''){
    alert('please select empty box');
    return;
}
  selectedListElement.textContent = players[activePlayer].symbol;
  selectedListElement.style.backgroundColor =  "rgb(131, 26, 230)";
  selectedListElement.style.cursor =  "default";

  const selectedElementRow = selectedListElement.dataset.row - 1; 
  const selectedElementColumn = selectedListElement.dataset.col - 1; 

  gameData[selectedElementRow][selectedElementColumn] = activePlayer + 1;

  console.log(gameData)


//   gameData[selectedElementColumn]
  console.log(selectedElementRow);
  console.log(selectedElementColumn);
    // event.target.style.cursor =  "not-allowed";
  
    const gameResult = checkForGameResult();
    console.log(gameResult)
    changeActivePlayer();
    turnNumber++;
  currentPlayerNameElement.textContent = players[activePlayer].name;
  
  }
  

function checkForGameResult(){
    //  if(gameData[0][0] > 0 && gameData[0][0] === gameData[0][1] &&  gameData[0][1] === gameData[0][2]){
    //     return gameData[0][0]
    //  }
    //  if(gameData[1][0] > 0 && gameData[1][0] === gameData[1][1] &&  gameData[1][1] === gameData[1][2]){
    //     return gameData[1][0]
    //  }
    //  if(gameData[2][0] > 0 && gameData[2][0] === gameData[2][1] &&  gameData[2][1] === gameData[2][2]){
    //     return gameData[2][0]
    //  }


// checking rows for equality 
     for(let i=0;i < 3;i++){
        if(gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] &&  gameData[i][1] === gameData[i][2]){
            return gameData[i][0]
         }

        }

        // checking columns for equality 
     for(let i=0;i < 3;i++){
        if(gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] &&  gameData[1][i] === gameData[2][i]){
            return gameData[0][i]
         }
     }


     // checking diagonal top left to buttom right 
   if(gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] &&  gameData[1][1] === gameData[2][2]){
      return gameData[0][0];
   }

     // checking diagonal bottum left to top right 
   if(gameData[0][2] > 0 && gameData[0][2] === gameData[1][1] &&  gameData[1][1] === gameData[2][0]){
     return gameData[0][2];
   }

   if(turnNumber === 9){
       return -1;
    }
    return 0;
  }