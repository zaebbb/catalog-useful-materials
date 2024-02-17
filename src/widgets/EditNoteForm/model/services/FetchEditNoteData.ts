import { type ThunkConfig } from '@app/providers/StoreProvider'
import { CategoryActions } from '@entities/Category'
import { NoteBaseFieldsActions, type EditNoteResponse } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'
import { NotesViewsActions } from '@entities/NotesViews'
import { TagActions } from '@entities/Tag'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'

export interface FetchEditNoteDataRequest {
  code: string
}

export const FetchEditNoteData =
  createAsyncThunk<EditNoteResponse, string, ThunkConfig<string>>(
    'EditNote/FetchEditNoteData',
    async (
      code,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        dispatch,
      } = thunkApi

      try {
        const makeData = makeFormData<FetchEditNoteDataRequest>({
          data: {
            code,
          },
        })

        const response = await extra.api.post<EditNoteResponse>(
          '/notes/fetch-edit-note-data',
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

        dispatch(NoteBaseFieldsActions.setIsLoading(false))

        if (response.data.success) {
          const {
            type,
            description,
            title,
            draft,
            tags,
            category,
            view,
            fields,
            id,
          } = response.data.success

          dispatch(CategoryActions.setSelectedCategory(category))
          dispatch(TagActions.setSelected(tags))
          dispatch(NotesViewsActions.setSelectedView(view))
          dispatch(NotesTypesActions.setCurrentType(type))

          dispatch(NoteBaseFieldsActions.setDraft(draft))
          dispatch(NoteBaseFieldsActions.setDescription(description))
          dispatch(NoteBaseFieldsActions.setTitle(title))
          dispatch(NoteBaseFieldsActions.setFields(fields))
          dispatch(NoteBaseFieldsActions.setId(id))
        }

        return response.data
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
