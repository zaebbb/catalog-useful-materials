/* eslint-disable */
import {
  ButtonOneTapSkin,
  Config,
  Connect,
  ConnectEvents,
  VKAuthButtonCallbackResult
} from '@vkontakte/superappkit'
import {v4} from 'uuid'

Config.init({
  // appId: 7303035,
  appId: 51786028,
})

export const vkAuthorizationButton = Connect.buttonOneTapAuth({
  callback: (e: VKAuthButtonCallbackResult) => {
    console.log(e)
    const type = e.type

    if (!type) {
      return false
    }

    switch (type) {
      case ConnectEvents.OneTapAuthEventsSDK.LOGIN_SUCCESS:
        console.log(e)
        return false
      case ConnectEvents.OneTapAuthEventsSDK.FULL_AUTH_NEEDED:
      case ConnectEvents.OneTapAuthEventsSDK.PHONE_VALIDATION_NEEDED:
      case ConnectEvents.ButtonOneTapAuthEventsSDK.SHOW_LOGIN:
        return Connect.redirectAuth({ url: 'http://localhost', state: v4() })
      case ConnectEvents.ButtonOneTapAuthEventsSDK.SHOW_LOGIN_OPTIONS:
        return Connect.redirectAuth({ url: 'http://localhost' })
    }
// xUrVfnaaa7UGWODABJU1
    return false
  },
  options: {
    showAlternativeLogin: false,
    displayMode: 'default',
    showAgreements: false,
    buttonStyles: {
      borderRadius: 8,
      height: 40,
    },
  },
})
