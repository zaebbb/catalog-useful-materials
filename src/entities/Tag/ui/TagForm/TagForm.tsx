import { classNames } from '@lib/helpers/classNames'
import { Button } from '@ui-kit/Button'
import { CheckboxField } from '@ui-kit/CheckboxField'
import { ElementEdit } from '@ui-kit/ElementEdit'
import { InputField } from '@ui-kit/InputField'
import { HStack, VStack } from '@ui-kit/Stack'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './TagForm.module.scss'

interface TagFormProps {
  className?: string
  title?: string
  onChangeName?: (value: string) => void
  valueName?: string
  validationName?: string
  onChangeDraft?: (value: boolean) => void
  valueDraft?: boolean
  validationDraft?: string
  valueCode?: string
  validationCode?: string
  onSubmit?: () => void
  isLoading?: boolean
  isTagCodeView?: boolean
  isDelete?: boolean
  onDelete?: (id: number | string) => void
  id?: number
}

export const TagForm: React.FC<TagFormProps> = memo((props: TagFormProps) => {
  const {
    className,
    title,
    onChangeName,
    valueName,
    validationName,
    onChangeDraft,
    valueDraft,
    validationDraft,
    onSubmit,
    validationCode,
    valueCode,
    isLoading,
    isTagCodeView = true,
    isDelete = false,
    onDelete,
    id,
  } = props
  const { t } = useTranslation('tags-page')

  const onDeleteHandler = React.useCallback((id: number | string) => {
    onDelete?.(id)
  }, [onDelete])

  return (
    <VStack gap={24} className={classNames(cls.TagForm, {}, [className])}>
      <HStack justify={'space-between'} isWrap gap={20}>
        <TitleLarge>
          {title}
        </TitleLarge>

        {isDelete && (
          <ElementEdit
            id={id}
            isDelete={isDelete}
            onDelete={onDeleteHandler}
            deleteContent={t('accept-delete-content')}
          />
        )}
      </HStack>

      <VStack gap={16}>
        <InputField
          label={t('input-tag-name-label')}
          placeholder={t('input-tag-name-placeholder')}
          value={valueName}
          onChange={onChangeName}
          validation={validationName}
          isLoading={isLoading}
          isRequired
        />

        <CheckboxField
          label={t('input-tag-draft-label')}
          checked={valueDraft}
          onChange={onChangeDraft}
          validation={validationDraft}
          isLoading={isLoading}
        />

        {isTagCodeView && (
          <InputField
            label={t('input-tag-code-label')}
            placeholder={t('input-tag-code-placeholder')}
            description={t('input-tag-code-description')}
            validation={validationCode}
            value={valueCode}
            isLoading={isLoading}
            isReadonly
          />
        )}

        <HStack justify={'flex-end'}>
          <Button
            onClick={onSubmit}
          >
            {t('input-tag-button')}
          </Button>
        </HStack>
      </VStack>
    </VStack>
  )
})
