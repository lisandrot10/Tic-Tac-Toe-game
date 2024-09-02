const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let currentPlayer = "X";
let casillasUsadas = [];

function printBoard() {
  console.log(`
   ${board[0]} | ${board[1]} | ${board[2]}
  -----------
   ${board[3]} | ${board[4]} | ${board[5]}
  -----------
   ${board[6]} | ${board[7]} | ${board[8]}
  `);
}

function verificarGanador() {
  if (
    (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
    (board[0] === "O" && board[1] === "O" && board[2] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[0]}"`);
    rl.close();
    return;
  } else if (
    (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
    (board[3] === "O" && board[4] === "O" && board[5] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[3]}"`);
    rl.close();
    return;
  } else if (
    (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
    (board[6] === "O" && board[7] === "O" && board[8] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[6]}"`);
    rl.close();
    return;
  } else if (
    (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
    (board[0] === "O" && board[3] === "O" && board[6] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[0]}"`);
    rl.close();
    return;
  } else if (
    (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
    (board[1] === "O" && board[4] === "O" && board[7] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[1]}"`);
    rl.close();
    return;
  } else if (
    (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
    (board[2] === "O" && board[5] === "O" && board[8] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[2]}"`);
    rl.close();
    return;
  } else if (
    (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
    (board[0] === "O" && board[4] === "O" && board[8] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[0]}"`);
    rl.close();
    return;
  } else if (
    (board[2] === "X" && board[4] === "X" && board[6] === "X") ||
    (board[2] === "O" && board[4] === "O" && board[6] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[2]}"`);
    rl.close();
    return;
  }
  if (casillasUsadas.length === board.length) {
    console.clear();
    console.log(`Empate!, el juego ha finalizado`);
    rl.close();
    return;
  }
}
function tresEnRaya() {
  console.log("Hola!, bienvenido al juego de tres en raya");

  if (
    (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
    (board[0] === "O" && board[1] === "O" && board[2] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[0]}"`);
    rl.close();
    return;
  } else if (
    (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
    (board[3] === "O" && board[4] === "O" && board[5] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[3]}"`);
    rl.close();
    return;
  } else if (
    (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
    (board[6] === "O" && board[7] === "O" && board[8] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[6]}"`);
    rl.close();
    return;
  } else if (
    (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
    (board[0] === "O" && board[3] === "O" && board[6] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[0]}"`);
    rl.close();
    return;
  } else if (
    (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
    (board[1] === "O" && board[4] === "O" && board[7] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[1]}"`);
    rl.close();
    return;
  } else if (
    (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
    (board[2] === "O" && board[5] === "O" && board[8] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[2]}"`);
    rl.close();
    return;
  } else if (
    (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
    (board[0] === "O" && board[4] === "O" && board[8] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[0]}"`);
    rl.close();
    return;
  } else if (
    (board[2] === "X" && board[4] === "X" && board[6] === "X") ||
    (board[2] === "O" && board[4] === "O" && board[6] === "O")
  ) {
    console.clear();
    console.log(`¡Terminó el juego! El ganador es el jugador "${board[2]}"`);
    rl.close();
    return;
  }
  if (casillasUsadas.length === board.length) {
    console.clear();
    console.log(`Empate!, el juego ha finalizado`);
    rl.close();
    return;
  }

  rl.question(
    `Por favor selecciona una casilla. Jugador actual : "${currentPlayer}"`,
    (casilla) => {
      if (board.indexOf(casilla) >= 0 && currentPlayer === "X") {
        board[casilla - 1] = currentPlayer;
        currentPlayer = "O";
        casillasUsadas.push(casilla);
        tresEnRaya();
        return;
      }

      if (board.indexOf(casilla) >= 0 && currentPlayer === "O") {
        board[casilla - 1] = currentPlayer;
        currentPlayer = "X";
        casillasUsadas.push(casilla);
        tresEnRaya();
        return;
      }

      if (casillasUsadas.indexOf(casilla >= 0)) {
        tresEnRaya();
        console.log(
          "esta casilla ya esta siento ultilizada, por favor selecciona otra"
        );
        return;
      }
    }
  );

  printBoard();
}

tresEnRaya();
