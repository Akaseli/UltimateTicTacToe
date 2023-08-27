import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next'

interface Props {}

export const Footer: React.FC<Props> = () => {
  const { t, i18n } = useTranslation()

  return (
    <footer>
      <div className="about">
        <p>{t('credit')}</p>
        <a className="github" href="https://github.com/Akaseli" target="_blank" title={t('sourcecode')}>
          <img src={`/icons/github-mark-white.svg`} />
        </a>
      </div>
    </footer>
  )
}
