import { type StateSchema, StoreProvider } from '@app/providers/StoreProvider'
import { CategoryReducer } from '@entities/Category'
import { GoogleAuthReducer } from '@entities/GoogleAuth'
import { NoteBaseFieldsReducer } from '@entities/Notes'
import { NoteDetailsReducer } from '@entities/Notes'
import { NotesTypesReducer } from '@entities/NotesTypes'
import { NotesViewsReducer } from '@entities/NotesViews'
import { TagReducer } from '@entities/Tag'
import { NotePatternArticleReducer } from '@features/NotePatternArticle'
import { NotePatternBookReducer } from '@features/NotePatternBook'
import { NotePatternCodeReducer } from '@features/NotePatternCode'
import { NotePatternCourseReducer } from '@features/NotePatternCourse'
import { NotePatternIssueReducer } from '@features/NotePatternIssue'
import { NotePatternLayoutReducer } from '@features/NotePatternLayout'
import { NotePatternServiceReducer } from '@features/NotePatternService'
import { NotePatternTechnologyReducer } from '@features/NotePatternTechnology'
import { NotePatternVideoReducer } from '@features/NotePatternVideo'
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
  notePatternTechnology: NotePatternTechnologyReducer,
  notePatternBook: NotePatternBookReducer,
  notePatternArticle: NotePatternArticleReducer,
  notePatternLayout: NotePatternLayoutReducer,
  notePatternIssue: NotePatternIssueReducer,
  notePatternCode: NotePatternCodeReducer,
  notePatternService: NotePatternServiceReducer,
  notePatternVideo: NotePatternVideoReducer,
  notePatternCourse: NotePatternCourseReducer,
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
