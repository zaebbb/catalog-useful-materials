import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  SaveNotePatternArticle,
} from '../services/SaveNotePatternArticle'
import {
  type ArticlePatternSaveResponse,
  type NotePatternArticleSchema,
} from '../types/NotePatternArticleSchema'

const initialState: NotePatternArticleSchema = {
  values: {
    linkNote: '',
    linkVideo: '',
    isImageParse: false,
  },
  editValues: {
    image: '',
  },
  isLoading: false,
}

export const NotePatternArticleSlice = createSlice({
  name: 'NotePatternArticleSlice',
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
    setRemoteImage: (state, { payload }: PayloadAction<string>) => {
      state.editValues.image = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        SaveNotePatternArticle.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        SaveNotePatternArticle.fulfilled,
        (state, { payload }: PayloadAction<ArticlePatternSaveResponse>) => {
          state.isLoading = false

          if (payload.validation) {
            state.validation = payload.validation
          }

          if (payload.success) {
            state.saveNoteCode = payload.success.code
          }
        }
      )
      .addCase(
        SaveNotePatternArticle.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: NotePatternArticleActions,
  reducer: NotePatternArticleReducer,
} = NotePatternArticleSlice
