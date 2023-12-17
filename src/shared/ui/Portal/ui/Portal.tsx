import type React from 'react'
import { memo } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps extends React.PropsWithChildren {
  node?: HTMLElement
}

export const Portal: React.FC<PortalProps> = memo((props: PortalProps) => {
  const {
    children,
    node = document.body,
  } = props

  return createPortal(
    children,
    node
  )
})
