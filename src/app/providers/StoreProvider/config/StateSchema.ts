import { type rtkApi } from '@api/rtkApi'
import { type CategorySchema } from '@entities/Category'
import { type CounterSchema } from '@entities/Counter'
import { type GoogleAuthSchema } from '@entities/GoogleAuth'
import { type NoteBaseFieldsSchema, type NoteDetailsSchema } from '@entities/Notes'
import { type NotesTypesSchema } from '@entities/NotesTypes'
import { type NotesViewsSchema } from '@entities/NotesViews'
import { type TagSchema } from '@entities/Tag'
import { type UserSchema } from '@entities/User'
import { type VKAuthSchema } from '@entities/VKAuth'
import { type CreateNotePatternArticleSchema } from '@features/CreateNotePatternArticle'
import { type CreateNotePatternBookSchema } from '@features/CreateNotePatternBook'
import { type CreateNotePatternCodeSchema } from '@features/CreateNotePatternCode'
import { type CreateNotePatternCourseSchema } from '@features/CreateNotePatternCourse'
import { type CreateNotePatternIssueSchema } from '@features/CreateNotePatternIssue'
import { type CreateNotePatternLayoutSchema } from '@features/CreateNotePatternLayout'
import { type CreateNotePatternServiceSchema } from '@features/CreateNotePatternService'
import { type CreateNotePatternTechnologySchema } from '@features/CreateNotePatternTechnology'
import { type CreateNotePatternVideoSchema } from '@features/CreateNotePatternVideo'
import { type ProfileSchema } from '@features/ProfileEdit'
import { type UserLoginSchema } from '@features/UserLogin'
import { type UserRegisterSchema } from '@features/UserRegister'
import {
  type AnyAction,
  type CombinedState, type EnhancedStore,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type AxiosInstance } from 'axios'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async reducers
  userLoginForm?: UserLoginSchema
  userRegister?: UserRegisterSchema
  profileEdit?: ProfileSchema
  googleAuth?: GoogleAuthSchema
  vkAuth?: VKAuthSchema
  notesTypes?: NotesTypesSchema
  notesViews?: NotesViewsSchema
  category?: CategorySchema
  tag?: TagSchema
  noteBaseField?: NoteBaseFieldsSchema
  createNotePatternArticle?: CreateNotePatternArticleSchema
  createNotePatternCode?: CreateNotePatternCodeSchema
  createNotePatternIssue?: CreateNotePatternIssueSchema
  createNotePatternLayout?: CreateNotePatternLayoutSchema
  createNotePatternService?: CreateNotePatternServiceSchema
  createNotePatternBook?: CreateNotePatternBookSchema
  createNotePatternVideo?: CreateNotePatternVideoSchema
  createNotePatternTechnology?: CreateNotePatternTechnologySchema
  createNotePatternCourse?: CreateNotePatternCourseSchema
  noteDetails?: NoteDetailsSchema
}

export type StateSchemaKey = keyof StateSchema

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export type AppConfigStore =
  ToolkitStore &
  {
    reducerManager?: ReducerManager
  }

export interface ThunkExtraArguments {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArguments
  state: StateSchema
}
