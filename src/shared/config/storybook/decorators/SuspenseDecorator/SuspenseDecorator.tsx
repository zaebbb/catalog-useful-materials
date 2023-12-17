import { type StoryFn } from '@storybook/react'
import { PageLoader } from '@widgets/PageLoader'
import React, { Suspense } from 'react'

/** @module SuspenseDecorator */

/**
 * @description Декоратор Storybook для возможности использования Lazy-компонентов
 * @param {StoryFn} Story - Story Компонент
 * */
export const SuspenseDecorator = (Story: StoryFn) => (
  <Suspense fallback={<PageLoader />}>
    <Story />
  </Suspense>
)
