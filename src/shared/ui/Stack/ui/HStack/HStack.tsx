import { Flex, type FlexProps } from '@ui-kit/Stack/ui/Flex/Flex'
import React from 'react'

/** @module HStack */

/**
 * @type HStackProps
 * @description Описывает передаваемые параметры в компонент
 * */
type HStackProps = Omit<FlexProps, 'direction'>

/**
 * @description Компонент flex контейнера с flex-direction свойствой row
 * @param {HStackProps} props - Пропсы типа HStackProps
 * */
export const HStack: React.FC<HStackProps> = (props: HStackProps) => (
  <Flex {...props} direction={'row'} />
)
