import React, { memo } from 'react'
import cls from './Loader.module.scss'

/** @module Loader */

/**
 * @interface LoaderProps
 * @description Описывает передаваемые параметры в компонент
 * */
interface LoaderProps {
  /** Размер Loader */
  size?: number
}

/**
 * @description Компонент для отображения загрузки приложения
 * @param {LoaderProps} props - Пропсы типа LoaderProps
 * */
export const Loader: React.FC<LoaderProps> = memo((props: LoaderProps) => {
  const {
    size = 100,
  } = props

  return (
    <div style={{ width: size, height: size }} className={cls.Loader} />
  )
})
