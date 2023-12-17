import { type JwtPayload } from 'jwt-decode'
import GsiButtonConfiguration = google.accounts.id.GsiButtonConfiguration

/**
 * @interface AuthData
 * @description Данные пользователя при авторизации через Google One Tap Button
 * */
export interface AuthData {
  /** Email пользователя */
  email: string
  /** Подтверждение верификации почты пользователя */
  email_verified: boolean
  /** Фамилия пользователя */
  family_name: string
  /** Имя пользователя */
  given_name: string
  /** Фамилия и имя пользователя */
  name: string
  /** Иконка профиля */
  picture: string
}

/**
 * @interface GoogleAuthProps
 * @description Передаваемые параметры компонента GoogleAuth
 * */
export interface GoogleAuthProps extends Omit<GsiButtonConfiguration, 'type'> {
  /** Callback для передачи данных о пользователе, необязательный */
  onChange?: (userData: AuthData) => void
  /** Тип отображения кнопки авторизации, необязательный */
  type?: 'standard' | 'icon'
  /** Токен верификации приложения Google OAuth */
  client_id: string
}

/**
 * @type GoogleAuthJwtData
 * @description Объект JWTPayload с распарсенными данными пользователя
 * */
export type GoogleAuthJwtData = JwtPayload & AuthData
