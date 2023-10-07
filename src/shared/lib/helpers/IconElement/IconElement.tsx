import { type IconBaseProps } from '@react-icons/all-files'
import React, { type LazyExoticComponent } from 'react'

type IconLibName = 'IconFaBeer'

type IconLibOptions = Record<
IconLibName,
LazyExoticComponent<(props: IconBaseProps) => React.JSX.Element>
>

export const IconLib: IconLibOptions = {
  IconFaBeer: React.lazy(async () => await import('./lib/icons/IconFaBeer')),
}

interface IconElementProps extends IconBaseProps {
  icon: IconLibName
}

export const IconElement = (props: IconElementProps) => {
  const {
    icon,
    ...otherProps
  } = props

  const IconComponent = IconLib[icon]

  return <IconComponent {...otherProps} />
}
