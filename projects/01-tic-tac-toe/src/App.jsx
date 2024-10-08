import { useState } from "react"
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinner, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // null es que no hay ganador y false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {

    // no actualizamos la posicion 
    // si ya tiene algo
    if (board[index] || winner) return

    // actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>El Rayas</h1>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

     <WinnerModal resetGame={resetGame} winner={winner} /> 

    </main>
  )
}

export default App
