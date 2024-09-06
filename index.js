const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let currentPlayer = "X";

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
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combinacion of combinacionesGanadoras) {
    let a = combinacion[0];
    let b = combinacion[1];
    let c = combinacion[2];
    if (board[a] === board[b] && board[c] === board[b]) {
      return board[a];
    }
  }
  return null;
}
function tresEnRaya() {
  const ganador = verificarGanador();

  if (ganador) {
    console.log(`¡Terminó el juego! El ganador es ${ganador}`);
    rl.close();
    return;
  }
  if (
    board.every((cell) => cell === "X"|| cell === "O") 
    
  ) {
    console.clear();
    console.log("¡Empate!, el juego ha finalizado");
    rl.close();
    return;
  }

  rl.question(
    `Por favor selecciona una casilla. Jugador actual : "${currentPlayer}"`,
    (casilla) => {
      if (board[casilla - 1] === "X" || board[casilla - 1] === "O") {
        tresEnRaya();
        console.log(
          "Esta casilla ya está siendo utilizada, por favor selecciona otra"
        );
        return;
      }

      if (isNaN(casilla) || casilla < 1 || casilla > board.length) {
        tresEnRaya();
        console.log("Inserte una casilla válida");
        return;
      }

      if (board.indexOf(casilla) >= 0 && currentPlayer === "X") {
        board[casilla - 1] = currentPlayer;
        currentPlayer = "O";
        tresEnRaya();
        return;
      }

      if (board.indexOf(casilla) >= 0 && currentPlayer === "O") {
        board[casilla - 1] = currentPlayer;
        currentPlayer = "X";
        tresEnRaya();
        return;
      }
    }
  );

  printBoard();
}

console.log("Hola!, bienvenido al juego de tres en raya");
tresEnRaya();


