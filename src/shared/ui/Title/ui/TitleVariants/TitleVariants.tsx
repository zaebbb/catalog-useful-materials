import React from 'react'
import { type TitleBaseProps } from '../../model/types/title'
import { TitleBase } from '../TitleBase/TitleBase'

/** @module TitleVariants */

/**
 * @description Компонент заголовка с увеличенным заголовком
 * @param {TitleBaseProps} props - Пропсы типа TitleBaseProps
 * */
export const TitleExtra: React.FC<TitleBaseProps> = (props: TitleBaseProps) => (
  <TitleBase {...props} variant={'extra'} />
)

/**
 * @description Компонент заголовка с большим заголовком
 * @param {TitleBaseProps} props - Пропсы типа TitleBaseProps
 * */
export const TitleLarge: React.FC<TitleBaseProps> = (props: TitleBaseProps) => (
  <TitleBase {...props} variant={'large'} />
)

/**
 * @description Компонент заголовка с средним заголовком
 * @param {TitleBaseProps} props - Пропсы типа TitleBaseProps
 * */
export const TitleMedium: React.FC<TitleBaseProps> = (props: TitleBaseProps) => (
  <TitleBase {...props} variant={'medium'} />
)

/**
 * @description Компонент заголовка с обычным заголовком
 * @param {TitleBaseProps} props - Пропсы типа TitleBaseProps
 * */
export const TitleRegular: React.FC<TitleBaseProps> = (props: TitleBaseProps) => (
  <TitleBase {...props} variant={'regular'} />
)

/**
 * @description Компонент заголовка с маленьким заголовком
 * @param {TitleBaseProps} props - Пропсы типа TitleBaseProps
 * */
export const TitleSmall: React.FC<TitleBaseProps> = (props: TitleBaseProps) => (
  <TitleBase {...props} variant={'small'} />
)

/**
 * @description Компонент заголовка с мини заголовком
 * @param {TitleBaseProps} props - Пропсы типа TitleBaseProps
 * */
export const TitleMini: React.FC<TitleBaseProps> = (props: TitleBaseProps) => (
  <TitleBase {...props} variant={'mini'} />
)
