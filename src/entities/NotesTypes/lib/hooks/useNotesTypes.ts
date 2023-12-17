import type React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentElementSelector } from '../../model/selectors/NotesTypesSelector'
import { type NotesTypesCodeList } from '../../model/types/NotesTypesSchema'
import {
  SelectNotesTypes,
  type SelectNotesTypesProps,
} from '../../ui/SelectNotesTypes/SelectNotesTypes'

interface UseNotesTypesResult {
  currentType?: SelectFieldOption<NotesTypesCodeList>
  SelectNotesTypes: React.FC<SelectNotesTypesProps>
}

export const useNotesTypes = (): UseNotesTypesResult => {
  const currentType = useSelector(getCurrentElementSelector)

  return {
    currentType,
    SelectNotesTypes,
  }
}
