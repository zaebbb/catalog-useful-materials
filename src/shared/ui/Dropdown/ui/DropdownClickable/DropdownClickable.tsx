import { Menu, Transition } from '@headlessui/react'
import { AppLink } from '@ui-kit/AppLink/ui/AppLink'
import { Button } from '@ui-kit/Button'
import React, { memo } from 'react'
import { type DropdownProps } from '../../model/types/Dropdown'
import cls from '../../styles/DropdownCommon.module.scss'

/**
 * @description Dropdown реализующий функционал показа элементов при помощи нажатия на trigger
 * @param {DropdownProps} props - Пропсы типа DropdownProps
 * */
export const DropdownClickable: React.FC<DropdownProps> =
  memo((props: DropdownProps) => {
    const {
      trigger,
      items,
    } = props

    return (
      <Menu as={'div'} className={cls.Menu}>
        <Menu.Button as={'div'} className={cls.triggerElement}>
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
        >
          <Menu.Items className={cls.MenuWrapper}>
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
