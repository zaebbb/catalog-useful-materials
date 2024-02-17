import {
  CategoriesList,
  DeleteCategoryActions,
  DeleteCategoryReducer,
  DeleteCategoryService,
  getIsDeletedCategorySelector,
} from '@entities/Category'

import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useCategoriesList } from '../../api/categoriesListApi'

interface CategoriesListProps {
  className?: string
}

const reducers: ReducerList = {
  deleteCategory: DeleteCategoryReducer,
}

export const CategoriesListApi: React.FC<CategoriesListProps> =
  memo((props: CategoriesListProps) => {
    const { className } = props

    const {
      isLoading,
      data: categories,
      refetch,
    } = useCategoriesList()

    const dispatch = useAppDispatch()
    const isDeleted = useSelector(getIsDeletedCategorySelector)

    const onDeleteHandler = React.useCallback((id: number | string) => {
      dispatch(DeleteCategoryService(Number(id)))
    }, [dispatch])

    React.useEffect(() => {
      if (isDeleted) {
        dispatch(DeleteCategoryActions.setDeleted(false))
        refetch()
      }
    }, [dispatch, isDeleted, refetch])

    React.useEffect(() => {
      refetch()
    }, [refetch])

    return (
      <DynamicReducerLoader reducers={reducers}>
        <CategoriesList
          categories={categories?.success}
          className={className}
          isLoading={isLoading}
          onDelete={onDeleteHandler}
          isAccess
        />
      </DynamicReducerLoader>
    )
  })
