import React from 'react'
import { useTranslation } from 'react-i18next'
import { IssueViewList } from '../../model/types/NotePatternIssueSchema'

export const useSelectViewOptions = (): SelectItems<IssueViewList> => {
  const { t } = useTranslation('create-note-pattern')

  return React.useMemo(() => ([
    {
      id: 1,
      code: IssueViewList.IMAGE,
      content: t('input-pattern-issue-field-view-option-link'),
    },
    {
      id: 2,
      code: IssueViewList.LINK,
      content: t('input-pattern-issue-field-view-option-image'),
    },
  ]), [t])
}
