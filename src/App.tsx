import React from 'react'
import "./App.css"
import { Board } from './components/Board'
import { useTranslation } from 'react-i18next'
import en from '/flags/en.svg'

interface Props {

}


export const App: React.FC<Props> = () => {
  const {t, i18n} = useTranslation(); 
  
  return(
    <div>
      <div className='appbar'>
        <div className='langMenu'>
          <img className='langFlag' src={`/flags/${i18n.language}.svg`} />
          <select className='langSelector' defaultValue={i18n.language} onChange={(e) => {
            i18n.changeLanguage(e.target.value);
          }}>
            <option value={"fi"}>
              suomi
            </option>
            <option value={"en"}>
              English
            </option>
          </select>
        </div>
      </div>
      <h1>
        {t('app')}
      </h1>

      <Board />
    </div>
  );
}