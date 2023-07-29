import React, { useState } from 'react'
import './Board.css'
import { useTranslation } from 'react-i18next'

interface Props {}

export const Board: React.FC<Props> = () => {
  const { t } = useTranslation()

  //false == p1 true == p2
  const [turn, setTurn] = useState(false)
  const [winner, setWinner] = useState(0)

  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ])

  const [mainBoard, setMainBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])

  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ]

  const [squaresToPlay, setSquares] = useState([4])

  const capture = (main: number, sub: number) => {
    if (board[main][sub] == 0 && squaresToPlay.indexOf(main) != -1 && mainBoard[main] == 0) {
      const boardClone = board.slice()
      const mainClone = mainBoard.slice()

      if (!turn) {
        boardClone[main][sub] = 1
      } else {
        boardClone[main][sub] = 2
      }

      setBoard(boardClone)

      let capture = false
      let win = false

      //Check in case of a capture of a subsquare
      winningLines.forEach((line) => {
        if (boardClone[main][line[0]] != 0 && boardClone[main][line[1]] != 0 && boardClone[main][line[2]] != 0) {
          if (
            boardClone[main][line[0]] == boardClone[main][line[1]] &&
            boardClone[main][line[1]] == boardClone[main][line[2]]
          ) {
            if (!turn) {
              mainClone[main] = 1
            } else {
              mainClone[main] = 2
            }

            setMainBoard(mainClone)
            capture = true
          }
        }
      })

      //CHECK if game is won
      winningLines.forEach((line) => {
        if (mainClone[line[0]] != 0 && mainClone[line[1]] != 0 && mainClone[line[2]] != 0) {
          if (mainClone[line[0]] == mainClone[line[1]] && mainClone[line[1]] == mainClone[line[2]]) {
            if (!turn) {
              setWinner(1)
            } else {
              setWinner(2)
            }
            win = true
          }
        }
      })

      if (mainClone[sub] == 0 && !capture) {
        setSquares([sub])
        setTurn(!turn)
      } else if (!win) {
        const squares: number[] = []
        mainClone.forEach((square, index) => {
          if (square == 0) {
            squares.push(index)
          }
        })
        setSquares(squares)
        setTurn(!turn)
      } else {
        setSquares([])
      }
    }
  }

  const determineSymbol = (a: number) => {
    if (a == 0) {
      return ''
    } else if (a == 1) {
      return 'X'
    } else {
      return 'O'
    }
  }

  const boardElement = board.map((subBoard, index) => {
    const classPrefix = squaresToPlay.indexOf(index) != -1 ? 'active' : ''
    let subBoardClass = 'subboard'

    switch (mainBoard[index]) {
      case 1:
        subBoardClass = 'subboard captured x'
        break
      case 2:
        subBoardClass = 'subboard captured o'
        break
    }

    return (
      <div className={subBoardClass}>
        <p className={classPrefix} onClick={() => capture(index, 0)}>
          {determineSymbol(subBoard[0])}
        </p>
        <p className={classPrefix} onClick={() => capture(index, 1)}>
          {determineSymbol(subBoard[1])}
        </p>
        <p className={classPrefix} onClick={() => capture(index, 2)}>
          {determineSymbol(subBoard[2])}
        </p>
        <p className={classPrefix} onClick={() => capture(index, 3)}>
          {determineSymbol(subBoard[3])}
        </p>
        <p className={classPrefix} onClick={() => capture(index, 4)}>
          {determineSymbol(subBoard[4])}
        </p>
        <p className={classPrefix} onClick={() => capture(index, 5)}>
          {determineSymbol(subBoard[5])}
        </p>
        <p className={classPrefix} onClick={() => capture(index, 6)}>
          {determineSymbol(subBoard[6])}
        </p>
        <p className={classPrefix} onClick={() => capture(index, 7)}>
          {determineSymbol(subBoard[7])}
        </p>
        <p className={classPrefix} onClick={() => capture(index, 8)}>
          {determineSymbol(subBoard[8])}
        </p>
      </div>
    )
  })

  return (
    <div>
      <div className="board">{boardElement}</div>

      <div className="information">
        <div className={turn ? 'player one' : 'player one turn'}>
          <p className="username">Player 1 (X)</p>
          <p className="time">{t('timeremaining') + ' 1:23'}</p>
        </div>

        {winner ? (
          <div>
            <p>{`Player ${winner} wins!`}</p>
          </div>
        ) : (
          <div></div>
        )}

        <div className={turn ? 'player two turn' : 'player two'}>
          <p className="username">Player 2 (O)</p>
          <p className="time">{t('timeremaining') + ' 3:21'}</p>
        </div>
      </div>
    </div>
  )
}
