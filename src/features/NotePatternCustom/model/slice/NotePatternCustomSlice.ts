import { type FieldNoteItem } from '@entities/Notes'
import { generateKey } from '@lib/helpers/generateKey'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  FetchNoteTypeFieldsService,
} from '../services/FetchNoteTypeFieldsService'
import {
  SaveNotePatternCustom,
} from '../services/SaveNotePatternCustom'
import {
  type NotePatternCustomSchema,
  type FetchNotePatternCustomResponse,
  type NotePatternCustomFieldsValues,
  type CustomPatternResponse,
} from '../types/NotePatternCustomSchema'

const initialState: NotePatternCustomSchema = {
  isLoading: false,
  isMountedFields: false,
  fields: [],
}

export interface StringValue {
  value: string
  name: string
}

export const NotePatternCustomSlice = createSlice({
  name: 'NotePatternCustomSlice',
  initialState,
  reducers: {
    setStringValue: (state, { payload }: PayloadAction<StringValue>) => {
      state.fields = state.fields.map(field => {
        if (field.name === payload.name) {
          return {
            ...field,
            value: payload.value,
          }
        }

        return field
      })
    },
    setFieldsValuesRemote: (state, { payload }: PayloadAction<FieldNoteItem[]>) => {
      state.fields = state.fields.map((field, i) => {
        return {
          code: field.code,
          title: field.title,
          isRequired: field.isRequired,
          id: payload[i].id,
          name: payload[i].name,
          value: payload[i].value,
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        FetchNoteTypeFieldsService.pending,
        (state) => {
          state.isLoading = true
          state.isMountedFields = false
        }
      )
      .addCase(
        FetchNoteTypeFieldsService.fulfilled,
        (state, { payload }: PayloadAction<FetchNotePatternCustomResponse>) => {
          if (payload.success) {
            state.fields = payload.success.fields.map((field): NotePatternCustomFieldsValues => ({
              ...field,
              name: `${field.code}-${generateKey()}`,
              value: '',
            }))
          }
          state.isLoading = false
          state.isMountedFields = true
        }
      )
      .addCase(
        FetchNoteTypeFieldsService.rejected,
        (state) => {
          state.isLoading = false
          state.isMountedFields = false
        }
      )
      .addCase(
        SaveNotePatternCustom.pending,
        (state) => {
          state.isLoading = true
        }
      )
      .addCase(
        SaveNotePatternCustom.fulfilled,
        (state, { payload }: PayloadAction<CustomPatternResponse>) => {
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
        SaveNotePatternCustom.rejected,
        (state) => {
          state.isLoading = false
        }
      )
  },
})

export const {
  actions: NotePatternCustomActions,
  reducer: NotePatternCustomReducer,
} = NotePatternCustomSlice
