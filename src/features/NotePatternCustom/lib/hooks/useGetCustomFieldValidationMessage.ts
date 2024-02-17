import React from 'react'
import { useSelector } from 'react-redux'
import {
  getNoteCustomValidationSelector,
} from '../../model/selectors/NotePatternCustomSelectors'
import {
  type NotePatternCustomFieldsValues,
} from '../../model/types/NotePatternCustomSchema'

export interface UseGetCustomFieldValidationMessage {
  getFieldValidation: (
    field: NotePatternCustomFieldsValues
  ) => string
}

export const useGetCustomFieldValidationMessage = (): UseGetCustomFieldValidationMessage => {
  const validation = useSelector(getNoteCustomValidationSelector)

  const getFieldValidation = React.useCallback((
    field: NotePatternCustomFieldsValues
  ): string => {
    if (!validation) {
      return ''
    }

    return validation[field.name] ?? ''
  }, [validation])

  return {
    getFieldValidation,
  }
}
