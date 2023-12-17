import type React from 'react'

/**
 * @interface StickyLayoutProps
 * @description Список компонентов для Sticky подхода к разделу приложения
 * */
export interface StickyLayoutProps {
  /** Дополнительный className, необязательный */
  className?: string
  /** Левый Sidebar с контентом, необязательный */
  ContentLeft?: React.ReactNode
  /** Правый Sidebar с контентом, необязательный */
  ContentRight?: React.ReactNode
  /** Основной контент раздела */
  Content: React.ReactNode
}
