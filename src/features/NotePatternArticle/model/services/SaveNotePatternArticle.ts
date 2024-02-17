import { type ThunkConfig } from '@app/providers/StoreProvider'
import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'
import { makeFormData, makeFormFiles } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type ArticlePatternRequest,
  type ArticlePatternSaveResponse,
  type SaveNotePatternArticleParams,
} from '../types/NotePatternArticleSchema'

export const SaveNotePatternArticle =
  createAsyncThunk<ArticlePatternSaveResponse, SaveNotePatternArticleParams, ThunkConfig<string>>(
    'Note/SaveNotePatternArticle',
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

      const formData: ArticlePatternRequest = {
        linkNote: state.notePatternArticle?.values.linkNote ?? '',
        linkVideo: state.notePatternArticle?.values.linkVideo,
        userId: state.user.user?.id ?? 0,
        title: state.noteBaseField?.values.title ?? '',
        draft: state.noteBaseField?.values.draft ?? false,
        description: state.noteBaseField?.values.description ?? '',
        viewId: state.notesViews?.currentNoteView?.id ?? 0,
        typeId: state.notesTypes?.currentNoteType?.id ?? 0,
        categoryId: state.category?.select.currentCategory?.id ?? 0,
        tagsIds: state.tag?.select.currentTagsIds ?? [],
        image,
        mode,
        id: state.noteBaseField?.values.id,
      }

      try {
        const makeData = makeFormData<ArticlePatternRequest>({
          data: formData,
        })

        const response = await extra.api.post<ArticlePatternSaveResponse>(
          '/notes/save-pattern-article',
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
