import { COORDINATES_MAP, PLAYERS } from "./coordinates.js";
const diceButtonElement = document.querySelector(".dice");
// const resetBtn = document.querySelector('#resetBtn');
export const pieces = document.querySelectorAll(".piece");
const playerPiecesElements = {
  P1: document.querySelectorAll('[player-id="P1"].piece'),
  P2: document.querySelectorAll('[player-id="P2"].piece'),
  P3: document.querySelectorAll('[player-id="P3"].piece'),
  P4: document.querySelectorAll('[player-id="P4"].piece'),
};
export const face = document.querySelectorAll(".face");
const NameDisplay = document.querySelectorAll("#nameDisplay");
export const crown = {
  P1: document.querySelector('[player-id="P1"].crown'),
  P2: document.querySelector('[player-id="P2"].crown'),
  P3: document.querySelector('[player-id="P3"].crown'),
  P4: document.querySelector('[player-id="P4"].crown'),
};

export class UI {
  static listenDiceClick(callback) {
    diceButtonElement.addEventListener("click", callback);
  }

  /* static listenResetClick(callback) {
        resetBtn.addEventListener('click', callback);
    } */

  static listenPieceClick(callback) {
    for (let i = 0; i < 16; i++) {
      pieces[i].addEventListener("click", callback);
    }
  }

  /**
   *
   * @param {string} player
   * @param {Number} piece
   * @param {Number} newPosition
   */

  static setPiecePosition(player, piece, newPosition) {
    if (!playerPiecesElements[player] || !playerPiecesElements[player][piece]) {
      console.error(
        `Player element of given player: ${player} and piece: ${piece} not found`
      );
      return;
    }
    const move = COORDINATES_MAP[newPosition];

    const pieceElement = playerPiecesElements[player][piece];
    move.appendChild(pieceElement);
  }

  static setTurn(index) {
    if (index < 0 || index >= PLAYERS.length) {
      console.error("index out of bound!");
      return;
    }
    const player = PLAYERS[index];

    console.log(player);

    const activePlayerBase = document.querySelector(".home.baseHighlight");
    if (activePlayerBase) {
      setTimeout(() => {
        activePlayerBase.classList.remove("baseHighlight");
      }, 800);
    }
    const baseHighlighter = document.querySelector(
      `[player-id="${player}"].home`
    );
    setTimeout(() => {
      baseHighlighter.classList.add("baseHighlight");
    }, 800);
    const container = document.querySelector(
      `[player-id="${player}"].container`
    );

    setTimeout(() => {
      container.appendChild(diceButtonElement);

      if (
        document
          .querySelector(`[player-id="P1"].container`)
          .contains(diceButtonElement)
      ) {
        diceButtonElement.style.display = "block";
        for (let i = 0; i < 6; i++) {
          face[i].style.background = "#b30007";
        }
      } else if (
        document
          .querySelector(`[player-id="P2"].container`)
          .contains(diceButtonElement)
      ) {
        diceButtonElement.style.display = "block";
        for (let i = 0; i < 6; i++) {
          face[i].style.background = "#2a8400";
        }
      } else if (
        document
          .querySelector(`[player-id="P3"].container`)
          .contains(diceButtonElement)
      ) {
        diceButtonElement.style.display = "block";
        for (let i = 0; i < 6; i++) {
          face[i].style.background = "#1c47a6";
        }
      } else if (
        document
          .querySelector(`[player-id="P4"].container`)
          .contains(diceButtonElement)
      ) {
        diceButtonElement.style.display = "block";
        for (let i = 0; i < 6; i++) {
          face[i].style.background = "#a5aa00";
        }
      }
    }, 800);
  }

  static enableDice() {
    diceButtonElement.style.pointerEvents = "auto";
  }

  static disableDice() {
    diceButtonElement.style.pointerEvents = "none";
  }
  /**
   *
   * @param {string} player
   * @param {Number[]} pieces
   */

  static highlightPieces(player, pieces) {
    pieces.forEach((piece) => {
      const pieceElement = playerPiecesElements[player][piece];
      pieceElement.classList.add("pieceHighlight");
    });
  }

  static unhighlightPieces() {
    document.querySelectorAll(".piece.pieceHighlight").forEach((ele) => {
      ele.classList.remove("pieceHighlight");
    });
  }

  static setDiceValue(value) {
    console.log(value);
  }

  /* static pieceOption(symbol) {
    let coinPieces = ['./images/Rpiece(coin).svg', './images/Gpiece(coin).svg', './images/Bpiece(coin).svg', './images/Ypiece(coin).svg'];
    let arrowPieces = ['./images/Rpiece(arrow).svg', './images/Gpiece(arrow).svg', './images/Bpiece(arrow).svg', './images/Ypiece(arrow).svg'];
    if (symbol === 0) {
            pieces[0].src =`${coinPieces[0]}`;
            pieces[1].src =`${coinPieces[0]}`;
            pieces[2].src =`${coinPieces[0]}`;
            pieces[3].src =`${coinPieces[0]}`;
            pieces[4].src =`${coinPieces[1]}`;
            pieces[5].src =`${coinPieces[1]}`;
            pieces[6].src =`${coinPieces[1]}`;
            pieces[7].src =`${coinPieces[1]}`;
            pieces[8].src =`${coinPieces[2]}`;
            pieces[9].src =`${coinPieces[2]}`;
            pieces[10].src =`${coinPieces[2]}`;
            pieces[11].src =`${coinPieces[2]}`;
            pieces[12].src =`${coinPieces[3]}`;
            pieces[13].src =`${coinPieces[3]}`;
            pieces[14].src =`${coinPieces[3]}`;
            pieces[15].src =`${coinPieces[3]}`;
            
    }else if (symbol === 1){
            pieces[0].src =`${arrowPieces[0]}`;
            pieces[1].src =`${arrowPieces[0]}`;
            pieces[2].src =`${arrowPieces[0]}`;
            pieces[3].src =`${arrowPieces[0]}`;
            pieces[4].src =`${arrowPieces[1]}`;
            pieces[5].src =`${arrowPieces[1]}`;
            pieces[6].src =`${arrowPieces[1]}`;
            pieces[7].src =`${arrowPieces[1]}`;
            pieces[8].src =`${arrowPieces[2]}`;
            pieces[9].src =`${arrowPieces[2]}`;
            pieces[10].src =`${arrowPieces[2]}`;
            pieces[11].src =`${arrowPieces[2]}`;
            pieces[12].src =`${arrowPieces[3]}`;
            pieces[13].src =`${arrowPieces[3]}`;
            pieces[14].src =`${arrowPieces[3]}`;
            pieces[15].src =`${arrowPieces[3]}`;
    }
    }*/

  static rollDiceAnime(deg) {
    diceButtonElement.style.transition = "0.5s ease";
    diceButtonElement.style.transform = `rotateX(${deg[0]}deg) rotateY(${deg[1]}deg)`;

    diceButtonElement.addEventListener("transitionend", () => {
      diceButtonElement.style.transition = "none";
      const actualDegX = deg[0] % 360;
      const actualDegY = deg[1] % 360;
      diceButtonElement.style.transform = `rotateX(${actualDegX}deg) rotateY(${actualDegY}deg)`;
    });
  }
}

const Rpiece = sessionStorage.getItem("Rpiece");
const Gpiece = sessionStorage.getItem("Gpiece");
const Bpiece = sessionStorage.getItem("Bpiece");
const Ypiece = sessionStorage.getItem("Ypiece");
const height = sessionStorage.getItem("height");
const width = sessionStorage.getItem("width");
const margin = sessionStorage.getItem("margin");

pieces[0].src = `${Rpiece}`;
pieces[1].src = `${Rpiece}`;
pieces[2].src = `${Rpiece}`;
pieces[3].src = `${Rpiece}`;
pieces[4].src = `${Gpiece}`;
pieces[5].src = `${Gpiece}`;
pieces[6].src = `${Gpiece}`;
pieces[7].src = `${Gpiece}`;
pieces[8].src = `${Ypiece}`;
pieces[9].src = `${Ypiece}`;
pieces[10].src = `${Ypiece}`;
pieces[11].src = `${Ypiece}`;
pieces[12].src = `${Bpiece}`;
pieces[13].src = `${Bpiece}`;
pieces[14].src = `${Bpiece}`;
pieces[15].src = `${Bpiece}`;
for (let i = 0; i < 16; i++) {
  pieces[i].style.height = `${height}`;
  pieces[i].style.width = `${width}`;
  pieces[i].style.margin = `${margin}`;
}

const firstPlayer = sessionStorage.getItem("firstPlayer");
const secondPlayer = sessionStorage.getItem("secondPlayer");
const thirdPlayer = sessionStorage.getItem("thirdPlayer");
const fourthPlayer = sessionStorage.getItem("fourthPlayer");
NameDisplay[0].innerHTML = `${firstPlayer}`;
NameDisplay[1].innerHTML = `${secondPlayer}`;
NameDisplay[3].innerHTML = `${thirdPlayer}`;
NameDisplay[2].innerHTML = `${fourthPlayer}`;
