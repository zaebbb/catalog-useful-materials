import { type StateSchema, StoreProvider } from '@app/providers/StoreProvider'
import { CategoryReducer } from '@entities/Category'
import { GoogleAuthReducer } from '@entities/GoogleAuth'
import { NoteBaseFieldsReducer } from '@entities/Notes'
import { NoteDetailsReducer } from '@entities/Notes'
import { NotesTypesReducer } from '@entities/NotesTypes'
import { NotesViewsReducer } from '@entities/NotesViews'
import { TagReducer } from '@entities/Tag'
import { CreateNotePatternArticleReducer } from '@features/CreateNotePatternArticle'
import { CreateNotePatternBookReducer } from '@features/CreateNotePatternBook'
import { CreateNotePatternCodeReducer } from '@features/CreateNotePatternCode'
import { CreateNotePatternCourseReducer } from '@features/CreateNotePatternCourse'
import { CreateNotePatternIssueReducer } from '@features/CreateNotePatternIssue'
import { CreateNotePatternLayoutReducer } from '@features/CreateNotePatternLayout'
import { CreateNotePatternServiceReducer } from '@features/CreateNotePatternService'
import { CreateNotePatternTechnologyReducer } from '@features/CreateNotePatternTechnology'
import { CreateNotePatternVideoReducer } from '@features/CreateNotePatternVideo'
import { ProfileEditReducer } from '@features/ProfileEdit'
import { UserLoginReducer } from '@features/UserLogin/model/slice/UserLoginSlice'
import { type ReducerList } from '@lib/components/DynamicReducerLoader'
import { type StoryFn } from '@storybook/react'

/** @module StoreDecorator */

/**
 * Объект с асихронными функциями подключаемые в redux по умолчанию для Storybook кейсов
 * @type {ReducerList}
 * */
const defaultAsyncReducers: ReducerList = {
  profileEdit: ProfileEditReducer,
  googleAuth: GoogleAuthReducer,
  userLoginForm: UserLoginReducer,
  noteBaseField: NoteBaseFieldsReducer,
  notesTypes: NotesTypesReducer,
  category: CategoryReducer,
  tag: TagReducer,
  notesViews: NotesViewsReducer,
  createNotePatternTechnology: CreateNotePatternTechnologyReducer,
  createNotePatternBook: CreateNotePatternBookReducer,
  createNotePatternArticle: CreateNotePatternArticleReducer,
  createNotePatternLayout: CreateNotePatternLayoutReducer,
  createNotePatternIssue: CreateNotePatternIssueReducer,
  createNotePatternCode: CreateNotePatternCodeReducer,
  createNotePatternService: CreateNotePatternServiceReducer,
  createNotePatternVideo: CreateNotePatternVideoReducer,
  createNotePatternCourse: CreateNotePatternCourseReducer,
  noteDetails: NoteDetailsReducer,
}

/**
 * @description Декоратор Storybook для подключения Store провайдера и возможности использовать в кейсах redux
 * @param {DeepPartial<StateSchema>} state - Объект с стейт схемой проекта
 * @param {(ReducerList|undefined)} asyncReducers - Список с асинхронными редюсерами, необязательный
 * @returns {function} Возращается Callback с Story компонентом
 * */
export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList
) => (Story: StoryFn) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <Story />
  </StoreProvider>
)
