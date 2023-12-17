import { type StoryFn } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

/** @module RouterDecorator */

/**
 * @description Декоратор Storybook для реализации роутинга в Storybook
 * @param {StoryFn} Story - Story Компонент
 * */
export const RouterDecorator = (Story: StoryFn): JSX.Element => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)
