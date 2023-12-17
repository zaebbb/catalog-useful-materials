/** Ссылка на главную страницу */
export const getRouteMain = (): string => '/'

/** Ссылка на страницу о нас */
export const getRouteAbout = (): string => '/about'

/** Ссылка на страницу авторизации */
export const getRouteLogin = (): string => '/login'

/** Ссылка на страницу регистрации */
export const getRouteRegister = (): string => '/register'

/** Ссылка на страницу профиля */
export const getRouteProfile = (): string => '/user/profile'

/** Ссылка на страницу создания заметки */
export const getRouteCreateNote = (): string => '/user/note/create'

/** Ссылка на страницу просмотра заметки */
export const getRouteViewNote = (viewCode: string): string => `/notes/${viewCode}`

/** Ссылка на страницу об использовании конфедициальных данных */
export const getRoutePrivacyPolicy = (): string => '/privacy'

/** Ссылка на страницу выхода из аккаунта */
export const getRouteLogout = (): string => '/logout'

/** Ссылка на страницу 403 */
export const getRouteForbidden = (): string => '/forbidden'

/** Ссылка на страницу 404 */
export const getRouteNotFound = (): string => '*'
