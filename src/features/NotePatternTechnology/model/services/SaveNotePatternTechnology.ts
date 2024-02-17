import { type ThunkConfig } from '@app/providers/StoreProvider'
import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'

import { makeFormData, makeFormFiles } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type TechnologyPatternResponse,
  type TechnologyPatternRequest,
  type SaveNotePatternTechnologyParams,
} from '../types/NotePatternTechnologySchema'

export const SaveNotePatternTechnology =
  createAsyncThunk<TechnologyPatternResponse, SaveNotePatternTechnologyParams, ThunkConfig<string>>(
    'Note/SaveNotePatternTechnology',
    async (
      params,
      thunkApi
    ) => {
      const {
        files,
        mode,
      } = params
      const {
        extra,
        rejectWithValue,
        dispatch,
        getState,
      } = thunkApi

      const state = getState()
      const icon = makeFormFiles(files)[0]

      const formData: TechnologyPatternRequest = {
        mode,
        id: state.noteBaseField?.values.id,
        linkTechnology: state.notePatternTechnology?.values.linkTechnology ?? '',
        linkDocs: state.notePatternTechnology?.values.linkDocs ?? '',
        linkInstall: state.notePatternTechnology?.values.linkInstall ?? '',
        icon,
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
        const makeData = makeFormData<TechnologyPatternRequest>({
          data: formData,
        })

        const response = await extra.api.post<TechnologyPatternResponse>(
          '/notes/save-pattern-technology',
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
