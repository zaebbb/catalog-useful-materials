import { classNames } from '@lib/helpers/classNames'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteAdminNotesTypes } from '@lib/router'
import { Card } from '@ui-kit/Card'
import { HStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import {
  getCustomFieldsValuesSelector, getIsCreatedSelector, getIsLoadingSelector,
} from '../../model/selectors/CreateNoteTypePatternSelectors'
import {
  CreateNoteTypePatternActions,
} from '../../model/slice/CreateNoteTypePatternSlice'
import cls from './RenderCustomFields.module.scss'

interface RenderCustomFieldsProps {
  className?: string
}

export const RenderCustomFields: React.FC<RenderCustomFieldsProps> =
  memo((props: RenderCustomFieldsProps) => {
    const { className } = props
    const { t } = useTranslation('notes-types-page')
    const dispatch = useAppDispatch()

    const fields = useSelector(getCustomFieldsValuesSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const isCreated = useSelector(getIsCreatedSelector)
    const location = useLocation()

    const onDeleteHandler = React.useCallback((key: number | string) => {
      dispatch(CreateNoteTypePatternActions.deleteField(String(key)))
    }, [dispatch])

    if (isCreated) {
      return (
        <Navigate
          to={getRouteAdminNotesTypes()}
          state={{ from: location }}
          replace
        />
      )
    }

    return (
      <HStack
        isWrap
        className={classNames(cls.RenderCustomFields, {}, [className])}
        isMax
      >
        {fields.map((field) => (
          <Card
            key={field.key}
            title={field.customField.content}
            description={field.title}
            id={field.key}
            onDelete={onDeleteHandler}
            className={cls.Card}
            deleteContent={t('accept-delete-content')}
            isAccess={!isLoading}
            isDelete
          >
            {field.draft && (
              <Text>
                {t('card-draft')}
              </Text>
            )}

            {field.required && (
              <Text>
                {t('card-required')}
              </Text>
            )}
          </Card>
        ))}
      </HStack>
    )
  })
