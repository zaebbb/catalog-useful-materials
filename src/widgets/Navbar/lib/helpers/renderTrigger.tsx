import { Button, type ButtonProps } from '@ui-kit/Button'
import { IconLib } from '@ui-kit/Icon'
import React from 'react'

export const renderTrigger = (label: string): React.ReactElement<ButtonProps> => {
  return (
    <Button
      fill={'clear'}
      addonRight={<IconLib Icon={'IconArrowDownNoLine'} />}
      addonGap={4}
    >
      {label}
    </Button>
  )
}
