import { format } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'
import { ru } from 'date-fns/locale/ru'
import { useTranslation } from 'react-i18next'

export type DateFormat = 'dd.MM.yyyy'

export const useFormatDate = (
  date: string | undefined,
  formatDate: DateFormat | undefined = 'dd.MM.yyyy'
): string => {
  const { i18n } = useTranslation()

  let lang = ru

  switch (i18n.language) {
    case 'ru':
      lang = ru
      break
    case 'en':
      lang = enUS
      break
  }

  if (!date) {
    return ''
  }

  return format(date, formatDate, { locale: lang })
}
