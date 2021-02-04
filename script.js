// holds board
let originalBoard

// player = O, AI = X
const player = 'O'
const computer = 'X'

// hold all winning combinations
const winningCombos = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal left to right
  [0, 4, 8],
  // diagonal right to left
  [2, 4, 6]
]

// get document elements
const cells = document.querySelectorAll('.table-cell')
const tableOverlay = document.querySelector('.table-overlay')

// start the game
const startGame = () => {
  // hide results overlay
  tableOverlay.style.display = 'none'

  // fill an aray from 0-9
  // get only the keys (0-9)
  originalBoard = Array.from(Array(9).keys())

  // remove all the X's and O's from the board
}
