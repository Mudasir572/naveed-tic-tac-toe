const playerOneEditButton = document.getElementById("player-1-edit-btn");
const playerTwoEditButton = document.getElementById("player-2-edit-btn");
const userInfoOverlay = document.getElementById("user-overlay");
const backDropElement = document.getElementById("back-drop");
const formCancelBtn = document.getElementById("cancel-btn");
const UserInfoForm = document.querySelector("#user-form form");
const userNameInputElement = document.getElementById('user-name');
const startGameButton = document.getElementById('start-game-btn');
const gameBoardElement = document.getElementById('game-board');
const currentPlayerNameElement = document.getElementById('current-player-name');
const actualGameElement = document.querySelector('#game-board ol'); 

let activePlayer = 0;

const players = [
  {name: "",
    symbol: "X"
  },
  {
    name: "",
    symbol: "O"
  }
];

let playerId;

function openPlayerConfigForm(event) {
    playerId = event.target.dataset.playerid;
    console.log(playerId)
    // event.target.dataset
    console.log(event.target.dataset.playerid);
  userInfoOverlay.style.display = "block";
  backDropElement.style.display = "block";

}

function closePlayerConfigForm(){
    userInfoOverlay.style.display = "none";
    backDropElement.style.display = "none";
  
}
function submitUserInfoForm(event){
event.preventDefault();
// UserInfoForm.firstElementChild.lastElementChild.value();
// const userFormData = new FormData(event.target.entries);

const selectedPlayerNameElement = document.getElementById('player-' + playerId + '-data'); 
selectedPlayerNameElement.children[1].textContent = userNameInputElement.value;
players[playerId - 1].name = userNameInputElement.value;

// console.log(players);

userNameInputElement.value = "";
// console.log(userFormData);

closePlayerConfigForm();
// selectedPlayerDataElement.children[1].textContent = userNameInputElement.value; 
// console.log(selectedPlayerName.value);


};


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
  event.target.textContent = players[activePlayer].symbol;
  event.target.style.backgroundColor =  "rgb(131, 26, 230)";
  event.target.style.cursor =  "default";
  // event.target.style.cursor =  "not-allowed";
  
  changeActivePlayer();
currentPlayerNameElement.textContent = players[activePlayer].name;

}










playerOneEditButton.addEventListener("click", openPlayerConfigForm);
playerTwoEditButton.addEventListener("click", openPlayerConfigForm);

formCancelBtn.addEventListener('click',closePlayerConfigForm);
UserInfoForm.addEventListener('submit',submitUserInfoForm);

startGameButton.addEventListener('click',startTheGame);
actualGameElement.addEventListener('click',selectGameListElement);