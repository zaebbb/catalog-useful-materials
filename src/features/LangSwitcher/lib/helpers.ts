import { type ButtonProps } from '@ui-kit/Button'
import i18n from 'i18next'

export enum LangOptions {
  RU = 'ru',
  EN = 'en'
}

export const changeLang = (lang: LangOptions): void => {
  i18n
    .changeLanguage(lang)
    .catch(e => { console.log(e.message) })
}

export const ButtonOptions = (lang: LangOptions): ButtonProps => ({
  fill: 'clear',
  onClick: () => {
    changeLang(lang)
  },
})
