import { TagForm } from '@entities/Tag'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { ruToEngTransliterate } from '@lib/helpers/transliterate'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteTags } from '@lib/router'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getCreateTagIsCreatedSelector,
  getCreateTagIsLoadingSelector,
  getCreateTagValidationSelector,
  getCreateTagValuesSelector,
} from '../../model/selectors/CreateTagSelectors'
import { CreateTagService } from '../../model/services/CreateTagService'
import { CreateTagActions, CreateTagReducer } from '../../model/slice/CreateTagSlice'

interface CreateTagFormProps {
  className?: string
}

const reducers: ReducerList = {
  createTag: CreateTagReducer,
}

export const CreateTagForm: React.FC<CreateTagFormProps> = memo((props: CreateTagFormProps) => {
  const { className } = props
  const { t } = useTranslation('tags-page')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const values = useSelector(getCreateTagValuesSelector)
  const validation = useSelector(getCreateTagValidationSelector)
  const isLoading = useSelector(getCreateTagIsLoadingSelector)
  const isCreated = useSelector(getCreateTagIsCreatedSelector)

  const onChangeNameHandler = React.useCallback((value: string) => {
    dispatch(CreateTagActions.setName(value))
    dispatch(CreateTagActions.setCode(ruToEngTransliterate(value)))
  }, [dispatch])

  const onChangeDraftHandler = React.useCallback((value: boolean) => {
    dispatch(CreateTagActions.setDraft(value))
  }, [dispatch])

  const onSubmitHandler = React.useCallback(() => {
    dispatch(CreateTagService())
  }, [dispatch])

  React.useEffect(() => {
    if (isCreated) {
      navigate(getRouteTags())
    }
  }, [isCreated, navigate])

  return (
    <DynamicReducerLoader reducers={reducers}>
      <TagForm
        className={className}
        title={t('create-tag-title')}
        valueName={values?.name}
        valueDraft={values?.draft}
        validationName={validation?.name}
        validationDraft={validation?.draft}
        validationCode={validation?.code}
        valueCode={values?.code}
        isLoading={isLoading}
        onChangeName={onChangeNameHandler}
        onChangeDraft={onChangeDraftHandler}
        onSubmit={onSubmitHandler}
      />
    </DynamicReducerLoader>
  )
})
