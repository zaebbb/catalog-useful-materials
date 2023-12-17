import type React from 'react'

/**
 * @interface MainLayoutProps
 * @description Основные компоненты для каркаса приложения
 * */
export interface MainLayoutProps {
  /** Дополнительный className, необязательный */
  className?: string
  /** Компонент с блоком поиска, необязательный */
  SearchBlock?: React.ReactNode
  /** Компонент с футером, необязательный */
  FooterBlock?: React.ReactNode
  /** Компонент с блоком шапки приложения, необязательный */
  NavbarBlock: React.ReactNode
  /** Компонент с основным содержимым приложения */
  ContentBlock: React.ReactNode
}
