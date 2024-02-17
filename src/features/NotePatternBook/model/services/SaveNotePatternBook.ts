import { type ThunkConfig } from '@app/providers/StoreProvider'
import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'
import { makeFormData, makeFormFiles } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type BookPatternRequest, type BookPatternResponse, type SaveNotePatternBookParams,
} from '../types/NotePatternBookSchema'

export const SaveNotePatternBook =
  createAsyncThunk<BookPatternResponse, SaveNotePatternBookParams, ThunkConfig<string>>(
    'Note/SaveNotePatternBook',
    async (
      params,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        dispatch,
        getState,
      } = thunkApi
      const {
        files,
        mode,
      } = params

      const state = getState()
      const image = makeFormFiles(files)[0]

      const formData: BookPatternRequest = {
        isFileView: state.notePatternBook?.values.isFileView ?? false,
        isLinkView: state.notePatternBook?.values.isLinkView ?? false,
        linkBook: state.notePatternBook?.values.linkBook ?? '',
        mode,
        id: state.noteBaseField?.values.id,
        fileBook: image,
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
        const makeData = makeFormData<BookPatternRequest>({
          data: formData,
        })

        const response = await extra.api.post<BookPatternResponse>(
          '/notes/save-pattern-book',
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
