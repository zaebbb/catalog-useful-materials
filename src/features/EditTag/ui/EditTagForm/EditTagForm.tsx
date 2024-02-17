import { DeleteTagReducer, DeleteTagService, getIsDeletedTagSelector, TagForm } from '@entities/Tag'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteTags } from '@lib/router'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getEditTagIsLoadingSelector, getEditTagIsUpdatedSelector,
  getEditTagValidationSelector,
  getEditTagValuesSelector,
} from '../../model/selectors/EditTagSelectors'
import { EditTagService } from '../../model/services/EditTagService'
import { FetchTagService } from '../../model/services/FetchEditTag'
import { EditTagActions, EditTagReducer } from '../../model/slice/EditTagSlice'
import { EditTagFormSkeleton } from './EditTagForm.skeleton'

interface CreateTagFormProps {
  className?: string
  code?: string
}

const reducers: ReducerList = {
  editTag: EditTagReducer,
  deleteTag: DeleteTagReducer,
}

export const EditTagForm: React.FC<CreateTagFormProps> = memo((props: CreateTagFormProps) => {
  const {
    className,
    code = '',
  } = props
  const { t } = useTranslation('tags-page')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const values = useSelector(getEditTagValuesSelector)
  const validation = useSelector(getEditTagValidationSelector)
  const isLoading = useSelector(getEditTagIsLoadingSelector)
  const isUpdated = useSelector(getEditTagIsUpdatedSelector)
  const isDeleted = useSelector(getIsDeletedTagSelector)

  const onChangeNameHandler = React.useCallback((value: string) => {
    dispatch(EditTagActions.setName(value))
  }, [dispatch])

  const onChangeDraftHandler = React.useCallback((value: boolean) => {
    dispatch(EditTagActions.setDraft(value))
  }, [dispatch])

  const onDeleteHandler = React.useCallback((id: number | string) => {
    dispatch(DeleteTagService(Number(id)))
  }, [dispatch])

  const onSubmitHandler = React.useCallback(() => {
    dispatch(EditTagService())
  }, [dispatch])

  React.useEffect(() => {
    dispatch(FetchTagService(code))
  }, [code, dispatch])

  React.useEffect(() => {
    if (isUpdated || isDeleted) {
      navigate(getRouteTags())
    }
  }, [isDeleted, isUpdated, navigate, validation])

  return (
    <DynamicReducerLoader reducers={reducers}>
      {Boolean(!values?.id && !isLoading) && (
        <TitleLarge>
          {t('tag-not-found')}
        </TitleLarge>
      )}

      {Boolean(!values?.id && isLoading) && (
        <EditTagFormSkeleton />
      )}

      {Boolean(values?.id && !isLoading) && (
        <TagForm
          className={className}
          title={t('edit-tag-title')}
          valueName={values?.name}
          valueDraft={values?.draft}
          validationName={validation?.name}
          validationDraft={validation?.draft}
          isLoading={isLoading}
          onChangeName={onChangeNameHandler}
          onChangeDraft={onChangeDraftHandler}
          onSubmit={onSubmitHandler}
          isTagCodeView={false}
          isDelete
          id={values?.id}
          onDelete={onDeleteHandler}
        />
      )}
    </DynamicReducerLoader>
  )
})
