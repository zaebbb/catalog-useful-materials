import { type ThunkConfig } from '@app/providers/StoreProvider'
import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'

import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type SaveNotePatternVideoParams,
  type VideoPatternRequest, type VideoPatternResponse,
} from '../types/NotePatternVideoSchema'

export const SaveNotePatternVideo =
  createAsyncThunk<VideoPatternResponse, SaveNotePatternVideoParams, ThunkConfig<string>>(
    'Note/SaveNotePatternVideo',
    async (
      params,
      thunkApi
    ) => {
      const {
        mode,
      } = params
      const {
        extra,
        rejectWithValue,
        dispatch,
        getState,
      } = thunkApi

      const state = getState()

      const formData: VideoPatternRequest = {
        mode,
        id: state.noteBaseField?.values.id,
        linkVideo: state.notePatternVideo?.values.linkVideo ?? '',
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
        const makeData = makeFormData<VideoPatternRequest>({
          data: formData,
        })

        const response = await extra.api.post<VideoPatternResponse>(
          '/notes/save-pattern-video',
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
