import type React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentElementSelector } from '../../model/selectors/NotesViewsSelector'
import { type NotesViewsCodeList } from '../../model/types/NotesViewsSchema'
import {
  SelectNotesViews,
} from '../../ui/SelectNotesViews/SelectNotesViews'
import { type SelectNotesViewsProps } from '../../ui/SelectNotesViews/SelectNotesViews'

interface UseNotesTypesResult {
  currentView?: SelectFieldOption<NotesViewsCodeList>
  SelectNotesViews: React.FC<SelectNotesViewsProps>
}

export const useNotesViews = (): UseNotesTypesResult => {
  const currentView = useSelector(getCurrentElementSelector)

  return {
    currentView,
    SelectNotesViews,
  }
}
