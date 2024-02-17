import { useCategory } from '@entities/Category'
import { type NotesTypesCodeList } from '@entities/NotesTypes'
import { useNotesViews } from '@entities/NotesViews'
import { useTags } from '@entities/Tag'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { CheckboxField } from '@ui-kit/CheckboxField'
import { InputField } from '@ui-kit/InputField'
import { Span } from '@ui-kit/Text'
import { TextareaField } from '@ui-kit/TextareaField'
import { TitleMedium } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getDescriptionSelector,
  getDraftSelector, getIsLoadingSelector,
  getTitleSelector, getValidationSelector,
} from '../../model/selectors/NoteBaseFieldsSelectors'
import {
  NoteBaseFieldsActions,
} from '../../model/slice/NoteBaseFieldsSlice'

interface NoteBaseFieldsProps {
  selectType?: SelectFieldOption<NotesTypesCodeList>
  isPattern?: boolean
}

export const NoteBaseFields: React.FC<NoteBaseFieldsProps> = memo((props: NoteBaseFieldsProps) => {
  const {
    selectType,
    isPattern = false,
  } = props
  const { t } = useTranslation('create-note-pattern')
  const dispatch = useAppDispatch()

  const titleValue = useSelector(getTitleSelector)
  const draftValue = useSelector(getDraftSelector)
  const descriptionValue = useSelector(getDescriptionSelector)
  const validation = useSelector(getValidationSelector)
  const isLoading = useSelector(getIsLoadingSelector)

  const { SelectNotesViews } = useNotesViews()
  const { SelectCategory } = useCategory()
  const { SelectTags } = useTags()

  const onChangeTitleHandler = React.useCallback((value: string) => {
    dispatch(NoteBaseFieldsActions.setTitle(value))
  }, [dispatch])

  const onChangeDescriptionHandler = React.useCallback((value: string) => {
    dispatch(NoteBaseFieldsActions.setDescription(value))
  }, [dispatch])

  const onChangeDraftHandler = React.useCallback((value: boolean) => {
    dispatch(NoteBaseFieldsActions.setDraft(value))
  }, [dispatch])

  return (
    <>
      {selectType && (
        <TitleMedium>
          {t('title')}
          {' '}
          <Span
            color={'gradient'}
            content={isPattern ? t(selectType.code) : selectType.content}
          />
        </TitleMedium>
      )}

      <InputField
        label={t('input-title-label')}
        placeholder={t('input-title-placeholder')}
        value={titleValue}
        isMax
        onChange={onChangeTitleHandler}
        isLoading={isLoading}
        validation={validation?.title}
        isRequired
      />

      <TextareaField
        label={t('input-description-label')}
        value={descriptionValue}
        onChange={onChangeDescriptionHandler}
        isLoading={isLoading}
        validation={validation?.description}
        isRequired
      />

      <CheckboxField
        label={t('input-draft-label')}
        description={t('input-draft-description')}
        checked={draftValue}
        onChange={onChangeDraftHandler}
        isLoading={isLoading}
        validation={validation?.draft}
      />

      <SelectNotesViews
        isLoading={isLoading}
        validation={validation?.viewId}
      />

      <SelectCategory
        isLoading={isLoading}
        validation={validation?.categoryId}
      />

      <SelectTags
        isLoading={isLoading}
        validation={validation?.tagsIds}
      />
    </>
  )
})
