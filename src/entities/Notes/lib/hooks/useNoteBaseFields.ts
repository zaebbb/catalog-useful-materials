import {
  getDescriptionSelector, getDraftSelector,
  getTitleSelector,
} from '@entities/Notes/model/selectors/NoteBaseFieldsSelectors'
import { useSelector } from 'react-redux'

export interface UseNoteBaseFieldsResult {
  title: string
  description: string
  draft: boolean
}

export const useNoteBaseFields = (): UseNoteBaseFieldsResult => {
  const title = useSelector(getTitleSelector)
  const description = useSelector(getDescriptionSelector)
  const draft = useSelector(getDraftSelector)

  return {
    title,
    description,
    draft,
  }
}
