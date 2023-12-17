import { type StateSchema, StoreProvider } from '@app/providers/StoreProvider'
import { GoogleAuthReducer } from '@entities/GoogleAuth'
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
