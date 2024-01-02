import React from 'react'
import { useTranslation } from 'react-i18next'
import { BookViewList } from '../../model/types/CreateNotePatternBookSchema'

export const useSelectViewOptions = (): SelectItems<BookViewList> => {
  const { t } = useTranslation('create-note-pattern')

  return React.useMemo(() => ([
    {
      id: 1,
      code: BookViewList.FILE,
      content: t('input-pattern-book-field-view-option-file'),
    },
    {
      id: 2,
      code: BookViewList.LINK,
      content: t('input-pattern-book-field-view-option-link'),
    },
  ]), [t])
}
