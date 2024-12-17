const playerOneEditButton = document.getElementById("player-1-edit-btn");
const playerTwoEditButton = document.getElementById("player-2-edit-btn");
const userInfoOverlay = document.getElementById("user-overlay");
const backDropElement = document.getElementById("back-drop");
const formCancelBtn = document.getElementById("cancel-btn");
const UserInfoForm = document.querySelector("#user-form form");
const userNameInputElement = document.getElementById('user-name');

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
const selectedPlayerNameElement = document.getElementById('player-' + playerId + '-data'); 
selectedPlayerNameElement.children[1].textContent = userNameInputElement.value;
closePlayerConfigForm();
// selectedPlayerDataElement.children[1].textContent = userNameInputElement.value; 
// console.log(selectedPlayerName.value);


};

playerOneEditButton.addEventListener("click", openPlayerConfigForm);
playerTwoEditButton.addEventListener("click", openPlayerConfigForm);

formCancelBtn.addEventListener('click',closePlayerConfigForm);
UserInfoForm.addEventListener('submit',submitUserInfoForm);