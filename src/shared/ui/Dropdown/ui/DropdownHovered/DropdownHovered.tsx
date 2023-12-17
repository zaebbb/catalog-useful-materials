import { Menu, Transition } from '@headlessui/react'
import { AppLink } from '@ui-kit/AppLink/ui/AppLink'
import { Button } from '@ui-kit/Button'
import React, { memo } from 'react'
import { type DropdownProps } from '../../model/types/Dropdown'
import cls from '../../styles/DropdownCommon.module.scss'

/**
 * @description Dropdown реализующий функционал показа элементов при помощи наведения на trigger
 * @param {DropdownProps} props - Пропсы типа DropdownProps
 * */
export const DropdownHovered: React.FC<DropdownProps> =
  memo((props: DropdownProps) => {
    const {
      trigger,
      items,
    } = props

    const [show, setShow] = React.useState(false)

    const onHoverEnter = React.useCallback(() => {
      setShow(true)
    }, [])

    const onHoverLeave = React.useCallback(() => {
      setShow(false)
    }, [])

    return (
      <Menu as={'div'} className={cls.Menu}>
        <Menu.Button
          as={'div'}
          className={cls.triggerElement}
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
        >
          {trigger}
        </Menu.Button>
        <Transition
          as={React.Fragment}
          enter={cls.AnimationEnter}
          enterFrom={cls.AnimationEnterFrom}
          enterTo={cls.AnimationEnterTo}
          leave={cls.AnimationLeave}
          leaveFrom={cls.AnimationLeaveFrom}
          leaveTo={cls.AnimationLeaveTo}
          show={show}
        >
          <Menu.Items
            static
            className={cls.MenuWrapper}
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
          >
            {
              items.map(({
                content,
                link = '',
                type = 'link',
                buttonProps,
              }, index) => (
                <Menu.Item
                  key={index}
                  as={'div'}
                >
                  {type === 'link' && (
                    <AppLink to={link}>
                      {content}
                    </AppLink>
                  )}

                  {type === 'button' && (
                    <Button {...buttonProps}>
                      {content}
                    </Button>
                  )}
                </Menu.Item>
              ))
            }
          </Menu.Items>
        </Transition>
      </Menu>
    )
  })
