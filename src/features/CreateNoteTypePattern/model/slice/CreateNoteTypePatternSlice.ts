import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  CreateNoteTypeService,
} from '../services/CreateNoteTypeService'
import {
  type CreateNoteTypePatternSchema, type NoteTypeCurrentFieldItem,
  type CreateNoteTypeResponse,
} from '../types/CreateNoteTypePatternSchema'

const initialState: CreateNoteTypePatternSchema = {
  isLoading: false,
  values: {
    name: '',
    draft: false,
    code: '',
    fields: [],
  },
  currentField: {},
  isCreated: false,
  _remoteCustomFieldsPath: '/remote-data/custom-fields-list',
}

export const CreateNoteTypePatternSlice = createSlice({
  name: 'CreateNoteTypePatternSlice',
  initialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      state.values.name = payload
    },
    setDraft: (state, { payload }: PayloadAction<boolean>) => {
      state.values.draft = payload
    },
    setCode: (state, { payload }: PayloadAction<string>) => {
      state.values.code = payload
    },

    setFieldTitle: (state, { payload }: PayloadAction<string>) => {
      state.currentField.title = payload
    },
    setFieldDraft: (state, { payload }: PayloadAction<boolean>) => {
      state.currentField.draft = payload
    },
    setFieldIsRequired: (state, { payload }: PayloadAction<boolean>) => {
      state.currentField.required = payload
    },
    setFieldType: (state, { payload }: PayloadAction<SelectFieldOption<any>>) => {
      state.currentField.customField = payload
    },

    setField: (state, { payload }: PayloadAction<Required<NoteTypeCurrentFieldItem>>) => {
      state.values.fields.push(payload)
      state.currentField = {}
    },
    clearFieldsValidation: (state) => {
      if (state.validation) {
        state.validation.fields = ''
      }
    },
    deleteField: (state, { payload }: PayloadAction<string>) => {
      const fields = state.values.fields

      state.values.fields = fields.filter(
        field => field.key !== payload
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        CreateNoteTypeService.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        CreateNoteTypeService.fulfilled,
        (state, { payload }: PayloadAction<CreateNoteTypeResponse>) => {
          state.isLoading = false

          if (payload.validation) {
            state.validation = payload.validation
          }

          if (payload.success?.isCreated) {
            state.isCreated = true
          }
        }
      )
      .addCase(
        CreateNoteTypeService.rejected,
        (state) => {
          state.validation = {}
          state.isLoading = false
        }
      )
  },
})

export const {
  actions: CreateNoteTypePatternActions,
  reducer: CreateNoteTypePatternReducer,
} = CreateNoteTypePatternSlice
