import { classNames, type Mods } from '@lib/helpers/classNames'
import { HStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import cls from './Tab.module.scss'

interface TabProps extends React.PropsWithChildren {
  className?: string
  tabKey: string
  onClick?: (key: string) => void
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  isHovered?: boolean
}

export const Tab: React.FC<TabProps> = memo((props: TabProps) => {
  const {
    className,
    iconRight,
    tabKey,
    onClick,
    iconLeft,
    children,
    isHovered = false,
  } = props

  const onClickHandler = React.useCallback(() => {
    onClick?.(tabKey)
  }, [tabKey, onClick])

  const mods: Mods = {
    [cls.hovered]: isHovered,
  }

  return (
    <HStack
      align={'center'}
      gap={12}
      className={classNames(cls.Tab, mods, [className])}
      onClick={onClickHandler}
    >
      {iconLeft && <div className={cls.ContentLeft}>{iconLeft}</div>}
      <Text className={cls.TabContent}>
        {children}
      </Text>
      {iconRight && <div className={cls.ContentRight}>{iconRight}</div>}
    </HStack>
  )
})
