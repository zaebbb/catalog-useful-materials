import { type rtkApi } from '@api/rtkApi'
import { type CategorySchema, type DeleteCategorySchema } from '@entities/Category'
import { type CounterSchema } from '@entities/Counter'
import { type GoogleAuthSchema } from '@entities/GoogleAuth'
import { type NoteBaseFieldsSchema, type NoteDetailsSchema } from '@entities/Notes'
import { type NotesTypesSchema } from '@entities/NotesTypes'
import { type NotesViewsSchema } from '@entities/NotesViews'
import { type TagSchema, type DeleteTagSchema } from '@entities/Tag'
import { type UserSchema } from '@entities/User'
import { type VKAuthSchema } from '@entities/VKAuth'
import { type CreateCategorySchema } from '@features/CreateCategory'
import { type CreateNoteTypePatternSchema } from '@features/CreateNoteTypePattern'
import { type CreateTagSchema } from '@features/CreateTag'
import { type EditCategorySchema } from '@features/EditCategory'
import { type EditTagSchema } from '@features/EditTag'
import { type NotePatternArticleSchema } from '@features/NotePatternArticle'
import { type NotePatternBookSchema } from '@features/NotePatternBook'
import { type NotePatternCodeSchema } from '@features/NotePatternCode'
import { type NotePatternCourseSchema } from '@features/NotePatternCourse'
import { type NotePatternCustomSchema } from '@features/NotePatternCustom'
import { type NotePatternIssueSchema } from '@features/NotePatternIssue'
import { type NotePatternLayoutSchema } from '@features/NotePatternLayout'
import { type NotePatternServiceSchema } from '@features/NotePatternService'
import { type NotePatternTechnologySchema } from '@features/NotePatternTechnology'
import { type NotePatternVideoSchema } from '@features/NotePatternVideo'
import { type NoteSearchSchema } from '@features/NoteSearch'
import { type ProfileSchema } from '@features/ProfileEdit'
import { type UserEditSchema } from '@features/UserEdit'
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
  notePatternArticle?: NotePatternArticleSchema
  notePatternCode?: NotePatternCodeSchema
  notePatternIssue?: NotePatternIssueSchema
  notePatternLayout?: NotePatternLayoutSchema
  notePatternService?: NotePatternServiceSchema
  notePatternBook?: NotePatternBookSchema
  notePatternVideo?: NotePatternVideoSchema
  notePatternTechnology?: NotePatternTechnologySchema
  notePatternCourse?: NotePatternCourseSchema
  notePatternCustom?: NotePatternCustomSchema
  noteDetails?: NoteDetailsSchema
  createTag?: CreateTagSchema
  editTag?: EditTagSchema
  deleteTag?: DeleteTagSchema
  createCategory?: CreateCategorySchema
  deleteCategory?: DeleteCategorySchema
  editCategory?: EditCategorySchema
  userEdit?: UserEditSchema
  createNoteTypePattern?: CreateNoteTypePatternSchema
  noteSearch?: NoteSearchSchema
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
