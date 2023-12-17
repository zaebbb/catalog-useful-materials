import type React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentElementSelector } from '../../model/selectors/TagSelector'
import {
  SelectTags,
  type SelectTagsProps,
} from '../../ui/SelectTags/SelectTags'

interface UseNotesTypesResult {
  currentTags?: SelectItems<string>
  SelectTags: React.FC<SelectTagsProps>
}

export const useTags = (): UseNotesTypesResult => {
  const currentTags = useSelector(getCurrentElementSelector)

  return {
    currentTags,
    SelectTags,
  }
}
