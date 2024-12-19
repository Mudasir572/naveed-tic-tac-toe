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













playerOneEditButton.addEventListener("click", openPlayerConfigForm);
playerTwoEditButton.addEventListener("click", openPlayerConfigForm);

formCancelBtn.addEventListener('click',closePlayerConfigForm);
UserInfoForm.addEventListener('submit',submitUserInfoForm);

startGameButton.addEventListener('click',startTheGame);
actualGameElement.addEventListener('click',selectGameListElement);