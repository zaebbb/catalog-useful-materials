import { classNames } from '@lib/helpers/classNames'
import React, { memo } from 'react'
import { type MainLayoutProps } from '../model/types/MainLayout'
import cls from './MainLayout.module.scss'

/** @module MainLayout */

/**
 * @description Основной строительный каркас (Layout) приложения
 * @param {MainLayoutProps} props - Пропсы типа MainLayoutProps
 * */
export const MainLayout: React.FC<MainLayoutProps> = memo((props: MainLayoutProps) => {
  const {
    className,
    SearchBlock,
    FooterBlock,
    NavbarBlock,
    ContentBlock,
  } = props

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <header className={cls.NavbarBlock}>{NavbarBlock}</header>
      <div className={cls.SearchBlock}>{SearchBlock}</div>
      <main className={cls.ContentBlock}>{ContentBlock}</main>
      <footer className={cls.FooterBlock}>{FooterBlock}</footer>
    </div>
  )
})
