import type React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentElementSelector } from '../../model/selectors/CategorySelector'

import { SelectCategory, type SelectCategoryProps } from '../../ui/SelectCategory/SelectCategory'

interface UseNotesTypesResult {
  currentCategory?: SelectFieldOption<string>
  SelectCategory: React.FC<SelectCategoryProps>
}

export const useCategory = (): UseNotesTypesResult => {
  const currentCategory = useSelector(getCurrentElementSelector)

  return {
    currentCategory,
    SelectCategory,
  }
}
