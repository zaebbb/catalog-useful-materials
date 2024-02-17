import { useCategory } from '@entities/Category'
import { useNotesTypes } from '@entities/NotesTypes'
import { useNotesViews } from '@entities/NotesViews'
import { useTags } from '@entities/Tag'
import { classNames } from '@lib/helpers/classNames'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { InputField } from '@ui-kit/InputField'
import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getDescriptionSelector } from '../../model/selectors/NoteSearchSelectors'
import { NoteSearchActions } from '../../model/slice/NoteSearchSlice'
import cls from './NoteSearch.module.scss'

interface NoteSearchProps {
  className?: string
}

export const NoteSearch: React.FC<NoteSearchProps> = memo((props: NoteSearchProps) => {
  const {
    className,
  } = props
  const { t } = useTranslation('note-search')
  const dispatch = useAppDispatch()

  const { SelectNotesViews } = useNotesViews()
  const { SelectCategory } = useCategory()
  const { SelectTags } = useTags()
  const { SelectNotesTypes } = useNotesTypes()

  const description = useSelector(getDescriptionSelector)

  const onChangeDescriptionHandler = React.useCallback((value: string) => {
    dispatch(NoteSearchActions.setDescription(value))
    dispatch(NoteSearchActions.setPage(0))
  }, [dispatch])

  const onChangeSelectHandler = React.useCallback(() => {
    dispatch(NoteSearchActions.setPage(0))
  }, [dispatch])

  return (
    <VStack gap={16} className={classNames(cls.NoteSearch, {}, [className])}>
      <div className={cls.GridWrapper}>
        <SelectNotesViews
          label={t('note-view-label')}
          placeholder={t('note-view-placeholder')}
          isMax
          className={cls.Field}
          isRequired={false}
          onChange={onChangeSelectHandler}
        />

        <SelectCategory
          className={cls.Field}
          placeholder={t('category-placeholder')}
          isRequired={false}
          onChange={onChangeSelectHandler}
          isMax
        />
      </div>

      <div className={cls.GridWrapper}>
        <InputField
          isMax
          label={t('text-label')}
          placeholder={t('text-placeholder')}
          value={description}
          onChange={onChangeDescriptionHandler}
        />

        <SelectNotesTypes
          isMax
          isRequired={false}
          onChange={onChangeSelectHandler}
        />
      </div>

      <SelectTags
        isMax
        placeholder={t('tags-placeholder')}
        isRequired={false}
        onChange={onChangeSelectHandler}
      />
    </VStack>
  )
})
