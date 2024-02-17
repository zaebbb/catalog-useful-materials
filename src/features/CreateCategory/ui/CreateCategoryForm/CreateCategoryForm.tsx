import { CategoryForm } from '@entities/Category'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { ruToEngTransliterate } from '@lib/helpers/transliterate'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteCategories } from '@lib/router'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getCreateCategoryIsCreatedSelector,
  getCreateCategoryIsLoadingSelector,
  getCreateCategoryValidationSelector,
  getCreateCategoryValuesSelector,
} from '../../model/selectors/CreateCategorySelectors'
import { CreateCategoryService } from '../../model/services/CreateCategoryService'
import { CreateCategoryActions, CreateCategoryReducer } from '../../model/slice/CreateCategorySlice'

interface CreateCategoryFormProps {
  className?: string
}

const reducers: ReducerList = {
  createCategory: CreateCategoryReducer,
}

export const CreateCategoryForm: React.FC<CreateCategoryFormProps> =
  memo((props: CreateCategoryFormProps) => {
    const { className } = props
    const { t } = useTranslation('categories-page')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const values = useSelector(getCreateCategoryValuesSelector)
    const validation = useSelector(getCreateCategoryValidationSelector)
    const isLoading = useSelector(getCreateCategoryIsLoadingSelector)
    const isCreated = useSelector(getCreateCategoryIsCreatedSelector)

    const onChangeNameHandler = React.useCallback((value: string) => {
      dispatch(CreateCategoryActions.setName(value))
      dispatch(CreateCategoryActions.setCode(ruToEngTransliterate(value)))
    }, [dispatch])

    const onChangeDraftHandler = React.useCallback((value: boolean) => {
      dispatch(CreateCategoryActions.setDraft(value))
    }, [dispatch])

    const onSubmitHandler = React.useCallback(() => {
      dispatch(CreateCategoryService())
    }, [dispatch])

    React.useEffect(() => {
      if (isCreated) {
        navigate(getRouteCategories())
      }
    }, [isCreated, navigate])

    return (
      <DynamicReducerLoader reducers={reducers}>
        <CategoryForm
          className={className}
          title={t('create-category-title')}
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
