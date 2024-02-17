import { classNames } from '@lib/helpers/classNames'
import { Button } from '@ui-kit/Button'
import { CheckboxField } from '@ui-kit/CheckboxField'
import { ElementEdit } from '@ui-kit/ElementEdit'
import { InputField } from '@ui-kit/InputField'
import { HStack, VStack } from '@ui-kit/Stack'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './CategoryForm.module.scss'

interface CategoryFormProps {
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
  isCategoryCodeView?: boolean
  isDelete?: boolean
  onDelete?: (id: number | string) => void
  id?: number
}

export const CategoryForm: React.FC<CategoryFormProps> = memo((props: CategoryFormProps) => {
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
    isCategoryCodeView = true,
    isDelete = false,
    onDelete,
    id,
  } = props
  const { t } = useTranslation('categories-page')

  const onDeleteHandler = React.useCallback((id: number | string) => {
    onDelete?.(id)
  }, [onDelete])

  return (
    <VStack gap={24} className={classNames(cls.CategoryForm, {}, [className])}>
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
          label={t('input-category-name-label')}
          placeholder={t('input-category-name-placeholder')}
          value={valueName}
          onChange={onChangeName}
          validation={validationName}
          isLoading={isLoading}
          isRequired
        />

        <CheckboxField
          label={t('input-category-draft-label')}
          checked={valueDraft}
          onChange={onChangeDraft}
          validation={validationDraft}
          isLoading={isLoading}
        />

        {isCategoryCodeView && (
          <InputField
            label={t('input-category-code-label')}
            placeholder={t('input-category-code-placeholder')}
            description={t('input-category-code-description')}
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
            {t('input-category-button')}
          </Button>
        </HStack>
      </VStack>
    </VStack>
  )
})
