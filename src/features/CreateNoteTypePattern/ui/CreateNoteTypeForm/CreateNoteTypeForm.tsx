import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { classNames } from '@lib/helpers/classNames'
import { ruToEngTransliterate } from '@lib/helpers/transliterate'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { Button } from '@ui-kit/Button'
import { CheckboxField } from '@ui-kit/CheckboxField'
import { InputField } from '@ui-kit/InputField'
import { HStack, VStack } from '@ui-kit/Stack'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getCreateNoteTypeValidationData, getIsLoadingSelector,
  getNoteTypeDraftSelector,
  getNoteTypeNameSelector,
} from '../../model/selectors/CreateNoteTypePatternSelectors'
import {
  CreateNoteTypeService,
} from '../../model/services/CreateNoteTypeService'
import {
  CreateNoteTypePatternActions,
  CreateNoteTypePatternReducer,
} from '../../model/slice/CreateNoteTypePatternSlice'
import {
  CreateNoteTypeFieldForm,
} from '../CreateNoteTypeFieldForm/CreateNoteTypeFieldForm'
import {
  RenderCustomFields,
} from '../RenderCustomFields/RenderCustomFields'
import cls from './CreateNoteTypeForm.module.scss'

interface CreateNoteTypeFormProps {
  className?: string
}

const reducers: ReducerList = {
  createNoteTypePattern: CreateNoteTypePatternReducer,
}

export const CreateNoteTypeForm: React.FC<CreateNoteTypeFormProps> =
  memo((props: CreateNoteTypeFormProps) => {
    const { className } = props
    const { t } = useTranslation('notes-types-page')
    const dispatch = useAppDispatch()

    const nameValue = useSelector(getNoteTypeNameSelector)
    const draftValue = useSelector(getNoteTypeDraftSelector)
    const validation = useSelector(getCreateNoteTypeValidationData)
    const isLoading = useSelector(getIsLoadingSelector)

    const onChangeNameHandler = React.useCallback((value: string) => {
      dispatch(CreateNoteTypePatternActions.setName(value))
      dispatch(CreateNoteTypePatternActions.setCode(ruToEngTransliterate(value)))
    }, [dispatch])

    const onChangeDraftHandler = React.useCallback((value: boolean) => {
      dispatch(CreateNoteTypePatternActions.setDraft(value))
    }, [dispatch])

    const onSubmitHandler = React.useCallback(() => {
      dispatch(CreateNoteTypeService())
    }, [dispatch])

    return (
      <DynamicReducerLoader reducers={reducers}>
        <VStack gap={24} className={classNames(cls.CategoryForm, {}, [className])}>
          <HStack justify={'space-between'} isWrap gap={20}>
            <TitleLarge>
              {t('create-note-type-title')}
            </TitleLarge>
          </HStack>

          <VStack gap={16}>
            <InputField
              label={t('input-note-type-name-label')}
              placeholder={t('input-note-type-name-placeholder')}
              isRequired
              isLoading={isLoading}
              value={nameValue}
              onChange={onChangeNameHandler}
              validation={validation?.name}
            />

            <CheckboxField
              label={t('input-note-type-draft-label')}
              description={t('input-note-type-draft-description')}
              checked={draftValue}
              onChange={onChangeDraftHandler}
              validation={validation?.draft}
              isLoading={isLoading}
            />

            <RenderCustomFields />

            <CreateNoteTypeFieldForm />

            <HStack justify={'flex-end'}>
              <Button
                onClick={onSubmitHandler}
                size={'large'}
                isDisabled={isLoading}
              >
                {t('input-note-type-button')}
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </DynamicReducerLoader>
    )
  })
