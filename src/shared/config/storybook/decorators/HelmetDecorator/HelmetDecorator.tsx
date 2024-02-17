import { type StoryFn } from '@storybook/react'
import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

/** @module HelmetDecorator */

/**
 * @description Декоратор Storybook для возможности использования Helmet
 * @param {StoryFn} Story - Story Компонент
 * */
export const HelmetDecorator = (Story: StoryFn) => (
  <HelmetProvider>
    <Story />
  </HelmetProvider>
)
