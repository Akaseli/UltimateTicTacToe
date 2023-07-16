import React, { useState } from 'react'
import './Board.css'
import { useTranslation } from 'react-i18next'

interface Props {}

export const Board: React.FC<Props> = () => {
  const { t } = useTranslation()

  //false == p1 true == p2
  const [turn, setTurn] = useState(false)

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

  const [squareToPlay, setSquare] = useState(4)

  const capture = (main: number, sub: number) => {
    if (board[main][sub] == 0 && main == squareToPlay) {
      const boardClone = board.slice()

      if (!turn) {
        boardClone[main][sub] = 1
      } else {
        boardClone[main][sub] = 2
      }

      setBoard(boardClone)
      setSquare(sub)
      setTurn(!turn)
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
    const classPrefix = index == squareToPlay ? 'active' : ''

    return (
      <div className={`subboard`}>
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
          <p className="username">Player 1</p>
          <p className="time">{t('timeremaining') + ' 1:23'}</p>
        </div>

        <div className={turn ? 'player two turn' : 'player two'}>
          <p className="username">Player 2</p>
          <p className="time">{t('timeremaining') + ' 3:21'}</p>
        </div>
      </div>
    </div>
  )
}
