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

/** Ссылка на страницу редактирования заметки */
export const getRouteEditNote = (viewCode: string): string => `/notes/${viewCode}/edit`

/** Ссылка на страницу просмотра заметки */
export const getRouteUserViewNotes = (): string => '/user/notes/'

/** Ссылка на страницу администратора */
export const getRouteAdmin = (): string => '/admin'

/** Ссылка на страницу тегов */
export const getRouteTags = (): string => '/admin/tag'

/** Ссылка на страницу создания тега */
export const getRouteCreateTag = (): string => '/admin/tag/create'

/** Ссылка на страницу редактирования тега */
export const getRouteEditTag = (code: string): string => `/admin/tag/${code}/edit`

/** Ссылка на страницу категорий */
export const getRouteCategories = (): string => '/admin/category'

/** Ссылка на страницу создания категории */
export const getRouteCreateCategory = (): string => '/admin/category/create'

/** Ссылка на страницу редактирования тега */
export const getRouteEditCategory = (code: string): string => `/admin/category/${code}/edit`

/** Ссылка на страницу списка кастомный типов полей */
export const getRouteAdminNotesTypes = (): string => '/admin/notes-types'

/** Ссылка на страницу создания кастомного шаблона */
export const getRouteAdminCreateNoteType = (): string => '/admin/notes-types/create'

/** Ссылка на страницу списка пользователей */
export const getRouteAdminUsers = (): string => '/admin/users'

/** Ссылка на страницу редактирования пользователя */
export const getRouteAdminEditUser = (email: string): string => `/admin/users/${email}/edit`

/** Ссылка на страницу об использовании конфедициальных данных */
export const getRoutePrivacyPolicy = (): string => '/privacy'

/** Ссылка на страницу карты сайта */
export const getRouteSitemap = (): string => '/sitemap'

/** Ссылка на страницу выхода из аккаунта */
export const getRouteLogout = (): string => '/logout'

/** Ссылка на страницу 403 */
export const getRouteForbidden = (): string => '/forbidden'

/** Ссылка на страницу 404 */
export const getRouteNotFound = (): string => '*'
