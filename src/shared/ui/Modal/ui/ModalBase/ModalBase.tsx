import { classNames, type Mods } from '@lib/helpers/classNames'
import { Overlay } from '@ui-kit/Modal/ui/Overlay/Overlay'
import { Portal } from '@ui-kit/Portal'
import React, { memo } from 'react'
import cls from './ModalBase.module.scss'

export interface ModalBaseProps extends React.PropsWithChildren {
  classNameWrapper?: string
  classNameContent?: string
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const ModalBase: React.FC<ModalBaseProps> = memo((props: ModalBaseProps) => {
  const {
    classNameWrapper,
    classNameContent,
    isOpen = false,
    onClose,
    children,
  } = props

  const mods: Mods = {
    [cls.OpenModal]: isOpen,
  }

  const onCloseHandler = React.useCallback(() => {
    onClose?.()
  }, [onClose])

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  })

  return (
    <Portal>
      <div className={classNames(cls.ModalBase, mods, [classNameWrapper])}>
        <Overlay onClick={onCloseHandler} />
        <div className={classNames(cls.ModalContent, {}, [classNameContent])}>
          {children}
        </div>
      </div>
    </Portal>
  )
})
