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











// playerOneEditButton.addEventListener("click", openPlayerConfigForm);
// playerTwoEditButton.addEventListener("click", openPlayerConfigForm);

// formCancelBtn.addEventListener('click',closePlayerConfigForm);
// UserInfoForm.addEventListener('submit',submitUserInfoForm);

// startGameButton.addEventListener('click',startTheGame);
// actualGameElement.addEventListener('click',selectGameListElement);