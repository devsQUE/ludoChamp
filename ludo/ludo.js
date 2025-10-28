import {
  BASE_POSITIONS,
  HOME_ENTRANCE,
  HOME_POSITIONS,
  PLAYERS,
  SAFE_POSITIONS,
  START_POSITIONS,
  STATE,
  TURNING_POINTS,
  WIN,
} from "./coordinates.js";
import { UI, crown } from "./ui.js";

export class Ludo {
  currentPositions = {
    P1: [],
    P2: [],
    P3: [],
    P4: [],
  };

  _diceValue;
  get diceValue() {
    return this._diceValue;
  }
  set diceValue(value) {
    this._diceValue = value;

    UI.setDiceValue(value);
  }

  _turn;
  get turn() {
    return this._turn;
  }
  set turn(value) {
    this._turn = value;
    UI.setTurn(value);
  }

  _state;
  get state() {
    return this._state;
  }
  set state(value) {
    this._state = value;

    if (value === STATE.DICE_NOT_ROLLED) {
      UI.enableDice();
      UI.unhighlightPieces();
    } else {
      UI.disableDice();
    }
  }

  _rollAnime;
  get rollAnime() {
    return this._rollAnime;
  }
  set rollAnime(deg) {
    this._rollAnimeX = deg;

    UI.rollDiceAnime(deg);
  }

  constructor() {
    console.log("Hello! Lets play Ludo!");
    /* this.diceValue = 9;
        this.turn = 1;
        this.state = STATE.DICE_ROLLED;*/
    this.resetGame();
    this.listenDiceClick();
    // this.listenResetClick();
    this.listenPieceClick();
    /*this.setPiecePosition('P1', 0, 101);
        this.setPiecePosition('P1', 1, 101);
        this.setPiecePosition('P1', 2, 101);
        this.setPiecePosition('P1', 3, 101);
        this.setPiecePosition('P2', 0, 201);
        this.setPiecePosition('P2', 1, 201);
        this.setPiecePosition('P2', 2, 201);
        this.setPiecePosition('P2', 3, 201);
        this.setPiecePosition('P3', 0, 301);
        this.setPiecePosition('P3', 1, 301);
        this.setPiecePosition('P3', 2, 301);
        this.setPiecePosition('P3', 3, 301); */
    // this.setPiecePosition('P1', 0, 101);
  }

  listenDiceClick() {
    UI.listenDiceClick(this.onDiceClick.bind(this));
  }

  onDiceClick() {
    console.log("dice clicked!");

    let degX;
    let degY;

    let diceNum = [1, 2, 3, 4, 5, 6];

    let randomNum = diceNum[Math.floor(Math.random() * diceNum.length)];

    let degree = randomNum;
    let a = 1890;
    let b = 1980;
    let c = 2070;
    let d = 2160;

    if (1 === degree) {
      degX = d;
      degY = d;
    } else if (2 === degree) {
      degX = c;
      degY = b;
    } else if (3 === degree) {
      degX = b;
      degY = c;
    } else if (4 === degree) {
      degX = b;
      degY = a;
    } else if (5 === degree) {
      degX = a;
      degY = b;
    } else if (6 === degree) {
      degX = d;
      degY = b;
    }
    this.diceValue = degree;
    let deg = [degX, degY];
    this.rollAnime = deg;
    this.state = STATE.DICE_ROLLED;

    this.checkForEligiblePieces();
  }

  checkForEligiblePieces() {
    const player = PLAYERS[this.turn];
    // eligible pieces of given player
    const eligiblePieces = this.getEligiblePieces(player);
    if (eligiblePieces.length) {
      // highlight the pieces
      UI.highlightPieces(player, eligiblePieces);
    } else {
      this.incrementTurn();
    }
  }

  incrementTurn() {
    if (this.turn === 0 && PLAYERS.length == 2) {
      this.pass = 1;
    } else if (this.turn === 1 && PLAYERS.length == 2) {
      this.pass = 0;
    } else if (this.turn === 0 && PLAYERS.length == 3) {
      this.pass = 1;
    } else if (this.turn === 1 && PLAYERS.length == 3) {
      this.pass = 2;
    } else if (this.turn === 2 && PLAYERS.length == 3) {
      this.pass = 0;
    } else if (this.turn === 0 && PLAYERS.length == 4) {
      this.pass = 1;
    } else if (this.turn === 1 && PLAYERS.length == 4) {
      this.pass = 2;
    } else if (this.turn === 2 && PLAYERS.length == 4) {
      this.pass = 3;
    } else if (this.turn === 3 && PLAYERS.length == 4) {
      this.pass = 0;
    }

    this.turn = this.pass;
    setTimeout(() => {
      this.state = STATE.DICE_NOT_ROLLED;
    }, 800);
  }

  getEligiblePieces(player) {
    return [0, 1, 2, 3].filter((piece) => {
      const currentPosition = this.currentPositions[player][piece];

      if (currentPosition === HOME_POSITIONS[player]) {
        return false;
      }

      if (
        BASE_POSITIONS[player].includes(currentPosition) &&
        this.diceValue !== 6
      ) {
        return false;
      }

      if (
        HOME_ENTRANCE[player].includes(currentPosition) &&
        this.diceValue > HOME_POSITIONS[player] - currentPosition
      ) {
        return false;
      }

      return true;
    });
  }

  /*  listenResetClick() {
        UI.listenResetClick(this.resetGame.bind(this));
    } */

  resetGame() {
    const numberOfPlayers = sessionStorage.getItem("numberOfPlayers");
    if (numberOfPlayers == "2") {
      console.log("reset game");
      PLAYERS.splice(0, 2, "P1", "P3");
    } else if (numberOfPlayers == "3") {
      console.log("reset game");
      PLAYERS.splice(0, 3, "P1", "P2", "P3");
    } else {
      console.log("reset game");
      PLAYERS.splice(0, 4, "P1", "P2", "P3", "P4");
    }

    WIN.splice(
      0,
      3,
      "golden(crown).svg",
      "silver(crown).svg",
      "bronze(crown).svg"
    );
    this.currentPositions = structuredClone(BASE_POSITIONS);

    PLAYERS.forEach((player) => {
      [0, 1, 2, 3].forEach((piece) => {
        this.setPiecePosition(
          player,
          piece,
          this.currentPositions[player][piece]
        );
      });
    });

    this.turn = 1;
    // Math.floor(Math.random() * 4);
    this.state = STATE.DICE_NOT_ROLLED;
  }

  listenPieceClick() {
    UI.listenPieceClick(this.onPieceClick.bind(this));
  }

  onPieceClick(event) {
    const target = event.target;

    if (
      !target.classList.contains("piece") ||
      !target.classList.contains("pieceHighlight")
    ) {
      return;
    }
    console.log("piece clicked");

    const player = target.getAttribute("player-id");
    const piece = target.getAttribute("piece");
    this.handlePieceClick(player, piece);
  }

  handlePieceClick(player, piece) {
    console.log(player, piece);
    const currentPosition = this.currentPositions[player][piece];

    if (BASE_POSITIONS[player].includes(currentPosition)) {
      this.setPiecePosition(player, piece, START_POSITIONS[player]);
      this.state = STATE.DICE_NOT_ROLLED;
      return;
    }

    UI.unhighlightPieces();
    this.movePiece(player, piece, this.diceValue);
  }

  setPiecePosition(player, piece, newPosition) {
    this.currentPositions[player][piece] = newPosition;
    UI.setPiecePosition(player, piece, newPosition);
  }

  movePiece(player, piece, moveBy) {
    const interval = setInterval(() => {
      this.incrementPiecePosition(player, piece);
      moveBy--;

      if (moveBy === 0) {
        clearInterval(interval);
        // check if player won
        if (this.hasPlayerWon(player)) {
          //  alert(`Player: ${player} has ${WIN[0]} Winner 🏆`);
          crown[player].style.visibility = "visible";
          crown[player].src = `./images/${WIN[0]}`;
          WIN.splice(0, 1);
          PLAYERS.splice(this.turn, 1);

          if (PLAYERS.length != 1) {
            this.turn = this.turn;
          } else if (PLAYERS.length == 1) {
            setTimeout(() => {
              alert("Game finished!");
              window.location.reload();
            }, 1000);
            return;
          }
        }

        const isKill = this.checkForKill(player, piece);

        if (
          isKill ||
          this.diceValue === 6 ||
          this.currentPositions[player][piece] === HOME_POSITIONS[player]
        ) {
          this.state = STATE.DICE_NOT_ROLLED;
          return;
        }

        this.incrementTurn();
      }
    }, 100);
  }

  checkForKill(player, piece) {
    const currentPosition = this.currentPositions[player][piece];
    if (player === "P1") {
      this.opponents = ["P2", "P3", "P4"];
    } else if (player === "P2") {
      this.opponents = ["P3", "P4", "P1"];
    } else if (player === "P3") {
      this.opponents = ["P4", "P1", "P2"];
    } else if (player === "P4") {
      this.opponents = ["P1", "P2", "P3"];
    }
    const opponent = this.opponents;

    let kill = false;
    for (let i = 0; i < 3; i++) {
      [0, 1, 2, 3].forEach((piece) => {
        const opponentPosition = this.currentPositions[opponent[i]][piece];

        if (
          currentPosition === opponentPosition &&
          !SAFE_POSITIONS.includes(currentPosition)
        ) {
          this.setPiecePosition(
            opponent[i],
            piece,
            BASE_POSITIONS[opponent[i]][piece]
          );
          kill = true;
        }
      });
    }

    return kill;
  }

  hasPlayerWon(player) {
    return [0, 1, 2, 3].every(
      (piece) => this.currentPositions[player][piece] === HOME_POSITIONS[player]
    );
  }

  incrementPiecePosition(player, piece) {
    this.setPiecePosition(
      player,
      piece,
      this.getIncrementedPosition(player, piece)
    );
  }

  getIncrementedPosition(player, piece) {
    const currentPosition = this.currentPositions[player][piece];

    if (currentPosition === TURNING_POINTS[player]) {
      return HOME_ENTRANCE[player][0];
    } else if (currentPosition === 51) {
      return 0;
    }
    return currentPosition + 1;
  }
}
