import React, { useState } from 'react'
import "./Board.css";
import { useTranslation } from 'react-i18next';

interface Props {

}

export const Board: React.FC<Props> = () => {

  const {t, i18n} = useTranslation();

  //false == p1 true == p2
  const[turn, setTurn] = useState(false);

  return(
    <div>
      <div className='board'>
        <table>
          <tr className='r1'>
            <td className='c1'></td>
            <td className='c2'></td>
            <td className='c3'></td>

            <td className='c4'></td>
            <td className='c5'></td>
            <td className='c6'></td>

            <td className='c7'></td>
            <td className='c8'></td>
            <td className='c9'></td>
          </tr>

          <tr className='r2'>
            <td className='c1'></td>
            <td className='c2'></td>
            <td className='c3'></td>

            <td className='c4'></td>
            <td className='c5'></td>
            <td className='c6'></td>

            <td className='c7'></td>
            <td className='c8'></td>
            <td className='c9'></td>
          </tr>

          <tr className='r3'>
            <td className='c1'></td>
            <td className='c2'></td>
            <td className='c3'></td>

            <td className='c4'></td>
            <td className='c5'></td>
            <td className='c6'></td>

            <td className='c7'></td>
            <td className='c8'></td>
            <td className='c9'></td>
          </tr>

          <tr className='r4'>
            <td className='c1'></td>
            <td className='c2'></td>
            <td className='c3'></td>

            <td className='c4'></td>
            <td className='c5'></td>
            <td className='c6'></td>

            <td className='c7'></td>
            <td className='c8'></td>
            <td className='c9'></td>
          </tr>

          <tr className='r5'>
            <td className='c1'></td>
            <td className='c2'></td>
            <td className='c3'></td>

            <td className='c4'></td>
            <td className='c5'></td>
            <td className='c6'></td>

            <td className='c7'></td>
            <td className='c8'></td>
            <td className='c9'></td>
          </tr >

          <tr className='r6'>
            <td className='c1'></td>
            <td className='c2'></td>
            <td className='c3'></td>

            <td className='c4'></td>
            <td className='c5'></td>
            <td className='c6'></td>

            <td className='c7'></td>
            <td className='c8'></td>
            <td className='c9'></td>
          </tr>

          <tr className='r7'>
            <td className='c1'></td>
            <td className='c2'></td>
            <td className='c3'></td>

            <td className='c4'></td>
            <td className='c5'></td>
            <td className='c6'></td>

            <td className='c7'></td>
            <td className='c8'></td>
            <td className='c9'></td>
          </tr>

          <tr className='r8'>
            <td className='c1'></td>
            <td className='c2'></td>
            <td className='c3'></td>

            <td className='c4'></td>
            <td className='c5'></td>
            <td className='c6'></td>

            <td className='c7'></td>
            <td className='c8'></td>
            <td className='c9'></td>
          </tr>

          <tr className='r9'> 
            <td className='c1'></td>
            <td className='c2'></td>
            <td className='c3'></td>

            <td className='c4'></td>
            <td className='c5'></td>
            <td className='c6'></td>

            <td className='c7'></td>
            <td className='c8'></td>
            <td className='c9'></td>
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