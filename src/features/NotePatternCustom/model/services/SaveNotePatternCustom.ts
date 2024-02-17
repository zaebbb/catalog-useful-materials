import { type ThunkConfig } from '@app/providers/StoreProvider'
import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'

import { makeFormData, makeFormFiles } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  type CustomPatternRequest,
  type CustomPatternResponse, type SaveNotePatternCustomParams,
} from '../types/NotePatternCustomSchema'

export const SaveNotePatternCustom =
  createAsyncThunk<CustomPatternResponse, SaveNotePatternCustomParams, ThunkConfig<string>>(
    'Note/SaveNotePatternCustom',
    async (
      params,
      thunkApi
    ) => {
      const {
        mode,
        files,
      } = params
      const {
        extra,
        rejectWithValue,
        dispatch,
        getState,
      } = thunkApi

      const state = getState()

      const formDataFiles = new FormData()

      Object.entries(files).forEach(([key, filesItem]) => {
        makeFormFiles(filesItem)
          .forEach((file) => {
            formDataFiles.append(key, file)
          })
      })

      const formData: CustomPatternRequest = {
        mode,
        id: state.noteBaseField?.values.id,
        stringFields: state.notePatternCustom?.fields ?? [],
        userId: state.user.user?.id ?? 0,
        title: state.noteBaseField?.values.title ?? '',
        draft: state.noteBaseField?.values.draft ?? false,
        description: state.noteBaseField?.values.description ?? '',
        viewId: state.notesViews?.currentNoteView?.id ?? 0,
        typeId: state.notesTypes?.currentNoteType?.id ?? 0,
        categoryId: state.category?.select.currentCategory?.id ?? 0,
        tagsIds: state.tag?.select.currentTagsIds ?? [],
      }

      try {
        const makeData = makeFormData<CustomPatternRequest>({
          data: formData,
          formData: formDataFiles,
        })

        const response = await extra.api.post<CustomPatternResponse>(
          '/notes/save-pattern-custom',
          makeData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        if (!response.data) {
          throw new Error()
        }

        if (response.data.validation) {
          dispatch(NoteBaseFieldsActions.setValidation(response.data.validation))
          dispatch(NotesTypesActions.setValidation(response.data.validation.typeId ?? ''))
        }

        dispatch(NoteBaseFieldsActions.setIsLoading(false))
        dispatch(NotesTypesActions.setIsLoading(false))

        return response.data
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
