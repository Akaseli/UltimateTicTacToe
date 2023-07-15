import React, { useState } from 'react'
import "./Board.css";
import { useTranslation } from 'react-i18next';

interface Props {

}

export const Board: React.FC<Props> = () => {

  const {t, i18n} = useTranslation();

  //false == p1 true == p2
  const[turn, setTurn] = useState(false);

  const[board, setBoard] = useState(
    [
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
    ]
  )

  const [squareToPlay, setSquare] = useState(4);

  const capture = (main: number, sub:number) => {
    if(board[main][sub] == 0 && main == squareToPlay){
      const boardClone = board.slice();

      if(!turn){
        boardClone[main][sub] = 1;
      }
      else{
        boardClone[main][sub] = 2;
      }

      setBoard(boardClone);
      setSquare(sub);
      setTurn(!turn);
    }
  }

  const determineSymbol = (a:number) => {
    if(a == 0){
      return "";
    }
    else if(a == 1){
      return "X";
    }
    else{
      return "O";
    }
  }

  const boardElement = board.map((subBoard, index) => {
    const classPrefix = (index == squareToPlay) ? "active" : "";

    return <div className={`subboard`}>
      <p className={classPrefix} onClick={() => capture(index, 0)}>{determineSymbol(board[index][0])}</p>
      <p className={classPrefix} onClick={() => capture(index, 1)}>{determineSymbol(board[index][1])}</p>
      <p className={classPrefix} onClick={() => capture(index, 2)}>{determineSymbol(board[index][2])}</p>
      <p className={classPrefix} onClick={() => capture(index, 3)}>{determineSymbol(board[index][3])}</p>
      <p className={classPrefix} onClick={() => capture(index, 4)}>{determineSymbol(board[index][4])}</p>
      <p className={classPrefix} onClick={() => capture(index, 5)}>{determineSymbol(board[index][5])}</p>
      <p className={classPrefix} onClick={() => capture(index, 6)}>{determineSymbol(board[index][6])}</p>
      <p className={classPrefix} onClick={() => capture(index, 7)}>{determineSymbol(board[index][7])}</p>
      <p className={classPrefix} onClick={() => capture(index, 8)}>{determineSymbol(board[index][8])}</p>
    </div>
  });

  return(
    <div>
      <div className='board'>
        {boardElement}
      </div>

      <div className='information'>
        <div className={turn ? "player one" : "player one turn"}>
          <p className='username'>Player 1</p>
          <p className='time'>{t('timeremaining') + " 1:23"}</p>
        </div>

        <div className={turn ? "player two turn" : "player two"}>
          <p className='username'>Player 2</p>
          <p className='time'>{t('timeremaining') + " 3:21"}</p>
        </div>
      </div>
    </div>
  );
}