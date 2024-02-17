import {
  DeleteCategoryReducer,
  DeleteCategoryService,
  getIsDeletedCategorySelector,
  CategoryForm,
} from '@entities/Category'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteCategories } from '@lib/router'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getEditCategoryIsLoadingSelector, getEditCategoryIsUpdatedSelector,
  getEditCategoryValidationSelector,
  getEditCategoryValuesSelector,
} from '../../model/selectors/EditCategorySelectors'
import { EditCategoryService } from '../../model/services/EditCategoryService'
import { FetchCategoryService } from '../../model/services/FetchEditCategory'
import { EditCategoryActions, EditCategoryReducer } from '../../model/slice/EditCategorySlice'
import { EditCategoryFormSkeleton } from './EditCategoryForm.skeleton'

interface EditCategoryFormProps {
  className?: string
  code?: string
}

const reducers: ReducerList = {
  editCategory: EditCategoryReducer,
  deleteCategory: DeleteCategoryReducer,
}

export const EditCategoryForm: React.FC<EditCategoryFormProps> =
  memo((props: EditCategoryFormProps) => {
    const {
      className,
      code = '',
    } = props
    const { t } = useTranslation('categories-page')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const values = useSelector(getEditCategoryValuesSelector)
    const validation = useSelector(getEditCategoryValidationSelector)
    const isLoading = useSelector(getEditCategoryIsLoadingSelector)
    const isUpdated = useSelector(getEditCategoryIsUpdatedSelector)
    const isDeleted = useSelector(getIsDeletedCategorySelector)

    const onChangeNameHandler = React.useCallback((value: string) => {
      dispatch(EditCategoryActions.setName(value))
    }, [dispatch])

    const onChangeDraftHandler = React.useCallback((value: boolean) => {
      dispatch(EditCategoryActions.setDraft(value))
    }, [dispatch])

    const onDeleteHandler = React.useCallback((id: number | string) => {
      dispatch(DeleteCategoryService(Number(id)))
    }, [dispatch])

    const onSubmitHandler = React.useCallback(() => {
      dispatch(EditCategoryService())
    }, [dispatch])

    React.useEffect(() => {
      dispatch(FetchCategoryService(code))
    }, [code, dispatch])

    React.useEffect(() => {
      if (isUpdated || isDeleted) {
        navigate(getRouteCategories())
      }
    }, [isDeleted, isUpdated, navigate, validation])

    return (
      <DynamicReducerLoader reducers={reducers}>
        {Boolean(!values?.id && !isLoading) && (
          <TitleLarge>
            {t('category-not-found')}
          </TitleLarge>
        )}

        {Boolean(!values?.id && isLoading) && (
          <EditCategoryFormSkeleton />
        )}

        {Boolean(values?.id && !isLoading) && (
          <CategoryForm
            className={className}
            title={t('edit-category-title')}
            valueName={values?.name}
            valueDraft={values?.draft}
            validationName={validation?.name}
            validationDraft={validation?.draft}
            isLoading={isLoading}
            onChangeName={onChangeNameHandler}
            onChangeDraft={onChangeDraftHandler}
            onSubmit={onSubmitHandler}
            isCategoryCodeView={false}
            isDelete
            id={values?.id}
            onDelete={onDeleteHandler}
          />
        )}
      </DynamicReducerLoader>
    )
  })
