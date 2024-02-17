import { useSelector } from 'react-redux'
import { getCurrentElementSelector } from '../../model/selectors/NotesTypesSelector'
import { NotesTypesCodeList } from '../../model/types/NotesTypesSchema'

export const useIsCustomNoteType = (): boolean => {
  const currentType = useSelector(getCurrentElementSelector)

  switch (currentType?.code) {
    case NotesTypesCodeList.CODE:
    case NotesTypesCodeList.ARTICLE:
    case NotesTypesCodeList.ISSUE:
    case NotesTypesCodeList.LAYOUT:
    case NotesTypesCodeList.SERVICE:
    case NotesTypesCodeList.TECHNOLOGY:
    case NotesTypesCodeList.COURSE:
    case NotesTypesCodeList.BOOK:
    case NotesTypesCodeList.VIDEO:
      return true
    default:
      return false
  }
}
