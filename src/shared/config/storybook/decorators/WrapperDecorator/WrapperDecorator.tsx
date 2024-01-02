import { type StoryFn } from '@storybook/react'
import React from 'react'

/** @module WrapperDecorator */

/**
 * @description Декоратор Storybook для возможности Wrapper с встроенными props
 * @param {React.FC} Component - Передаваемый компонент
 * @param {React.ComponentProps<typeof Component>} props - Передаваемый компонент
 * */
export const WrapperDecorator = <T extends React.JSXElementConstructor<any>>(
  Component: React.JSX.ElementType,
  props: React.ComponentProps<T>
) => (Story: StoryFn) => {
    return (
      <Component {...props}>
        <Story />
      </Component>
    )
  }
