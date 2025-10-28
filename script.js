const playBtn = document.querySelector("#playBtn");
const pieceType = document.querySelectorAll("#optionPiece");
const numberOfPlayers = document.querySelectorAll('input[name="num_players"]');
const player1 = document.querySelector("#player_name_1");
const player2 = document.querySelector("#player_name_2");
const player3 = document.querySelector("#player_name_3");
const player4 = document.querySelector("#player_name_4");

playBtn.addEventListener("click", () => {
  let selectedValue;
  let selectedPlayers;
  for (const radio of pieceType) {
    if (radio.checked) {
      selectedValue = radio.value;
      break; // Stop the loop once a selection is found
    }
  }
  for (const radio of numberOfPlayers) {
    if (radio.checked) {
      selectedPlayers = radio.value;
      break; // Stop the loop once a selection is found
    }
  }

  if (selectedValue === "pawns") {
    sessionStorage.setItem("Rpiece", "./images/Rpiece(arrow).svg");
    sessionStorage.setItem("Gpiece", "./images/Gpiece(arrow).svg");
    sessionStorage.setItem("Bpiece", "./images/Bpiece(arrow).svg");
    sessionStorage.setItem("Ypiece", "./images/Ypiece(arrow).svg");
    sessionStorage.setItem("height", "35px");
    sessionStorage.setItem("width", "35px");
    sessionStorage.setItem("margin", "0 0 25px 0");
  } else if (selectedValue === "tokens") {
    sessionStorage.setItem("Rpiece", "./images/Rpiece(coin).svg");
    sessionStorage.setItem("Gpiece", "./images/Gpiece(coin).svg");
    sessionStorage.setItem("Bpiece", "./images/Bpiece(coin).svg");
    sessionStorage.setItem("Ypiece", "./images/Ypiece(coin).svg");
    sessionStorage.setItem("height", "21px");
    sessionStorage.setItem("width", "21px");
    sessionStorage.setItem("margin", "0 0 0 0");
  }

  sessionStorage.setItem("numberOfPlayers", selectedPlayers);

  sessionStorage.setItem("firstPlayer", player1.value);
  sessionStorage.setItem("secondPlayer", player2.value);
  sessionStorage.setItem("thirdPlayer", player3.value);
  sessionStorage.setItem("fourthPlayer", player4.value);

  window.location.href = "game.html";
});
