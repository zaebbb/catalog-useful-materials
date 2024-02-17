import { classNames } from '@lib/helpers/classNames'
import { generateKey } from '@lib/helpers/generateKey'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { Button } from '@ui-kit/Button'
import { CheckboxField } from '@ui-kit/CheckboxField'
import { InputField } from '@ui-kit/InputField'
import { SelectAsyncField } from '@ui-kit/SelectField'
import { HStack, VStack } from '@ui-kit/Stack'
import { Span, Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getCreateNoteTypeValidationData,
  getCurrentFieldsValuesData, getIsLoadingSelector,
  getRemotePathSelector,
} from '../../model/selectors/CreateNoteTypePatternSelectors'
import {
  CreateNoteTypePatternActions,
} from '../../model/slice/CreateNoteTypePatternSlice'
import cls from './CreateNoteTypeFieldForm.module.scss'

interface CreateNoteTypeFieldFormProps {
  className?: string
}

export const CreateNoteTypeFieldForm: React.FC<CreateNoteTypeFieldFormProps> =
  memo((props: CreateNoteTypeFieldFormProps) => {
    const { className } = props
    const { t } = useTranslation('notes-types-page')
    const dispatch = useAppDispatch()

    const remotePath = useSelector(getRemotePathSelector)
    const values = useSelector(getCurrentFieldsValuesData)
    const validation = useSelector(getCreateNoteTypeValidationData)
    const isLoading = useSelector(getIsLoadingSelector)

    const onChangeFieldTitle = React.useCallback((value: string) => {
      dispatch(CreateNoteTypePatternActions.setFieldTitle(value))
    }, [dispatch])

    const onChangeFieldDraft = React.useCallback((value: boolean) => {
      dispatch(CreateNoteTypePatternActions.setFieldDraft(value))
    }, [dispatch])

    const onChangeFieldRequired = React.useCallback((value: boolean) => {
      dispatch(CreateNoteTypePatternActions.setFieldIsRequired(value))
    }, [dispatch])

    const onChangeFieldType = React.useCallback((selected: SelectItems<any>) => {
      if (selected.length) {
        dispatch(CreateNoteTypePatternActions.setFieldType(selected[0]))
      }
    }, [dispatch])

    const onClickAddField = React.useCallback(() => {
      if (
        values &&
        values.title &&
        values.customField
      ) {
        dispatch(CreateNoteTypePatternActions.setField({
          title: values.title ?? '',
          key: generateKey(),
          required: values.required ?? false,
          draft: values.draft ?? false,
          customField: values.customField,
        }))
        dispatch(CreateNoteTypePatternActions.clearFieldsValidation())
      }
    }, [dispatch, values])

    return (
      <VStack
        gap={16}
        className={classNames(cls.CreateNoteTypeFieldForm, {}, [className])}
      >
        <SelectAsyncField
          remotePath={remotePath}
          label={t('input-note-type-field-type-label')}
          placeholder={t('input-note-type-field-type-placeholder')}
          onChange={onChangeFieldType}
          selected={values.customField ? [values.customField] : []}
          isLoading={isLoading}
          isRequired
        />

        <InputField
          label={t('input-note-type-name-field-label')}
          placeholder={t('input-note-type-name-field-placeholder')}
          value={values?.title}
          onChange={onChangeFieldTitle}
          isLoading={isLoading}
          isRequired
        />

        <CheckboxField
          label={t('input-note-type-draft-field-label')}
          description={t('input-note-type-draft-field-description')}
          checked={values?.draft}
          onChange={onChangeFieldDraft}
          isLoading={isLoading}
        />

        <CheckboxField
          label={t('input-note-type-required-field-label')}
          description={t('input-note-type-required-field-description')}
          checked={values?.required}
          onChange={onChangeFieldRequired}
          isLoading={isLoading}
        />

        <HStack>
          <Button
            onClick={onClickAddField}
            isDisabled={Boolean(!values.title || !values.customField || isLoading)}
          >
            {t('input-note-type-button-add-field')}
          </Button>
        </HStack>

        {validation?.fields && (
          <Text type={'small'}>
            <Span
              content={validation?.fields}
              color={'danger'}
              variant={'80'}
            />
          </Text>
        )}
      </VStack>
    )
  })
