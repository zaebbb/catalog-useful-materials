import { TagsList } from '@entities/Tag'
import {
  DeleteTagActions,
  DeleteTagReducer,
  DeleteTagService,
  getIsDeletedTagSelector,
} from '@entities/Tag'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useTagsList } from '../../api/tagsListApi'

interface TagsListProps {
  className?: string
}

const reducers: ReducerList = {
  deleteTag: DeleteTagReducer,
}

export const TagsListApi: React.FC<TagsListProps> = memo((props: TagsListProps) => {
  const { className } = props

  const {
    isLoading,
    data: tags,
    refetch,
  } = useTagsList()

  const dispatch = useAppDispatch()
  const isDeleted = useSelector(getIsDeletedTagSelector)

  const onDeleteHandler = React.useCallback((id: number | string) => {
    dispatch(DeleteTagService(Number(id)))
  }, [dispatch])

  React.useEffect(() => {
    if (isDeleted) {
      dispatch(DeleteTagActions.setDeleted(false))
      refetch()
    }
  }, [dispatch, isDeleted, refetch])

  React.useEffect(() => {
    refetch()
  }, [refetch])

  return (
    <DynamicReducerLoader reducers={reducers}>
      <TagsList
        tags={tags?.success}
        className={className}
        isLoading={isLoading}
        onDelete={onDeleteHandler}
        isAccess
      />
    </DynamicReducerLoader>
  )
})
