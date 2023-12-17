import { type StoryContext, type StoryFn } from '@storybook/react'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18next/init'

/** @module I18nextDecorator */

/**
 * @description Декоратор Storybook для подключения провайдера i18next для смены языка
 * @param {StoryFn} Story - Story Компонент
 * @param {StoryContext} context - Контекст получаемый от Storybook
 * */
export const I18nextDecorator = (Story: StoryFn, context: StoryContext): JSX.Element => {
  const { locale } = context.globals

  React.useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])

  return (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  )
}
