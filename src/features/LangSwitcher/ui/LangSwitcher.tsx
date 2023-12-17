import { Dropdown, type DropdownItem } from '@ui-kit/Dropdown'
import { IconLib } from '@ui-kit/Icon'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonOptions, LangOptions } from '../lib/helpers'

export const LangSwitcher: React.FC = memo(() => {
  const { t } = useTranslation()

  const LangList: DropdownItem[] = React.useMemo(() => ([
    {
      type: 'button',
      content: t('lang-ru'),
      buttonProps: ButtonOptions(LangOptions.RU),
    },
    {
      type: 'button',
      content: t('lang-en'),
      buttonProps: ButtonOptions(LangOptions.EN),
    },
  ]), [t])

  return (
    <Dropdown
      mode={'hovered'}
      trigger={
        <IconLib
          Icon={'IconLang'}
        />
      }
      items={LangList}
    />
  )
})
