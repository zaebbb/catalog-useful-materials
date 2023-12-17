import { Flex, type FlexProps } from '@ui-kit/Stack/ui/Flex/Flex'
import React from 'react'

/** @module VStack */

/**
 * @type VStackProps
 * @description Описывает передаваемые параметры в компонент
 * */
type VStackProps = Omit<FlexProps, 'direction'>

/**
 * @description Компонент flex контейнера с flex-direction свойствой column
 * @param {VStackProps} props - Пропсы типа VStackProps
 * */
export const VStack: React.FC<VStackProps> = (props: VStackProps) => (
  <Flex {...props} direction={'column'} />
)
