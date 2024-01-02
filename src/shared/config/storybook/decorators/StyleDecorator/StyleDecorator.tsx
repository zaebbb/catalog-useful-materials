import { type StoryFn } from '@storybook/react'
import React from 'react'

/** @module StyleDecorator */

/**
 * @description Декоратор Storybook для возможности использования Wrapper с встроенными стилями
 * @param {React.CSSProperties} css - Story Компонент
 * */
export const StyleDecorator = (css: React.CSSProperties) => (Story: StoryFn) => (
  <div style={css}>
    <Story />
  </div>
)
