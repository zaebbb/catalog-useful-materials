import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  CreateNotePatternArticle,
} from '../services/CreateNotePatternArticle'
import {
  type ArticlePatternResponse,
  type CreateNotePatternArticleSchema,
} from '../types/CreateNotePatternArticleSchema'

const initialState: CreateNotePatternArticleSchema = {
  values: {
    linkNote: '',
    linkVideo: '',
    isImageParse: false,
  },
  isLoading: false,
}

export const CreateNotePatternArticleSlice = createSlice({
  name: 'CreateNotePatternArticleSlice',
  initialState,
  reducers: {
    setLinkNote: (state, { payload }: PayloadAction<string>) => {
      state.values.linkNote = payload
    },
    setLinkVideo: (state, { payload }: PayloadAction<string>) => {
      state.values.linkVideo = payload
    },
    setIsImageParse: (state, { payload }: PayloadAction<boolean>) => {
      state.values.isImageParse = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        CreateNotePatternArticle.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        CreateNotePatternArticle.fulfilled,
        (state, { payload }: PayloadAction<ArticlePatternResponse>) => {
          state.isLoading = false

          if (payload.validation) {
            state.validation = payload.validation
          }

          if (payload.success) {
            state.createdNoteCode = payload.success.code
          }
        }
      )
      .addCase(
        CreateNotePatternArticle.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: CreateNotePatternArticleActions,
  reducer: CreateNotePatternArticleReducer,
} = CreateNotePatternArticleSlice
