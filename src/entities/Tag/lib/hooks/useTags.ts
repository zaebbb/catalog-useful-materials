import type React from 'react'
import { useSelector } from 'react-redux'
import {
  getCurrentElementSelector,
  getCurrentTagsIdsSelector,
} from '../../model/selectors/TagSelector'
import {
  SelectTags,
  type SelectTagsProps,
} from '../../ui/SelectTags/SelectTags'

interface UseNotesTypesResult {
  currentTags?: SelectItems<string>
  SelectTags: React.FC<SelectTagsProps>
  currentTagsIds: number[] | undefined
}

export const useTags = (): UseNotesTypesResult => {
  const currentTags = useSelector(getCurrentElementSelector)
  const currentTagsIds = useSelector(getCurrentTagsIdsSelector)

  return {
    currentTags,
    SelectTags,
    currentTagsIds,
  }
}
