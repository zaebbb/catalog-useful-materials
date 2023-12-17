import { type ThunkConfig } from '@app/providers/StoreProvider'
import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'
import { makeFormData, makeFormFiles } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type ArticlePatternRequest, type ArticlePatternResponse,
} from '../types/CreateNotePatternArticleSchema'

export const CreateNotePatternArticle =
  createAsyncThunk<ArticlePatternResponse, Files, ThunkConfig<string>>(
    'CreateNote/CreateNotePatternArticle',
    async (
      files,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        dispatch,
        getState,
      } = thunkApi

      const state = getState()
      const image = makeFormFiles(files)[0]

      const formData: ArticlePatternRequest = {
        linkNote: state.createNotePatternArticle?.values.linkNote ?? '',
        linkVideo: state.createNotePatternArticle?.values.linkVideo,
        userId: state.user.user?.id ?? 0,
        title: state.noteBaseField?.values.title ?? '',
        draft: state.noteBaseField?.values.draft ?? false,
        description: state.noteBaseField?.values.description ?? '',
        viewId: state.notesViews?.currentNoteView?.id ?? 0,
        typeId: state.notesTypes?.currentNoteType?.id ?? 0,
        categoryId: state.category?.select.currentCategory?.id ?? 0,
        tagsIds: state.tag?.select.currentTagsIds ?? [],
        image,
      }

      try {
        const makeData = makeFormData<ArticlePatternRequest>({
          data: formData,
        })

        const response = await extra.api.post<ArticlePatternResponse>(
          '/notes/create-pattern-article',
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
