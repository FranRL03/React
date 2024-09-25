import { WINNER_COMBOS } from "../constants.js"

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        // recogemos las posiciones de los disintos combos para
        // ganar
        const [a, b, c] = combo
        // comprobamos si el elemento de la posicion "a" es igual 
        // al de las posiciones "b" y "c",
        // si es igual devolvemos el elemento "a" que nos dira 
        // si el ganador es "x" u "o"
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    // no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    // revisamos si hay un empate 
    // si no hay más espacios vacios
    // en el tablero, es decir, 
    // al iniciar el juego el tablero esta iniciado con cada casilla en "null", 
    // entonces con esta linea de codigo revisamos que cada casilla
    // no tenga asignada el valor "null"
    return newBoard.every((square) => square !== null)
}