import React, { useEffect } from 'react'
import "./App.css"
import { Board } from './components/Board'
import { useTranslation } from 'react-i18next'

interface Props {

}


export const App: React.FC<Props> = () => {
  const {t, i18n} = useTranslation(); 

  useEffect(() => {
    //Change Title to be translated
    document.title = t('app');
  }, [t])
  
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
      <button className='online' disabled>{t('online')}</button>
      <button className='local'>{t('local')}</button>
      <Board />
    </div>
  );
}