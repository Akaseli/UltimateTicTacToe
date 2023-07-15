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

  const capture = (main: number, sub:number) => {
    if(board[main][sub] == 0){
      const boardClone = board.slice();

      if(!turn){
        boardClone[main][sub] = 1;
      }
      else{
        boardClone[main][sub] = 2;
      }

      setBoard(boardClone);
      setTurn(!turn);
    }
  }

  const determineSymbol = (a:number) => {
    if(a == 0){
      return <p></p>;
    }
    else if(a == 1){
      return <p>X</p>;
    }
    else{
      return <p>O</p>;
    }
  }

  return(
    <div>
      <div className='board'>
        <table>
          <tr className='r1'>
            <td className='c1' onClick={() => capture(0, 0)}>{determineSymbol(board[0][0])}</td>
            <td className='c2' onClick={() => capture(0, 1)}>{determineSymbol(board[0][1])}</td>
            <td className='c3' onClick={() => capture(0, 2)}>{determineSymbol(board[0][2])}</td>
            <td className='c4' onClick={() => capture(0, 3)}>{determineSymbol(board[0][3])}</td>
            <td className='c5' onClick={() => capture(0, 4)}>{determineSymbol(board[0][4])}</td>
            <td className='c6' onClick={() => capture(0, 5)}>{determineSymbol(board[0][5])}</td>
            <td className='c7' onClick={() => capture(0, 6)}>{determineSymbol(board[0][6])}</td>
            <td className='c8' onClick={() => capture(0, 7)}>{determineSymbol(board[0][7])}</td>
            <td className='c9' onClick={() => capture(0, 8)}>{determineSymbol(board[0][8])}</td>
          </tr>

          <tr className='r2'>
            <td className='c1' onClick={() => capture(1, 0)}>{determineSymbol(board[1][0])}</td>
            <td className='c2' onClick={() => capture(1, 1)}>{determineSymbol(board[1][1])}</td>
            <td className='c3' onClick={() => capture(1, 2)}>{determineSymbol(board[1][2])}</td>
            <td className='c4' onClick={() => capture(1, 3)}>{determineSymbol(board[1][3])}</td>
            <td className='c5' onClick={() => capture(1, 4)}>{determineSymbol(board[1][4])}</td>
            <td className='c6' onClick={() => capture(1, 5)}>{determineSymbol(board[1][5])}</td>
            <td className='c7' onClick={() => capture(1, 6)}>{determineSymbol(board[1][6])}</td>
            <td className='c8' onClick={() => capture(1, 7)}>{determineSymbol(board[1][7])}</td>
            <td className='c9' onClick={() => capture(1, 8)}>{determineSymbol(board[1][8])}</td>
          </tr>

          <tr className='r3'>
            <td className='c1' onClick={() => capture(2, 0)}>{determineSymbol(board[2][0])}</td>
            <td className='c2' onClick={() => capture(2, 1)}>{determineSymbol(board[2][1])}</td>
            <td className='c3' onClick={() => capture(2, 2)}>{determineSymbol(board[2][2])}</td>
            <td className='c4' onClick={() => capture(2, 3)}>{determineSymbol(board[2][3])}</td>
            <td className='c5' onClick={() => capture(2, 4)}>{determineSymbol(board[2][4])}</td>
            <td className='c6' onClick={() => capture(2, 5)}>{determineSymbol(board[2][5])}</td>
            <td className='c7' onClick={() => capture(2, 6)}>{determineSymbol(board[2][6])}</td>
            <td className='c8' onClick={() => capture(2, 7)}>{determineSymbol(board[2][7])}</td>
            <td className='c9' onClick={() => capture(2, 8)}>{determineSymbol(board[2][8])}</td>
          </tr>

          <tr className='r4'>
            <td className='c1' onClick={() => capture(3, 0)}>{determineSymbol(board[3][0])}</td>
            <td className='c2' onClick={() => capture(3, 1)}>{determineSymbol(board[3][1])}</td>
            <td className='c3' onClick={() => capture(3, 2)}>{determineSymbol(board[3][2])}</td>
            <td className='c4' onClick={() => capture(3, 3)}>{determineSymbol(board[3][3])}</td>
            <td className='c5' onClick={() => capture(3, 4)}>{determineSymbol(board[3][4])}</td>
            <td className='c6' onClick={() => capture(3, 5)}>{determineSymbol(board[3][5])}</td>
            <td className='c7' onClick={() => capture(3, 6)}>{determineSymbol(board[3][6])}</td>
            <td className='c8' onClick={() => capture(3, 7)}>{determineSymbol(board[3][7])}</td>
            <td className='c9' onClick={() => capture(3, 8)}>{determineSymbol(board[3][8])}</td>
          </tr>

          <tr className='r5'>
            <td className='c1' onClick={() => capture(4, 0)}>{determineSymbol(board[4][0])}</td>
            <td className='c2' onClick={() => capture(4, 1)}>{determineSymbol(board[4][1])}</td>
            <td className='c3' onClick={() => capture(4, 2)}>{determineSymbol(board[4][2])}</td>
            <td className='c4' onClick={() => capture(4, 3)}>{determineSymbol(board[4][3])}</td>
            <td className='c5' onClick={() => capture(4, 4)}>{determineSymbol(board[4][4])}</td>
            <td className='c6' onClick={() => capture(4, 5)}>{determineSymbol(board[4][5])}</td>
            <td className='c7' onClick={() => capture(4, 6)}>{determineSymbol(board[4][6])}</td>
            <td className='c8' onClick={() => capture(4, 7)}>{determineSymbol(board[4][7])}</td>
            <td className='c9' onClick={() => capture(4, 8)}>{determineSymbol(board[4][8])}</td>
          </tr >

          <tr className='r6'>
            <td className='c1' onClick={() => capture(5, 0)}>{determineSymbol(board[5][0])}</td>
            <td className='c2' onClick={() => capture(5, 1)}>{determineSymbol(board[5][1])}</td>
            <td className='c3' onClick={() => capture(5, 2)}>{determineSymbol(board[5][2])}</td>
            <td className='c4' onClick={() => capture(5, 3)}>{determineSymbol(board[5][3])}</td>
            <td className='c5' onClick={() => capture(5, 4)}>{determineSymbol(board[5][4])}</td>
            <td className='c6' onClick={() => capture(5, 5)}>{determineSymbol(board[5][5])}</td>
            <td className='c7' onClick={() => capture(5, 6)}>{determineSymbol(board[5][6])}</td>
            <td className='c8' onClick={() => capture(5, 7)}>{determineSymbol(board[5][7])}</td>
            <td className='c9' onClick={() => capture(5, 8)}>{determineSymbol(board[5][8])}</td>
          </tr>

          <tr className='r7'>
            <td className='c1' onClick={() => capture(6, 0)}>{determineSymbol(board[6][0])}</td>
            <td className='c2' onClick={() => capture(6, 1)}>{determineSymbol(board[6][1])}</td>
            <td className='c3' onClick={() => capture(6, 2)}>{determineSymbol(board[6][2])}</td>
            <td className='c4' onClick={() => capture(6, 3)}>{determineSymbol(board[6][3])}</td>
            <td className='c5' onClick={() => capture(6, 4)}>{determineSymbol(board[6][4])}</td>
            <td className='c6' onClick={() => capture(6, 5)}>{determineSymbol(board[6][5])}</td>
            <td className='c7' onClick={() => capture(6, 6)}>{determineSymbol(board[6][6])}</td>
            <td className='c8' onClick={() => capture(6, 7)}>{determineSymbol(board[6][7])}</td>
            <td className='c9' onClick={() => capture(6, 8)}>{determineSymbol(board[6][8])}</td>
          </tr>

          <tr className='r8'>
            <td className='c1' onClick={() => capture(7, 0)}>{determineSymbol(board[7][0])}</td>
            <td className='c2' onClick={() => capture(7, 1)}>{determineSymbol(board[7][1])}</td>
            <td className='c3' onClick={() => capture(7, 2)}>{determineSymbol(board[7][2])}</td>
            <td className='c4' onClick={() => capture(7, 3)}>{determineSymbol(board[7][3])}</td>
            <td className='c5' onClick={() => capture(7, 4)}>{determineSymbol(board[7][4])}</td>
            <td className='c6' onClick={() => capture(7, 5)}>{determineSymbol(board[7][5])}</td>
            <td className='c7' onClick={() => capture(7, 6)}>{determineSymbol(board[7][6])}</td>
            <td className='c8' onClick={() => capture(7, 7)}>{determineSymbol(board[7][7])}</td>
            <td className='c9' onClick={() => capture(7, 8)}>{determineSymbol(board[7][8])}</td>
          </tr>

          <tr className='r9'> 
            <td className='c1' onClick={() => capture(8, 0)}>{determineSymbol(board[8][0])}</td>
            <td className='c2' onClick={() => capture(8, 1)}>{determineSymbol(board[8][1])}</td>
            <td className='c3' onClick={() => capture(8, 2)}>{determineSymbol(board[8][2])}</td>
            <td className='c4' onClick={() => capture(8, 3)}>{determineSymbol(board[8][3])}</td>
            <td className='c5' onClick={() => capture(8, 4)}>{determineSymbol(board[8][4])}</td>
            <td className='c6' onClick={() => capture(8, 5)}>{determineSymbol(board[8][5])}</td>
            <td className='c7' onClick={() => capture(8, 6)}>{determineSymbol(board[8][6])}</td>
            <td className='c8' onClick={() => capture(8, 7)}>{determineSymbol(board[8][7])}</td>
            <td className='c9' onClick={() => capture(8, 8)}>{determineSymbol(board[8][8])}</td>
          </tr>
          
        </table>
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