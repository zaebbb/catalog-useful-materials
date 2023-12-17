import { jwtDecode } from 'jwt-decode'
import React from 'react'
import {
  type AuthData,
  type GoogleAuthJwtData,
  type GoogleAuthProps,
} from '../lib/types/GoogleAuthTypes'
import cls from './GoogleAuth.module.scss'
import CredentialResponse = google.accounts.id.CredentialResponse

/** @module GoogleAuth */

/**
 * @description Компонент с интеграцией библиотеки Google для авторизации
 * @param {GoogleAuthProps} props - Пропсы типа GoogleAuthProps
 * */
export const GoogleAuth: React.FC<GoogleAuthProps> = (props: GoogleAuthProps) => {
  const {
    client_id,
    onChange,
    type = 'standard',
    theme = 'outline',
    size = 'large',
    ...other
  } = props

  const [buttonId] = React.useState('google-auth-button')

  const handleCallbackResponse = React.useCallback((response: CredentialResponse) => {
    const jwtData: GoogleAuthJwtData = jwtDecode(response.credential)

    const authData: AuthData = {
      email: jwtData.email,
      email_verified: jwtData.email_verified,
      family_name: jwtData.family_name,
      name: jwtData.name,
      given_name: jwtData.given_name,
      picture: jwtData.picture,
    }

    onChange?.(authData)
  }, [onChange])

  React.useEffect(() => {
    google.accounts.id.initialize({
      client_id,
      callback: handleCallbackResponse,
    })

    google.accounts.id.renderButton(
      document.getElementById(buttonId) as HTMLDivElement,
      {
        type,
        theme,
        size,
        ...other,
      }
    )
  }, [buttonId, client_id, handleCallbackResponse, other, size, theme, type])

  return (
    <div id={buttonId} className={cls.GoogleAuth} />
  )
}
